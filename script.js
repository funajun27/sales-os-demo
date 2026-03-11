import React from "react";

const KNOWLEDGE_BASE = [
  {
    category: "集客",
    product: "統合型マーケティングフォーム「ADbounce」",
    url: "https://www.dnp.co.jp/biz/products/detail/20177352_4986.html",
    summary: "マルチチャネルで顧客接点を設計し、集客や応募獲得を強化する提案。",
    fit: ["集客", "顧客獲得", "応募", "販促", "認知"],
    strengths: ["複数接点で集客導線を設計できる", "応募・獲得施策と相性がよい"],
  },
  {
    category: "集客",
    product: "エレベーター内デジタルサイネージ ELE VISION®",
    url: "https://www.dnp.co.jp/biz/products/detail/20172513_4986.html",
    summary: "生活導線上のサイネージ接点を活用し、認知向上や来店促進を図る提案。",
    fit: ["集客", "来店", "認知", "OOH", "店舗集客"],
    strengths: ["生活動線上で接触機会を作れる", "来店促進・認知向上に使いやすい"],
  },
  {
    category: "集客",
    product: "運用型Web広告サービス",
    url: "https://www.dnp.co.jp/biz/products/detail/20172396_4986.html",
    summary: "広告運用を通じて見込み顧客獲得や販促効率を高める提案。",
    fit: ["集客", "広告", "デジタル広告", "見込み顧客", "販促最適化"],
    strengths: ["見込み顧客獲得の立ち上がりが早い", "配信改善により効率を高めやすい"],
  },
  {
    category: "営業効率",
    product: "商品情報管理（PIM）システム Centric PXM",
    url: "https://www.dnp.co.jp/biz/products/detail/20172400_4986.html",
    summary: "商品情報を一元管理し、営業・販促・ECの情報活用効率を高める提案。",
    fit: ["営業効率", "商品情報管理", "PIM", "情報整備", "生産性"],
    strengths: ["情報分散を抑えられる", "営業・EC・販促の情報整合性を高められる"],
  },
  {
    category: "営業効率",
    product: "MDM/PIMソリューション",
    url: "https://www.dnp.co.jp/biz/products/detail/20172505_4986.html",
    summary: "マスターデータと商品情報を整理し、提案や制作運用を効率化する提案。",
    fit: ["営業効率", "MDM", "PIM", "データ整備", "業務効率化"],
    strengths: ["データの再利用性を高めやすい", "提案・制作・更新運用を効率化しやすい"],
  },
  {
    category: "人手不足",
    product: "BPRコンサルティングサービス",
    url: "https://www.dnp-coarise.co.jp/service/bpr/",
    summary: "業務分析と再設計により、人手不足下でも回る業務体制を構築する提案。",
    fit: ["人手不足", "BPR", "業務改革", "省人化", "属人化解消"],
    strengths: ["属人業務の見直しに向く", "抜本的な業務再設計がしやすい"],
  },
  {
    category: "人手不足",
    product: "マーケティング運用型事務局",
    url: "https://www.dnp.co.jp/biz/products/detail/20173697_4986.html",
    summary: "運用業務を標準化・代行し、現場負荷を軽減する提案。",
    fit: ["人手不足", "事務局", "運用代行", "負荷削減", "BPO"],
    strengths: ["短期的に現場負荷を下げやすい", "運用代行で体制不足を補いやすい"],
  },
  {
    category: "DX",
    product: "DNPドキュメント構造化AIサービス（AI-Ready Data）",
    url: "https://www.dnp.co.jp/biz/products/detail/20176900_4986.html",
    summary: "文書をAI活用しやすい形に構造化し、業務データ活用を進める提案。",
    fit: ["DX", "AI", "文書構造化", "データ活用", "業務高度化"],
    strengths: ["散在文書の活用余地を高められる", "AI活用の前処理として説明しやすい"],
  },
  {
    category: "DX",
    product: "オンプレミス生成AI基盤×ドキュメント構造化AI",
    url: "https://www.dnp.co.jp/biz/products/detail/20177512_4986.html",
    summary: "生成AI基盤と文書活用を組み合わせ、セキュアに業務DXを進める提案。",
    fit: ["DX", "生成AI", "オンプレミス", "文書活用", "業務変革"],
    strengths: ["セキュアに生成AI活用を進めやすい", "文書活用とAI基盤を一体で語りやすい"],
  },
  {
    category: "セキュリティ",
    product: "TXOne",
    url: "https://www.dnp.co.jp/biz/products/detail/20175279_4986.html",
    summary: "工場・OT環境を含むサイバーセキュリティ対策を強化する提案。",
    fit: ["セキュリティ", "OT", "サイバー攻撃", "防御", "監視"],
    strengths: ["OT環境の対策テーマとして明確", "リスク低減の説明がしやすい"],
  },
  {
    category: "セキュリティ",
    product: "統合監視運用サービス",
    url: "https://www.dnp.co.jp/news/detail/20177273_1587.html",
    summary: "監視運用を高度化し、脅威検知から対応までを強化する提案。",
    fit: ["セキュリティ", "監視", "SOC", "運用", "脅威対応"],
    strengths: ["監視・運用強化のストーリーに使いやすい", "体制面の課題とも結びつけやすい"],
  },
];

const CATEGORY_HINTS = {
  集客: ["集客", "来店", "販促", "売上", "顧客獲得", "認知", "会員"],
  営業効率: ["営業効率", "販促最適化", "生産性", "投資対効果", "予測", "提案効率", "情報整備"],
  人手不足: ["人手不足", "省人化", "属人化", "外注", "BPO", "業務負荷", "要員不足"],
  DX: ["DX", "デジタル化", "オンライン", "データ連携", "可視化", "基盤", "刷新", "生成AI"],
  セキュリティ: ["セキュリティ", "認証", "個人情報", "漏えい", "ID", "保護", "ガバナンス", "監視"],
};

const PATTERN_NAMES = {
  集客: ["集客導線強化型", "データ活用集客型", "販促高度化型"],
  営業効率: ["販促最適化型", "営業生産性向上型", "営業×マーケ連携型"],
  人手不足: ["業務再設計型", "運用代行活用型", "省人化推進型"],
  DX: ["顧客接点デジタル化型", "データ連携基盤型", "業務DX推進型"],
  セキュリティ: ["認証強化型", "情報保護体制整備型", "リスク低減型"],
};

const INDUSTRIES = ["小売・流通", "製造", "金融", "自治体・公共", "教育"];
const DEPARTMENTS = ["営業", "マーケ", "情報システム", "管理"];

function scoreItem(item, text, department, industry) {
  const lower = (text || "").toLowerCase();
  let score = 0;

  const categoryHints = CATEGORY_HINTS[item.category] || [];
  categoryHints.forEach((hint) => {
    if (lower.includes(hint.toLowerCase())) score += 3;
  });

  item.fit.forEach((hint) => {
    if (lower.includes(hint.toLowerCase())) score += 2;
  });

  if (department === "マーケ" && item.category === "集客") score += 1;
  if (department === "営業" && item.category === "営業効率") score += 1;
  if (department === "情報システム" && ["DX", "セキュリティ"].includes(item.category)) score += 1;
  if (department === "管理" && item.category === "人手不足") score += 1;
  if (industry === "製造" && item.category === "セキュリティ") score += 1;
  if (industry === "小売・流通" && ["集客", "営業効率"].includes(item.category)) score += 1;

  return score;
}

function buildProposal(topItems, issueText, industry, department) {
  const primaryCategory = topItems[0]?.category || "営業効率";
  const names = PATTERN_NAMES[primaryCategory] || ["提案A", "提案B", "提案C"];

  return topItems.slice(0, 3).map((item, idx) => ({
    id: `${item.product}-${idx}`,
    title: names[idx] || `提案${idx + 1}`,
    category: item.category,
    product: item.product,
    url: item.url,
    why: `入力課題「${issueText || "未入力"}」に対して、${item.category}の観点から有効と考えられるため。`,
    summary: item.summary,
    strengths: item.strengths,
    hearing: [
      "現状の課題はどの業務・指標に最も表れているか",
      `対象部門（${department}）で特に改善したいKPIは何か`,
      `業界（${industry}）特有の制約や運用条件はあるか`,
    ],
    nextAction: `まずは ${item.product} を軸に、現状業務・体制・KPIを整理したうえで初回提案骨子を作成する。`,
  }));
}

function generateProposals(issue, industry, department) {
  const ranked = [...KNOWLEDGE_BASE]
    .map((item) => ({ ...item, score: scoreItem(item, issue, department, industry) }))
    .sort((a, b) => b.score - a.score || a.category.localeCompare(b.category));

  const nonZero = ranked.filter((r) => r.score > 0);
  const selected = (nonZero.length > 0 ? nonZero : ranked).slice(0, 3);
  return buildProposal(selected, issue, industry, department);
}

function buildSlidePrompt({ issue, industry, department, proposal }) {
  return `あなたは法人営業向け提案資料を作るプロのストラテジストです。\n\n以下の情報をもとに、日本語で6枚構成の提案資料を作成してください。\nPowerPoint化しやすいように、各スライドごとにタイトル、要点3〜5個、図解指示を出してください。\n\n# 顧客課題\n${issue || "未入力"}\n\n# 業界\n${industry}\n\n# 部門\n${department}\n\n# 提案パターン\n${proposal.title}\n\n# 参照ソリューション\n商材名: ${proposal.product}\nURL: ${proposal.url}\nカテゴリ: ${proposal.category}\n提案概要: ${proposal.summary}\n向いている理由: ${proposal.why}\n強み: ${proposal.strengths.join("、")}\nヒアリング観点: ${proposal.hearing.join(" / ")}\n次回提案の方向性: ${proposal.nextAction}\n\n# 作ってほしいスライド\n1. 表紙\n2. 顧客課題の整理\n3. 提案コンセプト\n4. ソリューション概要\n5. 導入ステップ\n6. 次回打合せ論点\n\n# 出力ルール\n- 日本語\n- BtoB提案資料らしい端的な表現\n- 誇張しすぎない\n- 各スライドに図解指示を含める\n- 必要に応じて前提条件を明示する`;}

function buildPPTPayload({ issue, industry, department, proposal }) {
  return {
    app: "営業OSデモ",
    createdAt: new Date().toISOString(),
    input: {
      issue,
      industry,
      department,
    },
    proposal: {
      title: proposal.title,
      category: proposal.category,
      product: proposal.product,
      url: proposal.url,
      summary: proposal.summary,
      why: proposal.why,
      strengths: proposal.strengths,
      hearing: proposal.hearing,
      nextAction: proposal.nextAction,
    },
    slidePrompt: buildSlidePrompt({ issue, industry, department, proposal }),
  };
}

function downloadTextFile(filename, content, mimeType = "text/plain;charset=utf-8") {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

function ExampleTests() {
  const cases = [
    {
      name: "集客ワードで集客系提案が先頭",
      result: generateProposals("来店促進と認知向上を図りたい", "小売・流通", "マーケ"),
      expected: "集客",
    },
    {
      name: "人手不足ワードで人手不足系提案が先頭",
      result: generateProposals("人手不足で業務負荷が高い", "製造", "管理"),
      expected: "人手不足",
    },
    {
      name: "未入力でも3件返す",
      result: generateProposals("", "金融", "営業"),
      expected: 3,
    },
    {
      name: "スライド用プロンプトを生成できる",
      result: buildSlidePrompt({
        issue: "販促費を抑えながら集客を維持したい",
        industry: "小売・流通",
        department: "マーケ",
        proposal: generateProposals("販促費を抑えながら集客を維持したい", "小売・流通", "マーケ")[0],
      }),
      expectedText: "6枚構成",
    },
  ];

  return (
    <div className="rounded-2xl bg-slate-100 p-4 text-xs text-slate-600 leading-6">
      <div className="font-semibold text-slate-800 mb-2">簡易テスト</div>
      <div className="space-y-2">
        {cases.map((test) => {
          const passed =
            typeof test.expected === "number"
              ? test.result.length === test.expected
              : test.expectedText
                ? test.result.includes(test.expectedText)
                : test.result[0]?.category === test.expected;

          return (
            <div key={test.name} className="flex items-center justify-between gap-3">
              <span>{test.name}</span>
              <span className={passed ? "text-emerald-700 font-semibold" : "text-rose-700 font-semibold"}>
                {passed ? "PASS" : "CHECK"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PPTModal({ open, onClose, payload }) {
  if (!open || !payload) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/40 flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <div>
            <div className="text-sm text-slate-500">AIスライド連携用</div>
            <div className="text-lg font-bold text-slate-900">PPT生成ペイロード</div>
          </div>
          <button onClick={onClose} className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-sm">
            閉じる
          </button>
        </div>
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="p-6 border-r border-slate-200">
            <div className="text-sm font-semibold text-slate-800 mb-2">AIスライド投入用プロンプト</div>
            <textarea
              readOnly
              value={payload.slidePrompt}
              rows={22}
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-xs leading-6 bg-slate-50"
            />
          </div>
          <div className="p-6">
            <div className="text-sm font-semibold text-slate-800 mb-2">API送信用JSON</div>
            <textarea
              readOnly
              value={JSON.stringify(payload, null, 2)}
              rows={22}
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-xs leading-6 bg-slate-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SalesOSDemo() {
  const [issue, setIssue] = React.useState("");
  const [industry, setIndustry] = React.useState("小売・流通");
  const [department, setDepartment] = React.useState("営業");
  const [results, setResults] = React.useState([]);
  const [pptPayload, setPptPayload] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const shareUrl = "https://your-sales-os-demo.vercel.app";

  function handleGenerate() {
    setResults(generateProposals(issue, industry, department));
  }

  function handleGeneratePPT(proposal) {
    const payload = buildPPTPayload({ issue, industry, department, proposal });
    setPptPayload(payload);
    setIsModalOpen(true);
  }

  function handleCopyPrompt() {
    if (!pptPayload) return;
    navigator.clipboard.writeText(pptPayload.slidePrompt);
    alert("AIスライド投入用プロンプトをコピーしました。");
  }

  function handleDownloadPrompt() {
    if (!pptPayload) return;
    downloadTextFile("sales_os_slide_prompt.txt", pptPayload.slidePrompt);
  }

  function handleDownloadPayload() {
    if (!pptPayload) return;
    downloadTextFile("sales_os_ppt_payload.json", JSON.stringify(pptPayload, null, 2), "application/json;charset=utf-8");
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <PPTModal open={isModalOpen} onClose={() => setIsModalOpen(false)} payload={pptPayload} />

      <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-[420px_1fr]">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
          <div className="mb-6">
            <div className="text-sm text-slate-500 mb-2">営業OS デモ</div>
            <h1 className="text-2xl font-bold text-slate-900">課題から提案パターンを生成</h1>
            <p className="text-sm text-slate-600 mt-2 leading-6">
              顧客課題を入力すると、課題カテゴリに紐づく候補商材をもとにプレセールスシート風の提案を3案表示します。
            </p>
          </div>

          <div className="rounded-2xl bg-slate-100 p-4 text-xs text-slate-600 leading-6 mb-4">
            <div className="font-semibold text-slate-800 mb-1">公開イメージ</div>
            <div>このUIはVercelやCodeSandboxで公開するとURL共有できます。</div>
            <div className="mt-2 text-slate-700 break-all">例: {shareUrl}</div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">顧客課題</label>
              <textarea
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                rows={7}
                placeholder="例：店頭販促費が削減される中で、売場維持と営業生産性を両立したい"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">業界</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm bg-white"
                >
                  {INDUSTRIES.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">部門</label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm bg-white"
                >
                  {DEPARTMENTS.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              className="w-full rounded-2xl bg-slate-900 text-white py-3 font-medium hover:opacity-90 transition"
            >
              提案を生成する
            </button>

            <div className="rounded-2xl bg-slate-100 p-4 text-xs text-slate-600 leading-6">
              <div className="font-semibold text-slate-800 mb-1">この完全版デモでやっていること</div>
              <div>・課題文のキーワードからカテゴリ候補を推定</div>
              <div>・該当カテゴリの商材を優先表示</div>
              <div>・プレセールスシート風に提案骨子を自動整形</div>
              <div>・提案ごとにAIスライド投入用プロンプトを生成</div>
              <div>・API送信用JSONをダウンロード可能</div>
            </div>

            <ExampleTests />
          </div>
        </div>

        <div className="space-y-4">
          {results.length === 0 ? (
            <div className="bg-white rounded-3xl shadow-sm border border-dashed border-slate-300 p-10 text-center text-slate-500">
              左側で課題を入力すると、ここに提案パターンが表示されます。
            </div>
          ) : (
            results.map((result, index) => (
              <div key={result.id} className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="text-xs text-slate-500 mb-2">提案 {index + 1}</div>
                    <h2 className="text-xl font-bold text-slate-900">{result.title}</h2>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs bg-slate-100 text-slate-700">{result.category}</span>
                </div>

                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-slate-500 mb-1">参照商材</div>
                    <div className="font-semibold text-slate-900">{result.product}</div>
                    <a href={result.url} target="_blank" rel="noreferrer" className="text-slate-700 underline break-all mt-2 inline-block">
                      {result.url}
                    </a>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-slate-500 mb-1">この案が向く理由</div>
                    <div className="text-slate-800 leading-6">{result.why}</div>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm">
                  <div className="text-slate-500 mb-1">提案概要</div>
                  <div className="text-slate-800 leading-6">{result.summary}</div>
                </div>

                <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm">
                  <div className="text-slate-500 mb-2">この提案の強み</div>
                  <ul className="space-y-2 list-disc pl-5 text-slate-800">
                    {result.strengths.map((item, idx) => (
                      <li key={`${result.product}-strength-${idx}`}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 grid md:grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-50 p-4 text-sm">
                    <div className="text-slate-500 mb-2">初回ヒアリング観点</div>
                    <ul className="space-y-2 list-disc pl-5 text-slate-800">
                      {result.hearing.map((item, idx) => (
                        <li key={`${result.product}-hearing-${idx}`}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4 text-sm">
                    <div className="text-slate-500 mb-2">次回提案の方向性</div>
                    <div className="text-slate-800 leading-6">{result.nextAction}</div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    onClick={() => handleGeneratePPT(result)}
                    className="rounded-xl bg-blue-600 text-white px-4 py-2 text-sm hover:opacity-90"
                  >
                    AIスライド用データを作る
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {pptPayload ? (
        <div className="mx-auto max-w-7xl mt-6 bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-sm text-slate-500">PPT生成アクション</div>
              <div className="text-lg font-bold text-slate-900">AIスライド・API連携用エクスポート</div>
            </div>
            <div className="flex flex-wrap gap-3">
              <button onClick={handleCopyPrompt} className="rounded-xl bg-slate-900 text-white px-4 py-2 text-sm hover:opacity-90">
                プロンプトをコピー
              </button>
              <button onClick={handleDownloadPrompt} className="rounded-xl bg-slate-100 text-slate-800 px-4 py-2 text-sm hover:bg-slate-200">
                プロンプトDL
              </button>
              <button onClick={handleDownloadPayload} className="rounded-xl bg-slate-100 text-slate-800 px-4 py-2 text-sm hover:bg-slate-200">
                JSON DL
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
