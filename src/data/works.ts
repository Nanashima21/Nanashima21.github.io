import type { works } from "../types";

export const worksData = [
  {
    title: "ToGather",
    text: "ハッカソンで制作した作品です。複数の出発駅からおすすめの駅と周辺のお店を提案します。大人数で集まるときの場所決めで活用できます！",
    stacks: ["TypeScript", "React", "Go", "Echo", "PostgreSQL"],
    links: [
      ["github", "ToGather"],
      [
        "drive",
        "https://www.canva.com/design/DAF6evopcIo/UdRYYtwNRO8SzdgSl_snfg/view",
      ],
      ["website", "https://geek-hackathon-psi.vercel.app/"],
    ],
    image: "togather.png",
  },
  {
    title: "ポートフォリオサイト",
    text: "このWebサイトです。これまでやってきたことを整理したかったことと、就活で少しでも見せれるものがあればと思い制作しました。",
    stacks: ["TypeScript", "React"],
    links: [["github", "Nanashima21.github.io"]],
    image: "portfolio.png",
  },
  {
    title: "MAC2023 Website",
    text: "2023年に東京工業大学で開催される国際会議のサブイベントとして開催されるイベントサイトの制作をしました。",
    stacks: ["HTML", "CSS"],
    links: [["website", "https://xdefago.github.io/mac23/"]],
    image: "mac.png",
  },
  {
    title: "認知症予防のためのトレーニングアプリ",
    text: "株式会社エクサウィザーズのインターンシップで制作したAndroidアプリです。認証症患者の増加という社会問題に対して技術を用いて貢献したく、このアプリの開発を行いました。",
    stacks: ["kotlin", "Jetpack Compose", "Ktor", "MongoDB"],
    links: [
      [
        "drive",
        "https://drive.google.com/file/d/1pI9RaDkg7w9QIw0nOE9Euasy5ZlB4kPA/view?usp=sharing",
      ],
    ],
    image: "dimentia.png",
  },
  {
    title: "Tonkatsu",
    text: "大学院のチーム開発の講義で制作したアイスブレイクアプリです。好きなお題に対してChatGPTがヒントを与えるという形で元のお題を当てるというクイズゲームになっています。",
    stacks: ["TypeScript", "React", "Go", "Gin", "MySQL"],
    links: [
      [
        "drive",
        "https://drive.google.com/file/d/1naOjITf8wvWnVR05l1dl8GLNe5qE1VEM/view?usp=sharing",
      ],
      [
        "movie",
        "https://drive.google.com/file/d/1E6ptOycXYmzQ74rnu5i615wzf3NOgOAI/view?usp=sharing",
      ],
    ],
    image: "tonkatsu.png",
  },
  {
    title: "library-rs",
    text: "プログラミング言語Rustのライブラリを自作したものです。使いこなせていないため、まだまだ精進が必要です。。。",
    stacks: ["Rust"],
    links: [["github", "library-rs"]],
    image: "gitrust.webp",
  },
  {
    title: "経路探索ヴィジュアライザ",
    text: "研究室紹介と学内でアルゴリズムの面白さをより多くの人に知ってもらうために制作しました。自身にとっての初めての開発でした。",
    stacks: ["JavaScript", "React"],
    links: [
      ["github", "PathfindingVisualizer"],
      ["app", "PathfindingVisualizer/"],
    ],
    image: "pathfinding.png",
  },
  {
    title: "ソーティングヴィジュアライザ",
    text: "こちらも経路探索ヴィジュアライザと同じ目的で制作しました。2つのソートを同時実行するという機能をつけることで比較がしやすくなりました。",
    stacks: ["JavaScript", "React"],
    links: [
      ["github", "SortingVisualizer"],
      ["app", "SortingVisualizer/"],
    ],
    image: "sort.png",
  },
  {
    title: "卒業研究",
    text: "大学では自律分散ロボットにおける特定の問題を解決するアルゴリズムの研究をしていました。",
    stacks: ["Python", "Promela"],
    links: [],
    image: "bachelor_thesis.png",
  },
] satisfies Array<works>;
