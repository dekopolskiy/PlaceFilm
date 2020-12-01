import styles from './Section.module.css'
const { default: Fifa } = require("./Categories/FIFA")
const { default: Nba } = require("./Categories/NBA")
const { default: Nhl } = require("./Categories/NHL")
const { default: Ufc } = require("./Categories/UFC")


const Section = () => {
    return (
        <div className={styles.section}>
            <Fifa />
            <Nba />
            <Nhl />
            <Ufc />
        </div>
    )
}

export default Section;