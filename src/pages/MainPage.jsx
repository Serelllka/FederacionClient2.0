import '../styles/MainPage.css';
import MyButton from '../components/UI/button/MyButton';
import {UserClient} from '../api/UserClient'
import MyFieldset from '../components/UI/fieldset/MyFieldset';

function MainPage({setActive}) {
    setActive(true)

    const getAllUsersAsync = async() => {
        const client = new UserClient()
        var users = await client.getAllUsers()
    }

    return (
        <div style={{height: "100%"}}>
            <div class="condemn__box">
                <MyFieldset lable={'Осужденный'}/>

                <MyFieldset lable={'Статья'}/>
            </div>

            <div class="condemn__send">
                <MyButton active>
                    ОСУДИТЬ!!!
                </MyButton>
            </div>
        </div>
    )
}

export default MainPage