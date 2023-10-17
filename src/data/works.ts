import type { works } from "../types"

export const worksData = [
    {
        title: "ポートフォリオサイト",
        text: "このWebサイトです。これまでやってきたことを整理したかったことと、就活で少しでも見せれるものがあればと思い制作しました。",
        stacks: ["TypeScript", "React"],
        image: "portfolio.png"
    },
    {
        title: "MAC2023 Website",
        text: "2023年に東京工業大学で開催される国際会議のサブイベントとして開催されるイベントサイトの制作をしました。",
        stacks: ["HTML", "CSS"],
        image: "mac.png"
    },
    {
        title: "認知症予防のためのトレーニングアプリ",
        text: "株式会社エクサウィザーズのインターンシップで制作したAndroidアプリです。認証症患者の増加という社会問題に対して技術を用いて貢献したく、このアプリの開発を行いました。",
        stacks: ["kotlin", "Jetpack Compose", "Ktor", "MongoDB"],
        image: "dimentia.png"
    },
    {
        title: "Tonkatsu",
        text: "大学院のチーム開発の講義で制作したアイスブレイクアプリです。好きなお題に対してChatGPTがヒントを与えるという形で元のお題を当てるというクイズゲームになっています。",
        stacks: ["TypeScript", "React", "Go", "MySQL"],
        image: "tonkatsu.png"
    },
    {
        title: "library-rs",
        text: "プログラミング言語Rustのライブラリを自作したものです。使いこなせていないため、まだまだ精進が必要です。。。",
        stacks: ["Rust"],
        image: "gitrust.webp"
    },
    {
        title: "経路探索ヴィジュアライザ",
        text: "研究室紹介と学内でアルゴリズムの面白さをより多くの人に知ってもらうために制作しました。自身にとっての初めての開発でした。",
        stacks: ["JavaScript", "React"],
        image: "pathfinding.png"
    },
    {
        title: "ソーティングヴィジュアライザ",
        text: "こちらも経路探索ヴィジュアライザと同じ目的で制作しました。2つのソートを同時実行するという機能をつけることで比較がしやすくなりました。",
        stacks: ["JavaScript", "React"],
        image: "sort.png"
    },
    {
        title: "卒業研究",
        text: "大学では自律分散ロボットにおける特定の問題を解決するアルゴリズムの研究をしていました。",
        stacks: ["Python", "Promela"],
        image: "bachelor_thesis.png"
    },
] satisfies Array<works>;