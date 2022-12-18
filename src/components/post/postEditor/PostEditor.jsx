import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import { convertFromRaw, convertToRaw } from "draft-js";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("react-draft-wysiwyg").then((mod) => mod.Editor), { ssr: false });

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default class PostEditor extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			editorState: EditorState.createEmpty(),
		};
	}
	onEditorStateChange = (editorState) => {
		this.setState({
			editorState,
		});
		this.props.handleContent(convertToRaw(editorState.getCurrentContent()));
	};

	uploadImageCallBack = (file) => {
		const data = new FormData();
		data.append("file", file);
	};
}
