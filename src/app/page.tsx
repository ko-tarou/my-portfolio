export default function Home() {
  return (
    <main>
      <header className="fixed top-0 w-full bg-[#3498db] text-white text-right py-4 text-1xl font-bold z-50 pr-45">
        About 　skills　Projects 　report　 Contact
      </header>

      <div className="pt-60 text-5xl flex flex-col items-center">
        <img
          src="/monaka.png"
          alt="プロフィール画像"
          className="w-50 h-50 rounded-full object-cover border-4 border-yellow-400 mb-25
          shadow-2xl transition transform hover:scale-105"
        />

        <div className="text-sky-500 text-6xl font-bold drop-shadow-lg font-roundedjp mb-10">
          高岡己太郎🀄
        </div>  
        <div className="text-black text-2xl mt-4 mb-5">
          僕は誰ですか？
        </div>                
            <div className="flex flex-row space-x-4 mt-6 mb-40">
              <button className="w-40 px-3 py-3 bg-yellow-400 text-black text-xl rounded-full hover:bg-yellow-500 transition">
                知らないです
              </button>
              <button className="w-40 px-3 py-3 bg-white text-black text-xl rounded-full border-2 border-black hover:bg-gray-100 transition">
                プロジェクト
              </button>
            </div>
          <div className="text-3xl font-semibold text-center text-sky-500">
            About me
            <div className="text-xl text-center mt-3 text-black font-normal">
              金沢工業大学で情報工学を学んでいます。僕はメンヘラです。猫が好きです。すぐブロスタに誘います。身長１８４です。
              <br />
              <span className="mb-10 block">あとはよくわかりません。</span>
              <div className="mt-8 text-sky-500 text-3xl mb-10">skils</div>
              <div className="mt-4 flex justify-center gap-4 flex-wrap">
                <button className="px-6 py-2 bg-emerald-500 text-white text-xl rounded-full hover:bg-emerald-600 transition">
                  Java
                </button>
                <button className="px-6 py-2 bg-emerald-500 text-white text-xl rounded-full hover:bg-emerald-600 transition">
                  Python
                </button>
                <button className="px-6 py-2 bg-emerald-500 text-white text-xl rounded-full hover:bg-emerald-600 transition">
                  JavaScript
                </button>
                <button className="px-6 py-2 bg-emerald-500 text-white text-xl rounded-full hover:bg-emerald-600 transition">
                  React
                </button>
                <button className="px-6 py-2 bg-emerald-500 text-white text-xl rounded-full hover:bg-emerald-600 transition">
                  Kotlin
                </button>
                <button className="px-6 py-2 bg-emerald-500 text-white text-xl rounded-full hover:bg-emerald-600 transition">
                  AviUtl
                </button>
                <button className="px-6 py-2 bg-emerald-500 text-white text-xl rounded-full hover:bg-emerald-600 transition">
                  PremierePro
                </button>
                <button className="px-6 py-2 bg-emerald-500 text-white text-xl rounded-full hover:bg-emerald-600 transition">
                  AfterEffects
                </button>
                <button className="px-6 py-2 bg-emerald-500 text-white text-xl rounded-full hover:bg-emerald-600 transition">
                  ROS2
                </button>
                <button className="px-6 py-2 bg-emerald-500 text-white text-xl rounded-full hover:bg-emerald-600 transition">
                  HTML
                </button>
              </div>
              <div className="mt-4 flex justify-center gap-4 flex-wrap">
                <button className="px-6 py-2 bg-emerald-500 text-white text-xl rounded-full hover:bg-emerald-600 transition">
                  GoogleCloud
                </button>
                <button className="px-6 py-2 bg-emerald-500 text-white text-xl rounded-full hover:bg-emerald-600 transition">
                  PJリーダー
                </button>
                <button className="px-6 py-2 bg-emerald-500 text-white text-xl rounded-full hover:bg-emerald-600 transition">
                  Unity
                </button>
                <button className="px-6 py-2 bg-emerald-500 text-white text-xl rounded-full hover:bg-emerald-600 transition">
                  💡
                </button>
              </div>
              <div className="mt-8 mb-4 text-2xl font-semibold text-sky-500 text-center mt-40">
                プロジェクト（押すと詳細が読めます）
              </div>
              <div className="mt-4 flex justify-center gap-6 flex-wrap">
                <button className="w-70 h-36 px-6 py-6 bg-white text-sky-500 text-2xl rounded-lg border-2 border-white shadow-xl hover:bg-gradient-to-r hover:from-orange-400 hover:via-pink-500 hover:to-purple-500 hover:text-white hover:shadow-lg hover:-translate-y-1 active:scale-95 transition transform flex flex-col items-start">
                  <span className="text-1xl font-bold mb-4">DidLife</span>
                  <span className="text-base mt-1 text-black hover:text-white text-center leading-tight">不登校自動を未然に防ぐアプリ</span>
                </button>

                <button className="w-70 h-36 px-6 py-6 bg-white text-sky-500 text-2xl rounded-lg border-2 border-white shadow-xlhover:bg-gradient-to-r hover:from-orange-400 hover:via-pink-500 hover:to-purple-500hover:text-white hover:shadow-lg hover:-translate-y-1 active:scale-95 transition transform flex flex-col items-start">
                  <span className="text-1xl font-bold mb-4">ShiftTape</span>
                  <span className="text-base mt-1 text-black">シフト管理アプリ</span>
                </button>
                <button className="w-70 h-36 px-7 py-7 bg-white text-sky-500 text-2xl rounded-lg border-2 border-white shadow-xlhover:bg-gradient-to-r hover:from-orange-400 hover:via-pink-500 hover:to-purple-500hover:text-white hover:shadow-lg hover:-translate-y-1 active:scale-95 transition transform flex flex-col items-start">
                  <span className="text-1xl font-bold mb-4">MilkyPublisher</span>
                  <span className="text-base mt-1 text-black">初心者向けロボットプログラミングアプリ</span>
                </button>
                <button className="w-70 h-36 px-6 py-6 bg-white text-sky-500 text-2xl rounded-lg border-2 border-white shadow-xlhover:bg-gradient-to-r hover:from-orange-400 hover:via-pink-500 hover:to-purple-500hover:text-white hover:shadow-lg hover:-translate-y-1 active:scale-95 transition transform flex flex-col items-start">
                  <span className="text-xl font-bold mb-2">プロジェクト詳細動画</span>
                  <span className="text-base mt-1 text-black">大学で活動しているPJの紹介動画</span>
                </button>
              </div>
              <div className="mt-4 flex justify-center gap-6 flex-wrap">
                <button className="w-70 h-36 px-6 py-6 bg-white text-sky-500 text-2xl rounded-lg border-2 border-white shadow-xlhover:bg-gradient-to-r hover:from-orange-400 hover:via-pink-500 hover:to-purple-500hover:text-white hover:shadow-lg hover:-translate-y-1 active:scale-95 transition transform flex flex-col items-start">
                  <span className="text-1xl font-bold mb-4">LENON</span>
                  <span className="text-base mt-1 text-black">技育CAMPハッカソンで受賞!</span>
                </button>
                <button className="w-70 h-36 px-6 py-6 bg-white text-sky-500 text-2xl rounded-lg border-2 border-white shadow-xlhover:bg-gradient-to-r hover:from-orange-400 hover:via-pink-500 hover:to-purple-500hover:text-white hover:shadow-lg hover:-translate-y-1 active:scale-95 transition transform flex flex-col items-start">
                  <span className="text-1xl font-rounded mb-4">おかんに怒られる</span>
                  <span className="text-base mt-1 text-black">全く新しいアラームアプリの開発</span>
                </button>
              </div>
              <div className="mt-8 text-sky-500 text-3xl mt-30">レポート</div>
              <a href="https://store.supercell.com/ja/brawlstars" target="_blank" rel="noopener noreferrer" className="w-full text-blue-600 underline mt-4 block text-left text-sm">
                ・ブロスタのインストールはこちらから
              </a>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="w-full text-blue-600 underline mt-4 block text-left text-sm">
                ・別のサイトはこちら
              </a>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="w-full text-blue-600 underline mt-4 block text-left text-sm">
                ・別のサイトはこちら
              </a>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="w-full text-blue-600 underline mt-4 block text-left text-sm">
                ・別のサイトはこちら
              </a>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="w-full text-blue-600 underline mt-4 block text-left text-sm">
                ・別のサイトはこちら
              </a>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="w-full text-blue-600 underline mt-4 block text-left text-sm">
                ・別のサイトはこちら
              </a>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="w-full text-blue-600 underline mt-4 block text-left text-sm">
                ・別のサイトはこちら
              </a>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="w-full text-blue-600 underline mt-4 block text-left text-sm">
                ・別のサイトはこちら
              </a>
            
              <div className="text-sky-500 text-3xl mt-30 ">輝いていたあの頃</div>
              <div className="flex flex-row gap-6 justify-center mt-4">
                <div className="bg-red-400 py-4">   
                  <div className="bg-sky-500 text-white text-sm px-10 py-5 rounded-md shadow-md w-[200px] text-center">
                    2025年
                  </div>
                  <div className="p-4 rounded-lg shadow-md bg-white hover:bg-gray-100 hover:shadow-lg transition cursor-pointer">
                  <div className="mt-2 text-black text-sm text-start font-bold">
                    インターンシップ
                  </div>
                  <div className="mt-2 text-black text-sm text-start">
                    ATMとAndroidの接続関連の開発お<br />よびテストを行う
                  </div>
                  <div className="bg-purple-500 text-white text-sm rounded-md shadow-md w-[250px] text-center mt-4 mb-1 mx-auto">
                    日立チャネルソリューションズ<br />株式会社
                  </div>
                  <div className="text-xs text-left pl-2">
                    <span className="text-lime-400">1月末</span>
                  </div>
                </div>
                <div className="text-base text-left pl-2 mt-2">
                  僕のいた部署は環境が最高で<br/>した。やる気に満ち溢れてい<br/>ました。
                </div>
              </div>
              <div className="bg-red-400 py-4"> 
                <div className="bg-sky-500 text-white text-sm rounded-md shadow-md w-[200px] px-10 py-5 text-center">
                  思い出
                </div>
                <div className="text-black text-base text-left pl-2 mt-2">
                  <div className="mt-10">
                    <div className="p-4 rounded-lg shadow-md bg-white hover:bg-gray-100 hover:shadow-lg transition cursor-pointer">
                      <div className="text-left font-bold text-base">
                        プロジェクトリーダー就任
                      </div>
                      <div className="mt-2 text-black text-sm text-start">
                        大学のRoboCup@Homeプロジェクト
                      </div>
                      <div className="bg-purple-500 text-white text-sm rounded-md shadow-md w-[250px] text-center mmb-1 mx-auto mt-10">
                        チームのやる気を向上させる目<br />標を掲げる
                      </div>
                    </div>
                    <div className="p-4 rounded-lg shadow-md bg-white hover:bg-gray-100 hover:shadow-lg transition cursor-pointer mb-6">
                      <div className="text-left font-bold text-base mt-2">
                        RCJ2024
                      </div>
                      <div className="mt-2 text-black text-sm text-start">
                        TidyUpという競技を担当。物体認<br />識から物体把持を行う。挙手判<br />定や手渡しを書く。MilkyPublisher<br />の開発
                      </div>
                      <div className="bg-purple-500 text-white text-sm rounded-md shadow-md w-[250px] text-center mt-4 mb-4 mx-auto">
                        死に物狂いでTidyUpを開発
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
