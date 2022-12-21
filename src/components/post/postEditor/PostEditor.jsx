import React from "react";
import CustomEditor from "../../editor/CustomEditor";
import EditorWrapper from "../../layouts/editorWrapper/EditorWrapper";
import styles from "./PostEditor.module.scss";

export default function PostEditor() {
	const [title, setTitle] = React.useState("");
	const titleHandler = (e) => {
		setTitle(e.target.value);
	};
	// make input auto grow
	React.useEffect(() => {
		const titleInput = document.getElementById("title");
		titleInput.addEventListener("keydown", (e) => {
			if (e.key === "Enter") {
				e.preventDefault();
			}
		});
		titleInput.style.height = "52px";
		titleInput.style.height = titleInput.scrollHeight + "px";
	}, [title]);

	return (
		<div className={styles.wrapper}>
			<EditorWrapper>
				<div className={styles.title}>
					<textarea id="title" type="text" placeholder="Title" value={title} onChange={titleHandler} />
				</div>
				<CustomEditor />
			</EditorWrapper>
		</div>
	);
}
