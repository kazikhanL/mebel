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

    return (
        <div className={`${styles.wrapper} ${className}`}>
            <div className={styles.container}>
                <button className={styles.btn} onClick={onTitleLevel2}>h2</button>
                <button className={styles.btn} onClick={onTitleLevel3}>h3</button>
                <button className={styles.btn} onClick={onTitleLevel4}>h4</button>
                <button className={styles.btn} onClick={onTitleLevel5}>h5</button>
                <button className={styles.btn} onClick={onTitleLevel6}>h6</button>

                <button className={styles.btn} onClick={onPharagraph}>P</button>
            </div>
            <div className={styles.container}>
                <button className={styles.btn} onClick={onBold}>B</button>
                <button className={styles.btn} onClick={onItalic}>I</button>
                <button className={styles.btn} onClick={onStrike}>S</button>
            </div>
            <div className={styles.container}>
                <button className={styles.btn} onClick={onBulletList}>ul</button>
                <button className={styles.btn} onClick={onOrderedList}>ol</button>
            </div>
        </div>
    );
};

export default MenuBar;
