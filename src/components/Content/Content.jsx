
import Block_film from './Block_film/Block_film'
import Main_film from './Main_film/Main_film'
import styles from './Content.module.css'
import Greetings from './Greetings/Greetings'

{/* массив может быть из компонент, соответсвенно может быть обработан как массив 
    соответсвенно в массив компонент можно преобразовать простой массив
*/}


const Content = (props) => {

    let mapPics = props.pageContent.listSerials.map(item => <Block_film name={item.name} pics={item.img} />);

    let addSerialPost = () => {
        props.addOneSerial('sherlock', props.pageContent.newPosterBody);
    }

    let updatePost = (e) => {
        props.updateForDrawing(e.target.value);
    }

    return (
        <div className={styles.content}>
            <Greetings />
            <Main_film film={props.pageContent.mainPoster} />
            <Greetings />
            <div className={styles.listSerials}>
                {mapPics}
            </div>
            <div className={styles.add}>
                <span>add serial link</span><br />
                <input type="text" onChange={updatePost} value={props.pageContent.newPosterBody}/>
                <button onClick={addSerialPost}>serial</button>
            </div>
        </div>
    )
}

export default Content;