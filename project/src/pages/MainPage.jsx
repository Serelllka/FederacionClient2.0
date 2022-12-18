import React from "react";
import { useState, useEffect } from "react";
import '../styles/MainPage.css';
import MyButton from '../components/UI/button/MyButton';
import { UserApiClient, ArticleApiClient } from "../utils/ApiClientsInstances";
import MyFieldset from '../components/UI/fieldset/MyFieldset';
import { CondemnationApiClient } from "../utils/ApiClientsInstances";

function MainPage({setActive}) {
    setActive(true)

    const getAllUsers = async () => {
        var users = await UserApiClient.getAllUsersAsync()
        setUsers(users.data.filter(item => item.id !== 1))
    }

    const getAllArticles = async () => {
        const token = localStorage.getItem('token')
        var articles = await ArticleApiClient.getAllArticlesAsync(token)
        setArticles(articles.data)
    }

    useEffect(() => {
        getAllUsers()
        getAllArticles()
    }, [])

    const [condemnation, setCondemnation] = useState({
        convictedId: 0,
        articleId: 0,
        description: '',
        cost: 0
    })



    const [users, setUsers] = useState([])
    const [articles, setArticles] = useState([])

    const [username, setUsername] = useState('')
    const [article, setArticle] = useState('')

    const [convictedId, setConvictedId] = useState(0)
    const [articleId, setArticleId] = useState(0)
    const [cost, setCost] = useState(0)
    const [description, setDescription] = useState('')

    useEffect(() => {
        getUserIdByUsername()
        getArticleIdByName()
    }, [article, username])

    const getUserIdByUsername = () => {
        const filteredArray = users.filter(item => item.username === username)

        if (filteredArray.length !== 0) {
            setConvictedId(filteredArray[0].id)
        }
    }

    const getArticleIdByName = () => {
        const filteredArray = articles.filter(item => item.name === article)
        
        if (filteredArray.length !== 0) {
            setArticleId(filteredArray[0].id)
            setCost(filteredArray[0].currentCost)
        }
    }

    return (
        <div style={{height: "100%"}}>
            <div className="condemn__box">
                <MyFieldset 
                    inputId={'convicted__fieldset'} 
                    optionList={users}
                    setValue={setUsername}
                    getOption={item => {
                        return (
                            <option value={item.username}>{item.name}</option>
                        )
                    }}
                >
                    Осужденный
                </MyFieldset>

                <MyFieldset 
                    inputId={'article__fieldset'} 
                    optionList={articles} 
                    setValue={setArticle}
                    getOption={item => {
                        return (
                            <option value={item.name}>{item.currentCost}</option>
                        )
                    }}
                >
                    Статья
                </MyFieldset>
            </div>

            <div className="condemn__send">
                <MyButton isActive onClick={
                    () => {
                        const token = localStorage.getItem('token')
                        CondemnationApiClient.createAsync(token, convictedId, articleId, description, parseFloat(cost))
                    }
                }>
                    ОСУДИТЬ!!!
                </MyButton>
            </div>
        </div>
    )
}

export default MainPage