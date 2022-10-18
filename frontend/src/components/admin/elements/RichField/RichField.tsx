import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import styles from "./RichField.module.scss";
import RichFieldProps from "./RichField.props";
import MenuBar from "./MenuBar";

const RichField = (props: RichFieldProps): JSX.Element | null => {
    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        content: "<p>Hello World! 🌎️</p>",
        onUpdate: (e) => console.log(e.editor.getHTML()),
    });

    if (editor === null) return null;

    return (
        <div className={styles.wrapper}>
            <MenuBar editor={editor} />
            <EditorContent className={styles.editor} editor={editor} />
        </div>
    );
};

export default RichField;
