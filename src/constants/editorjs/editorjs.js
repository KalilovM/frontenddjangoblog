import Header from "@editorjs/header";
import List from "@editorjs/list"
import CheckList from "@editorjs/checklist"
import Table from "@editorjs/table"
import Quote from "@editorjs/quote"
import Warning from "@editorjs/warning"
import Delimiter from "@editorjs/delimiter"
import SimpleVideo from "simple-video-editorjs"
import Embed from "@editorjs/embed"
import CodeBox from '@bomdi/codebox';

export const DEFAULT_INITIAL_DATA = () => {
    return {
        "time": new Date().getTime(),
        "blocks": [
            {
                "type": "header",
                "data": {
                    "text": "Содержимое поста",
                    "level": 1
                }
            },
        ]
    }
}
export const EDITTOR_HOLDER_ID = "editorjs"


export const EDITOR_TOOLS = {
    header: {
        class: Header,
    },
    list: {
        class: List,
        inlineToolbar: true,
        config: {
            defaultStyle: 'unordered'
        }
    },
    checklist: {
        class: CheckList,
        inlineToolbar: true
    },
    table: {
        class: Table,
        inlineToolbar: false,
        config: {
            rows: 2,
            cols: 3
        }
    },
    quote: {
        class: Quote,
        inlineToolbar: true,
        config: {
            quotePlaceholder: 'Enter a quote',
            captionPlaceholder: 'Quote\'s author',
        },
    },
    warning: {
        class: Warning,
        inlineToolbar: true,
        config: {
            titlePlaceholder: "Title",
            messagePlaceholder: "Message"
        }
    },
    delimiter: Delimiter,
    video:{
        class: SimpleVideo
    },
    embed: {
        class: Embed
    },
    codeBox: {
        class:CodeBox,
        config: {
            themeURL: 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/dracula.min.css', // Optional
            themeName: 'atom-one-dark', // Optional
            useDefaultTheme: 'dark' // Optional. This also determines the background color of the language select drop-down
        }
    }


}
