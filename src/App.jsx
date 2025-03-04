import React, { useState, useEffect, useCallback } from "react";
//import defaultDataset from "./dataset";
import "./assets/styles/style.css";
import { AnswersList, Chats, FormDialog } from "./components"; //'./components/index';の省略
import { db } from "./firebase/index";
import { collection, getDocs } from "firebase/firestore";

const App = () => {
    //初期化
    const [answers, setAnswers] = useState([]);
    const [chats, setChats] = useState([]);
    const [currentId, setCurrentId] = useState("init");
    const [dataset, setDataset] = useState({});
    const [open, setOpen] = useState(false);

    //次の質問を受け取り情報を更新する
    const displayNextQuestion = (nextQuestionId, nextDataset) => {
        // 新しい配列を作成して更新
        addChat({
            text: nextDataset.question,
            type: "question",
        });

        setAnswers(nextDataset.answers);
        setCurrentId(nextQuestionId);
    };

    //選択肢を選択した時の処理
    const selectAnswer = (selectedAnswer, nextQuestionId) => {
        switch (true) {
            case nextQuestionId === "contact":
                handleClickOpen();
                break;

            case /^https:*/.test(nextQuestionId):
                const a = document.createElement("a");
                a.href = nextQuestionId;
                a.target = "_blank";
                a.click();
                return;
            default:
                // 新しい配列を作成して更新
                addChat({
                    text: selectedAnswer,
                    type: "answer",
                });

                setTimeout(
                    () =>
                        displayNextQuestion(
                            nextQuestionId,
                            dataset[nextQuestionId]
                        ),
                    500
                );
                break;
        }
    };

    const addChat = (chat) => {
        setChats((prevChats) => {
            return [...prevChats, chat];
        });
    };

    const handleClickOpen = useCallback(() => {
        setOpen(true);
    }, [setOpen]);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    useEffect(() => {
        (async () => {
            try {
                const tempDataset = {};
                const questionsCol = collection(db, "questions");
                const questionsSnapshot = await getDocs(questionsCol);
                questionsSnapshot.forEach((doc) => {
                    const id = doc.id;
                    const data = doc.data();
                    tempDataset[id] = data;
                });

                setDataset(tempDataset);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        })();
    }, []); // データの取得のみを行う

    // datasetが更新されたときのみ初期メッセージを表示
    useEffect(() => {
        if (dataset[currentId]) {
            displayNextQuestion(currentId, dataset[currentId]);
        }
    }, [dataset]); // datasetが変更されたときのみ実行

    useEffect(() => {
        const scrollArea = document.getElementById("scroll-area");
        if (scrollArea) {
            scrollArea.scrollTop = scrollArea.scrollHeight;
        }
    });

    return (
        <section className="c-section">
            <div className="c-box">
                <Chats chats={chats} />
                <AnswersList answers={answers} select={selectAnswer} />
            </div>
            <FormDialog open={open} handleClose={handleClose} />
        </section>
    );
};

export default App;
