const defaultDataset = {
    "init": {
        answers: [
            {content: "今日のおすすめを知りたい", nextId: "recommendation"},
            {content: "新しい料理を試したい", nextId: "try_new_dish"},
            {content: "お問い合わせ", nextId: "contact"},
            {content: "お腹は空いていない他のことをしたい", nextId: "not_hungry"},
        ],
        question: "こんにちは！🍚MesiMasterです。今日はどんなご飯をお探しですか？",
    },
    "recommendation": {
        answers: [
            {content: "和食が食べたい", nextId: "japanese"},
            {content: "洋食が食べたい", nextId: "western"},
            {content: "中華が食べたい", nextId: "chinese"},
            {content: "その他", nextId: "other_cuisine"}
        ],
        question: "今日はどんなジャンルの料理が気になりますか？",
    },
    "japanese": {
        answers: [
            {content: "レシピを見る", nextId: "recipe_japanese"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "和食ですね！おすすめは「焼き魚定食」です。シンプルで美味しいですよ。",
    },
    "recipe_japanese": {
        answers: [
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "焼き魚定食のレシピはこちらです：\n1. 魚を塩で下味をつける\n2. グリルで焼く\n3. ご飯と味噌汁を添える",
    },
    "western": {
        answers: [
            {content: "レシピを見る", nextId: "recipe_western"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "洋食ですね！おすすめは「パスタ・ボロネーゼ」です。ボリューム満点です。",
    },
    "recipe_western": {
        answers: [
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "パスタ・ボロネーゼのレシピはこちらです：\n1. パスタを茹でる\n2. ミートソースを作る\n3. パスタにソースをかける",
    },
    "chinese": {
        answers: [
            {content: "レシピを見る", nextId: "recipe_chinese"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "中華ですね！おすすめは「麻婆豆腐」です。ピリ辛でご飯が進みます。",
    },
    "recipe_chinese": {
        answers: [
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "麻婆豆腐のレシピはこちらです：\n1. 豆腐を切る\n2. ひき肉と豆板醤を炒める\n3. 豆腐を加えて煮込む",
    },
    "other_cuisine": {
        answers: [
            {content: "レシピを見る", nextId: "recipe_other"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "その他の料理ですね！おすすめは「タコス」です。スパイシーで美味しいですよ。",
    },
    "recipe_other": {
        answers: [
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "タコスのレシピはこちらです：\n1. タコスシェルを用意する\n2. 好きな具材を詰める\n3. ソースをかける",
    },
    "contact": {
        answers: [
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "お問い合わせはこちらからお願いします。",
    },
    "try_new_dish": {
        answers: [
            {content: "レシピを見る", nextId: "recipe_new_dish"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "新しい料理ですね！おすすめは「クスクスサラダ」です。ヘルシーで美味しいですよ。",
    },
    "recipe_new_dish": {
        answers: [
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "クスクスサラダのレシピはこちらです：\n1. クスクスを準備する\n2. 野菜を切る\n3. ドレッシングをかける",
    },
    "not_hungry": {
        answers: [
            {content: "Youtubeで時間を潰す", nextId: "https://www.youtube.com"},
            {content: "Xで時間を潰す", nextId: "https://x.com"},
            {content: "Instagramで時間を潰す", nextId: "https://www.instagram.com"},
            {content: "お腹がすいた", nextId: "init"}
        ],
        question: "お腹が空いたら、いつでもお声がけくださいね！",
    },
}

export default defaultDataset