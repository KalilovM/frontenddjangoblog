import { BubbleMenu, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import classnames from "classnames";
import styles from "./CustomEditor.module.scss";
import React from "react";

const CustomEditor = () => {
	const editor = useEditor({
		extensions: [StarterKit],
		content: `
      <p>
        Hey, try to select some text here. There will popup a menu for selecting some inline styles. Remember: you have full control about content and styling of this menu.
      </p>
    `,
	});

	return (
		<>
			{editor && (
				<BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
					<button
						onClick={() => editor.chain().focus().toggleBold().run()}
						className={classnames({ [`${styles.bubble__button__active}`]: editor.isActive("bold"), [`${styles.bubble__button}`]: true })}
					>
						bold
					</button>
					<button
						onClick={() => editor.chain().focus().toggleItalic().run()}
						className={classnames({ [`${styles.bubble__button__active}`]: editor.isActive("italic"), [`${styles.bubble__button}`]: true })}
					>
						italic
					</button>
					<button
						onClick={() => editor.chain().focus().toggleStrike().run()}
						className={classnames({ [`${styles.bubble__button__active}`]: editor.isActive("strike"), [`${styles.bubble__button}`]: true })}
					>
						strike
					</button>
				</BubbleMenu>
			)}
			<EditorContent editor={editor} />
		</>
	);
};

export default CustomEditor;
