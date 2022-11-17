import React from 'react';
import EditorJS from "@editorjs/editorjs";
import {DEFAULT_INITIAL_DATA, EDITOR_TOOLS, EDITTOR_HOLDER_ID} from "../../constants/editorjs/editorjs";
import ImageTool from "@editorjs/image";
import styles from "./editor.module.scss";
import BottomBar from "./bottomBar/bottomBar";
import {Instance, InstanceApi} from "../../sevices/axios/axios";
import Layout from "./statuses/layout";


const Editor = (props) => {
    const ejInstance = React.useRef();
    const textArea = React.useRef(null)
    const [images, setImages] = React.useState([])

    // values
    const [title, setTitle] = React.useState("")
    const [editorData, setEditorData] = React.useState(DEFAULT_INITIAL_DATA);
    const [editingPage, setEditingPage] = React.useState(true)
    const [cover, setCover] = React.useState("")
    const [shortDesc, setShortDesc] = React.useState("")
    const [activateSendButton, setActivateSendButton] = React.useState(false)
    const [isSuccess, setIsSuccess] = React.useState(false)

    React.useEffect(() => {
        initEditor();
    }, []);

    React.useEffect(() => {
        if (cover && title?.length > 10 && shortDesc?.length > 50) {
            setActivateSendButton(true)
        }
        else {
            setActivateSendButton(false)
        }


    },[title,cover,shortDesc])


    const initEditor = () => {
        const editor = new EditorJS({
            holder: EDITTOR_HOLDER_ID,
            logLevel: "ERROR",
            data: editorData,
            onReady: () => {
                ejInstance.current = editor;
            },
            autofocus: true,
            tools: {
                ...EDITOR_TOOLS,
                image: {
                    class: ImageTool,
                    config: {
                        uploader: {
                            async uploadByFile(file) {
                                const formData = new FormData()
                                formData.append("photo", file)
                                const response = await Instance.post("image/", formData)
                                setImages([...images, response.data.file.url.match(/\w+\.[0-9a-z]+$/i)[0]])
                                return response.data
                            },
                        }
                    }
                }
            }
        });


    };

    const ImageUpload = (data) => {
        setCover(data.target.files[0])
    }

    const titleChange = (e) => {
        setTitle(e.target.value)
    }

    const AutoHeight = (e) => {
        textArea.current.style.height = "0px"
        const scrollHeight = textArea.current.scrollHeight;
        textArea.current.style.height = scrollHeight + "px";
        setShortDesc(e.target.value)
    }

    const Settings = async () => {
        setEditingPage((prev) => !prev)
        if (editingPage) {
            let savedData = await ejInstance.current?.saver.save()
            let savedImages = []
            setEditorData(savedData);
            savedData.blocks.forEach((value) => {
                if (value.type === "image") {
                    savedImages.push(value.data.file.url.match(/\w+\.[0-9a-z]+$/i)[0])
                }
            })
            let unique = images.filter((o) => savedImages.indexOf(o) === -1);

            if (unique.length >= 1) {
                await Instance.delete("image/delete/", {
                    data: {
                        photo: unique
                    }
                }).then(() => {
                    setImages([])
                })
            }


            ejInstance.current.destroy();
            ejInstance.current = null;
        }
        if (!editingPage) {
            initEditor();
        }


    }

    const SendPost = async () => {
        let formData = new FormData()
        formData.append("title",title)
        formData.append("content",JSON.stringify(editorData))
        formData.append("short_content",shortDesc)
        formData.append("cover",cover)

        await InstanceApi.post("", formData).then(() => {
            setIsSuccess(true)
        })

    }

    return (
        isSuccess?
            <Layout/>:
        editingPage ?
            <div className={styles.container}>
                <section
                    id={EDITTOR_HOLDER_ID}
                    className={styles.content}
                ></section>
                <BottomBar buttons={[{onclick: Settings, name: "Перейки к следующим настройкам"}]}/>
            </div> :
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2>Параметры поста</h2>
                    <div className={styles.inputs}>
                        <label htmlFor="title">Заголовок</label>
                        <input
                            className={styles.inputs_title}
                            onChange={titleChange}
                            value={title}
                            type="text"
                            name="title"
                            id="title"
                        />
                    </div>
                    <div className={styles.input_image}>
                        <label htmlFor="image">
                            {!cover && (<><p>Изображение для превью</p>
                                <span>рекомендуевмое разрешение 710x400</span></>)}
                        </label>
                        <input
                            className={styles.inputs_title}
                            type="file"
                            name="image"
                            id="image"
                            accept="image/*"
                            onChange={ImageUpload}
                        />
                        {cover && <img
                            src={URL.createObjectURL(cover)}
                            alt="cover"
                        />}
                    </div>
                    <div className={styles.inputs}>
                        <label htmlFor="short_desc">Короткое превью текст
                        </label>
                        <textarea
                            rows={1}
                            value={shortDesc}
                            onChange={AutoHeight}
                            ref={textArea}
                            className={styles.inputs_title}
                            name="short_desc"
                            id="short_desc"
                        />
                    </div>
                </div>
                <BottomBar
                    buttons={[{onclick: Settings, name: "Назад"}, {
                        disabled: !activateSendButton,
                        onclick: activateSendButton? SendPost:null,
                        name: "Отправить на модерацию"
                    }]}

                />
            </div>


    );
}

export default Editor;