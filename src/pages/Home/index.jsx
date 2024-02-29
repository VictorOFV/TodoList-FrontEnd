import { useContext, useEffect, useState } from "react";
import { authContext } from "../../context/Auth";

import styles from "./styles.module.scss";
import image from "../../assets/image.jpg"
import avatar from "../../assets/avatar.jpg"
import Card from "../../components/Card";
import { Link } from "react-router-dom";

function Home() {
    const { api } = useContext(authContext)
    const [checklists, setChecklists] = useState([])

    useEffect(() => {
        const getChecklists = async () => {
            const response = await api.get("/checklist")
            console.log(response.data.checklists)
            setChecklists(response.data.checklists)
        }
        getChecklists()
    }, [])

    return (
        <main>
            <div className={styles.checklistsContainer}>
                {checklists.map(checklist => (
                    <Link to={`checklist/${checklist._id}`} key={checklist._id} >
                        <Card checklist={checklist} image={image} avatar={avatar}/>
                    </Link>
                ))}
            </div>
        </main>
    )
}

export default Home