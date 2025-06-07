import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans">
      {/* ヘッダー */}
      <header className="w-full py-8 bg-gradient-to-r from-yellow-200 to-yellow-400 shadow-md flex flex-col items-center">
        <h1 className="text-4xl font-bold tracking-wide mb-2">和食ダイニング せの</h1>
        <p className="text-lg text-gray-700">旬の食材と心温まるおもてなし</p>
      </header>

      {/* メイン */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 gap-12">
        {/* メニュー例 */}
        <section className="w-full max-w-2xl bg-white rounded-lg shadow p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">おすすめメニュー</h2>
          <ul className="grid gap-3 text-lg">
            <li>・季節の天ぷら盛り合わせ</li>
            <li>・本日のお造り三種盛り</li>
            <li>・だし巻き玉子</li>
            <li>・鶏の唐揚げ 柚子胡椒添え</li>
            <li>・自家製デザート</li>
          </ul>
        </section>

        {/* アクセス */}
        <section className="w-full max-w-2xl bg-white rounded-lg shadow p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">アクセス</h2>
          <p className="mb-2">東京都中央区銀座1-2-3 1F</p>
          <p className="mb-2">最寄駅：銀座駅 徒歩3分</p>
          <p>営業時間：11:30～14:30 / 17:00～22:00</p>
        </section>

        {/* 予約ボタン */}
        <a
          href="#"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow transition-colors duration-200"
        >
          ご予約はこちら
        </a>
      </main>

      {/* フッター */}
      <footer className="w-full py-4 bg-gray-100 text-center text-gray-500 text-sm border-t">
        &copy; {new Date().getFullYear()} 和食ダイニング せの
      </footer>
    </div>
  );
}
