"use client"

import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { X } from "lucide-react"

// プロジェクトデータの型定義
interface Project {
  title: string
  desc: string
  details: string
  technologies: string[]
}

// Project data with additional details
const projects: Project[] = [
  {
    title: "DidLife",
    desc: "不登校自動を未然に防ぐアプリ",
    details:
      "不登校の兆候を早期に発見し、適切なサポートを提供するためのアプリです。生徒の出席パターン、学校での活動、気分の変化などを分析し、リスクがある場合に教師や保護者に通知します。早期介入により、不登校を未然に防ぐことを目指しています。",
    technologies: ["Android", "Jetpack Compose", "Firebase", "Machine Learning"],
  },
  {
    title: "ShiftTape",
    desc: "シフト管理アプリ",
    details:
      "複雑なシフト管理を簡単にするためのアプリです。従業員のスケジュール調整、シフト交換リクエスト、勤務時間の追跡などの機能を提供します。直感的なインターフェースで、管理者と従業員の両方にとって使いやすいシステムを実現しました。",
    technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
  },
  {
    title: "MilkyPublisher",
    desc: "初心者向けロボットプログラミングアプリ",
    details:
      "プログラミング初心者でも簡単にロボットを制御できるアプリケーションです。ビジュアルプログラミングインターフェースを採用し、ドラッグ＆ドロップで命令を組み立てることができます。教育現場での利用を想定し、段階的に学習できる構成になっています。",
    technologies: ["Flutter", "Dart", "ROS", "Python"],
  },
  {
    title: "プロジェクト詳細動画",
    desc: "大学で活動しているPJの紹介動画",
    details:
      "大学のプロジェクト活動を紹介する動画シリーズを制作しました。各チームの取り組み、目標、成果を分かりやすく伝えることで、新たなメンバーの獲得や外部との連携強化を目指しています。撮影から編集まで全て担当しました。",
    technologies: ["Adobe Premiere Pro", "After Effects", "Filmmaking", "Storytelling"],
  },
  {
    title: "LENON",
    desc: "技育CAMPハッカソンで受賞!",
    details:
      "技育CAMPハッカソンで開発し、受賞したプロジェクトです。音楽を通じて人々をつなげるプラットフォームで、好みの音楽に基づいてマッチングする機能や、共同プレイリスト作成機能などを実装しました。48時間という限られた時間の中で、チームワークを活かして完成させました。",
    technologies: ["React", "Node.js", "Spotify API", "Socket.io"],
  },
  {
    title: "おかんに怒られる",
    desc: "全く新しいアラームアプリの開発",
    details:
      "従来のアラームとは一線を画す、ユニークなアラームアプリです。目覚まし時計として機能するだけでなく、「おかん」キャラクターが様々なセリフで起床を促します。スヌーズを繰り返すと、だんだん怒り度が増していくという面白い仕掛けも実装しています。",
    technologies: ["Swift", "SwiftUI", "Core Audio", "Local Notifications"],
  },
]

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project)
    setIsDialogOpen(true)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Fixed Navigation Header */}
      <header className="fixed top-0 w-full bg-[#3498db] text-white py-4 z-50 shadow-md">
        <nav className="container mx-auto px-4">
          <ul className="flex justify-end space-x-6 text-lg font-medium">
            {["about", "skills", "projects", "reports", "contact"].map((section) => (
              <li key={section} className="hover:text-yellow-300 transition-colors">
                <a href={`#${section}`}>{section.charAt(0).toUpperCase() + section.slice(1)}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 flex flex-col items-center px-4">
        <div className="mb-8 transform transition hover:scale-105 duration-300">
          <Image
            src="/monaka.png"
            alt="プロフィール画像"
            width={192}
            height={192}
            priority
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-yellow-400 shadow-2xl"
          />
        </div>

        <h1 className="text-sky-500 text-4xl md:text-6xl font-bold drop-shadow-lg mb-6">高岡己太朗</h1>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-sky-500 mb-8">About me</h2>
          <p className="text-xl text-center max-w-6xl mx-auto text-black">
            金沢工業大学で情報工学を学んでいる&quot;こたろう&quot;と申します
            <br />
            最近はAndroidアプリ開発にハマっていて、技術イベントにもよく出没します。
            <br />
            コードを書いたり、最新技術を追ったりするのが好きで、つい時間を忘れてしまうタイプです。
            <br />
            猫とゲームが癒し。
            <span className="block mt-4 mb-6">気軽に話しかけてください！</span>
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-sky-500 mb-10">Skills</h2>
          <div className="flex justify-center flex-wrap gap-3 md:gap-4 max-w-4xl mx-auto">
            {[
              "Java",
              "Jetpack Compose",
              "SwiftUI",
              "C",
              "Python",
              "Flutter",
              "React",
              "Next.js",
              "Go",
              "Kubernetes",
              "LLM",
              "Ruby",
              "Unity",
            ].map((skill) => (
              <div
                key={skill}
                className="px-6 py-2 bg-emerald-500 text-white text-lg rounded-full hover:bg-emerald-600 transition shadow-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-sky-500 mb-8">プロジェクト（押すと詳細が読めます）</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project) => (
              <button
                key={project.title}
                onClick={() => openProjectDetails(project)}
                className="h-36 px-6 py-6 bg-white text-sky-500 rounded-lg border-2 border-white shadow-xl 
                hover:bg-gradient-to-r hover:from-orange-400 hover:via-pink-500 hover:to-purple-500 
                hover:text-white hover:shadow-lg hover:-translate-y-1 active:scale-95 
                transition transform flex flex-col items-start"
              >
                <span className="text-xl font-bold mb-4">{project.title}</span>
                <span className="text-base text-black hover:text-white">{project.desc}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedProject && (
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <div className="flex items-center justify-between">
                <DialogTitle className="text-xl font-bold text-sky-500">{selectedProject.title}</DialogTitle>
              </div>
              <DialogDescription className="text-base font-medium text-gray-700 mt-1">
                {selectedProject.desc}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-2">詳細</h3>
                <p className="text-sm text-gray-700">{selectedProject.details}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-2">使用技術</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-sky-100 text-sky-700 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>

      {/* Reports Section */}
      <section id="reports" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-sky-500 mb-8">レポート</h2>
          <div className="max-w-2xl mx-auto">
            <a
              href="https://store.supercell.com/ja/brawlstars"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600 underline py-2 hover:text-blue-800 transition-colors text-sm"
            >
              ・ブロスタのインストールはこちらから
            </a>
            {[...Array(7)].map((_, i) => (
              <a
                key={i}
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 underline py-2 hover:text-blue-800 transition-colors text-sm"
              >
                ・別のサイトはこちら
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-sky-500 mb-10">輝いていたあの頃</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 2025年 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-sky-500 text-white text-lg px-6 py-3 text-center font-medium">2025年</div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">インターンシップ</h3>
                <p className="text-sm mb-4">ATMとAndroidの接続関連の開発およびテストを行う</p>
                <div className="bg-purple-500 text-white text-sm rounded-md shadow-md p-3 text-center mb-3">
                  日立チャネルソリューションズ株式会社
                </div>
                <div className="text-xs">
                  <span className="text-lime-400">1月末</span>
                </div>
                <p className="mt-4 text-sm">僕のいた部署は環境が最高でした。やる気に満ち溢れていました。</p>
              </div>
            </div>

            {/* 思い出 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-sky-500 text-white text-lg px-6 py-3 text-center font-medium">思い出</div>
              <div className="p-6 space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-4 hover:bg-gray-50 transition">
                  <h3 className="font-bold text-lg">プロジェクトリーダー就任</h3>
                  <p className="text-sm mt-2">大学のRoboCup@Homeプロジェクト</p>
                  <div className="bg-purple-500 text-white text-sm rounded-md shadow-md p-3 text-center mt-4">
                    チームのやる気を向上させる目標を掲げる
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-4 hover:bg-gray-50 transition">
                  <h3 className="font-bold text-lg">RCJ2024</h3>
                  <p className="text-sm mt-2">
                    TidyUpという競技を担当。物体認識から物体把持を行う。挙手判定や手渡しを書く。MilkyPublisherの開発
                  </p>
                  <div className="bg-purple-500 text-white text-sm rounded-md shadow-md p-3 text-center mt-4">
                    死に物狂いでTidyUpを開発
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-sky-500 mb-8">Contact</h2>
          <p className="text-lg mb-6">お問い合わせはこちらから</p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:example@email.com"
              className="bg-sky-500 text-white px-6 py-3 rounded-full hover:bg-sky-600 transition shadow-md"
            >
              メールを送る
            </a>
            <a
              href="#"
              className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition shadow-md"
            >
              SNSで繋がる
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3498db] text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 高岡己太郎 All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  )
}

