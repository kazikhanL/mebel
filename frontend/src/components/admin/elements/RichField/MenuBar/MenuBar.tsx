import styles from "./MenuBar.module.scss";
import MenuBarProps from "./MenuBar.props";

const MenuBar = ({ className = "", editor }: MenuBarProps): JSX.Element => {
    const onTitleLevel2 = () => editor.chain().focus().toggleHeading({ level: 2 }).run();
    const onTitleLevel3 = () => editor.chain().focus().toggleHeading({ level: 3 }).run();
    const onTitleLevel4 = () => editor.chain().focus().toggleHeading({ level: 4 }).run();
    const onTitleLevel5 = () => editor.chain().focus().toggleHeading({ level: 5 }).run();
    const onTitleLevel6 = () => editor.chain().focus().toggleHeading({ level: 6 }).run();

    const onPharagraph = () => editor.chain().focus().setParagraph().run();

    const onBold = () => editor.chain().focus().toggleBold().run();
    const onItalic = () => editor.chain().focus().toggleItalic().run();
    const onStrike = () => editor.chain().focus().toggleStrike().run();

    const onBulletList = () => editor.chain().focus().toggleBulletList().run();
    const onOrderedList = () => editor.chain().focus().toggleOrderedList().run();

    const defaultButtonStyle = styles.button;
    const activeButtonStyle = `${styles.button} ${styles.buttonActive}`;

    const titleStyles2 = editor.isActive("heading", { level: 2 }) ? activeButtonStyle : defaultButtonStyle;
    const titleStyles3 = editor.isActive("heading", { level: 3 }) ? activeButtonStyle : defaultButtonStyle;
    const titleStyles4 = editor.isActive("heading", { level: 4 }) ? activeButtonStyle : defaultButtonStyle;
    const titleStyles5 = editor.isActive("heading", { level: 5 }) ? activeButtonStyle : defaultButtonStyle;
    const titleStyles6 = editor.isActive("heading", { level: 6 }) ? activeButtonStyle : defaultButtonStyle;

    const pharagraphStyles = editor.isActive("paragraph") ? activeButtonStyle : defaultButtonStyle;

    const boldStyles = editor.isActive("bold") ? activeButtonStyle : defaultButtonStyle;
    const italicStyles = editor.isActive("italic") ? activeButtonStyle : defaultButtonStyle;
    const strikeStyles = editor.isActive("strike") ? activeButtonStyle : defaultButtonStyle;

    const bulletListStyles = editor.isActive("bulletList") ? activeButtonStyle : defaultButtonStyle;
    const orderedListStyles = editor.isActive("orderedList") ? activeButtonStyle : defaultButtonStyle;

    return (
        <div className={`${styles.wrapper} ${className}`}>
            <div className={styles.container}>
                <button className={titleStyles2} onClick={onTitleLevel2}>h2</button>
                <button className={titleStyles3} onClick={onTitleLevel3}>h3</button>
                <button className={titleStyles4} onClick={onTitleLevel4}>h4</button>
                <button className={titleStyles5} onClick={onTitleLevel5}>h5</button>
                <button className={titleStyles6} onClick={onTitleLevel6}>h6</button>

                <button className={pharagraphStyles} onClick={onPharagraph}>P</button>
            </div>
            <div className={styles.container}>
                <button className={boldStyles} onClick={onBold}>B</button>
                <button className={italicStyles} onClick={onItalic}>I</button>
                <button className={strikeStyles} onClick={onStrike}>S</button>
            </div>
            <div className={styles.container}>
                <button className={bulletListStyles} onClick={onBulletList}>ul</button>
                <button className={orderedListStyles} onClick={onOrderedList}>ol</button>
            </div>
        </div>
    );
};

export default MenuBar;
