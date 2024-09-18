import cls from "./TourCurd.module.scss"

type TToursCurd = {
    title: string;
    description: string;
    id: string;
    image: string;

};

const TourCurd = (props:TToursCurd) => {
    const { title, description, id, image } = props

    return (
        <div className={cls.main}>
            main
        </div>
    );
};

export default TourCurd;