import styles from '../styles/Home.module.css';

interface props {
    title: string;
    id?: string;
}

export default function Title(props: props) {
    return (
        <h1 className={styles.title} id={props.id ?? props.title.replace(/ /gi, '-').toLowerCase()}>
            {props.title}
        </h1>
    )
}