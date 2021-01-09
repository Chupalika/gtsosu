export default {
    name: "Continental Global Taiko Showdown",
    description:
      "Continental Global Taiko Showdownはランク制限のないosu!taikoの大会です。まず、5つの地域で1対1の大会が同時に進行され、その後、各地域での上位8人がチームを組み、4対4のダブルイリミネーション形式のトーナメントで戦います。1対1での大会は、予選（qualifiers）を突破した32人がダブルイリミネーション形式のトーナメントで戦います。",
    discord: "https://discord.gg/3mGC3HB",
    divisions: ["4v4", "asia", "eu", "na", "osea", "sa"],
    homepage: [
      {
        title: "参加資格",
        body: `ppランクによる制限、および国籍による制限はありません。過去12か月以内にアカウントを制限モードにされていないプレイヤーは、誰でもこの大会に参加できます。なお、osu!公式スタッフは、スクリーニング期間後でも、何らかの問題が発覚したプレイヤーを大会から排除する権利があります。`,
      },
      {
        title: "日程",
        body: `
  ### 参加登録期間
  1月9日 ～ 1月24日
  ### スクリーニング期間
  1月24日 ～ 1月31日
  ### 予選（1対1）
  2月6日 ～ 2月7日
  ### Round of 32 + Loser's Bracket Round 1（1対1）
  2月13日 ～ 2月14日
  ### Round of 16 + Loser's Bracket Round 2 （1対1）
  2月20日 ～ 2月21日
  ### Quarterfinals + Loser's Bracket Round 3 and 4（1対1）
  2月27日 ～ 2月28日
  ### Semifinals + Loser's Bracket 5 and 6（1対1）
  3月6日 ～ 3月7日
  ### Winner's Bracket Finals + Loser's Bracket Finals and Grand Finals（1対1）
  3月13日 ～ 3月14日
  ### Grand Finals（1対1）
  3月20日 ～ 3月21日
  ### 予選（4対4）
  3月27日 ～ 3月28日
  ### Semifinals + Loser's Bracket Round 1（4対4）
  4月3日 ～ 4月4日
  ### Winner's Bracket Finals + Loser's Bracket Finals（4対4）
  4月10日 ～ 4月11日
  ### phase's Grand Finals（4対4）
  4月17日`,
      },
      {
        title: "参加方法",
        body:
          "あなたのosu!アカウントでログインした後、このページの上部にある「Register」ボタンを押してください。その後、「Discord」ボタンをクリックして大会のDiscordサーバーに入ってください。**大会に出場する場合、Discordサーバーへの参加は必須です。もし参加しなかった場合は大会への出場が取り消しとなります。**",
      },
      {
        title: "賞品",
        body: 
        "未定",
      },
    ],
    rules: `
  # General Rules
  - この大会には2つのフェーズがあります。まず1つ目のフェーズでは、1対1のトーナメント（以下、1対1フェーズ）を地域ごとに別々に行います。地域は5つあり、すべての地域で同じ日程で大会を進行します。2つ目のフェーズでは、各地域の上位8人でそれぞれチームを組み、4対4のトーナメント（以下、4対4フェーズ）を行います。
  - 各プレイヤー/チームはまず予選を行い、その結果に基づいてダブルイリミネーション形式のトーナメントへ進みます。
  - 本大会では**Score V2**を使用します。
  - **Host**、**Mappool Selector**、**Referee**以外のスタッフは大会へプレイヤーとして参加できます。
  - 参加者とスタッフは必ずこのルールすべてに目を通してください（全員がルールを把握している前提で大会を進行します）。
  - すべての参加者・スタッフは、他人に失礼のないように接しなければなりません。もし不適切な言動が確認された場合、大会からのbanやブラックリスト入りなどの対応を取ることがあります。
  - ルールの変更やハプニングが起った際には、Discordのサーバー内にて連絡します。
  
  # 必須事項
  - この大会にプレイヤーとして出場する場合は、大会のDiscordサーバーに必ず参加しなければなりません。参加しない場合は、大会への出場が認められません。
  
  # トーナメントへの参加・各地域について
  - 大会に参加するには**[必須事項](#restrictions)**に示す条件を満たす必要があります。
  - プレイヤーは個人で参加登録をします。参加が承認されたら、プレイヤーは国籍に応じた地域で戦います。
  - 地域ごとのチームを構成する際は、1対1フェーズでの優勝者が自動的にキャプテンとして選出されます。もしキャプテンが他の誰かにその役職を譲りたい場合は、新しくキャプテンとなる人の同意があれば役職を譲ることができます。また、チーム内でキャプテンを変更したいという意見が出た場合、チーム内全員の合意が取れればキャプテンを変更することができます。
  - キャプテンは、必要である場合にはリスケジュールを行い、チームメイトができるだけ確実に試合に参加できるようにする必要があります。
  - 1対1フェーズは、Asia、Europe、North America、Oceania / Southeast Asia、South Americaの5つの地域で行われます。各地域は以下の国籍を持つプレイヤーによって構成されます。
     
    - Asia：アフガニスタン、アルメニア、アゼルバイジャン、バーレーン、バングラデシュ、ブータン、中国、キプロス、グルジア、香港、インド、イラン、イラク、イスラエル、日本、ヨルダン、カザフスタン、クウェート、キルギス、レバノン、モルディブ、モンゴル、ネパール、オマーン、パキスタン、パレスチナ、カタール、サウジアラビア、韓国、スリランカ、シリア、台湾、タジキスタン、トルクメニスタン、アラブ首長国連邦（UAE）、ウズベキスタン、イエメン
    - Europe：アンドラ、オーストリア、ベルギー、チェコ共和国、デンマーク、エストニア、フィンランド、フランス、ドイツ、ギリシャ、アイスランド、イタリア、アイルランド、ラトビア、リヒテンシュタイン、リトアニア、ルクセンブルク、モルドバ、モナコ、ノルウェー、オランダ、ポーランド、ポルトガル、ルーマニア、ロシア連邦、スペイン、スウェーデン、スイス、トルコ、イギリス、ウクライナ
    - North America：バハマ、バルバドス、ベリーズ、カナダ、コスタリカ、キューバ、ドミニカ、ドミニカ共和国、エルサルバドル、グレナダ、グアテマラ、ハイチ、ホンジュラス、ジャマイカ、メキシコ、ニカラグア、パナマ、セントクリストファー・ネイビス、セントルシア、セントビンセント・グレナディーン、トリニダード・トバゴ、アメリカ合衆国
    - Oceania / South East Asia：オーストラリア、ブルネイ、カンボジア、フィジー、インドネシア、ラオス、マレーシア、マーシャル諸島、ミクロネシア、ミャンマー、ナウル、ニュージーランド、パラオ、パプアニューギニア、フィリピン、サモア、シンガポール、ソロモン諸島、タイ、トンガ、ツバル、バヌアツ、ベトナム
    - South America：アルゼンチン、ボリビア、ブラジル、チリ、コロンビア、エクアドル、ガイアナ、パラグアイ、ペルー、スリナム、ウルグアイ、ベネズエラ
  
  # 各ステージでのルール
  - 1対1フェーズでは、予選、RO32、RO16、Quarterfinals、Semifinals、Finals、Grand Finalsの7つのステージがあります。
  - 4対4フェーズでは、予選、Semifinals、Finals、Grand Finalsの4つのステージがあります。
  - 各プレイヤー/チームは、各譜面で記録したスコアの順位の平均に応じてシード分けされます。
  - 4対4フェーズの予選で1位になったチームは、SemifinalsはスキップしてFinalsからプレイします。
  - 1対1フェーズで、参加者が32人より多くかつ64人未満である場合、予選で32位以上になったプレイヤーのみがトーナメントへ進出できます。
  - 各ステージの勝利条件は以下の通りです:
      - Round Of 32, Round Of 16: BO9 (5点先取)
      - Quarterfinals: BO11 (6点先取)
      - Semifinals, Finals, and Grand Finals: BO13 (7点先取)
     
  # 予選（Qualifiers）について
  - 予選は、様々な時間帯に開かれるマルチ部屋内で行われます。
  - 当該する時間になったプレイヤーは、予め作成されているマルチの部屋に招待されます。その時にはosu!上でオンラインになっておいてください。
  - 予選ではウォームアップは行いません。
  - シードは、予選での各譜面で記録したスコアをもとにした順位の平均値で決定されます。
  - 予選では、各譜面を2回ずつプレイします。2回のうち高いほうのスコアで順位が算出されます。
  - 上位32人のみがトーナメントへ進出できます。
  
  # マッププールに関して
  - 1つのステージにつき1つのマッププールが用意されます。1対1フェーズでは、各地域で別々のマッププールが用意されます。
  - Winner's bracketとLoser's Bracketで違うマッププールが用意されることはありません。
  - 予選でのマッププールはそれ以外のマッププールとは異なり、2つのNoMod譜面、1つのHidden譜面、1つのHardRock譜面、1つのDoubleTime譜面で構成されます。
  - RO32以降でのそれぞれのマッププールは、**NoMod、Hidden、HardRock、DoubleTime、FreeMod、Tiebreaker**の6つのブラケットで構成されます。
  - RO32からRO16のマッププールには、14個の譜面が存在します。Quarterfinalsでは15譜面、SemifinalsからGrand Finalsでは19譜面です。
  - RO32からRO16まででのNoModの譜面数は4つです。これがQuarterfinalsでは5つ、SemifinalsからGrand Finalsまででは6つに増えます。
  - RO32からQuarterfinalsまででのHidden、HardRock、DoubleTimeの譜面数は2つです。これがSemifinalsからGrand Finalsまででは3つに増えます。
  - FreeModの譜面数は大会を通して3つです。
  - FreeModをプレイする際にはマルチ部屋の個別Modが有効にされます。プレイヤーはHidden、HardRock、もしくはその両方を使用することができます。1対1フェーズでは、FreeModの際にはプレイヤーは必ず何かModをつけなければなりません。4対4フェーズでは、チーム内で2人以上は必ず何かModをつけてプレイしなければなりません。
  - TiebreakerではFreeModと同じようにModをつけることができますが、必須ではありません。
  - それぞれのマッププールは試合の1週間前に公開されます。
  
  # スケジュールに関して
  - 各ステージは**毎週末**に行われます。（週末にプレイすることができない場合、審判の都合が合うならば平日にリスケジュールすることも可能です）
  - 各プレイヤーのタイムゾーンに合わせ、できるだけ試合が深夜や早朝にならないように心がけます。スケジュールは試合の約1週間前に公開されます。
  - リスケジュールは、該当する試合に出場するプレイヤー/チーム双方の合意がある場合に限り可能です。リスケジュールする場合は、お互いに合意を取った上で、試合日の直前の金曜日 **8:59 UTC+9** までにスタッフに連絡してください。
  - 4対4フェーズでは、リスケジュールは**キャプテン**によってのみ行うことが許可されます。
  
  # 試合進行に関して（RO32以降）
  - 試合時間の10分前に、審判がマルチ部屋を作成します。試合時間になると、各プレイヤーはそのマルチ部屋に招待されます。
  - もし試合時間になってもスタッフや審判が誰もいない場合、その試合は延期されます。
  - 試合時間になっても試合を行うのに必要な人数が揃っていない場合、10分まで試合開始を遅らせることができます。
  - 10分以内ならば、試合時間後マルチ部屋に即入室しなくてもペナルティが課されることはありません。
  - 1対1フェーズで、試合時間後10分経ってプレイヤーが2人ともマルチ部屋にいない場合、予選でのシードが高かったプレイヤーの勝利となります。
  - 4対4フェーズで、試合時間後10分経って両チームのプレイヤーが4人以上マルチ部屋にいない場合、予選でのシードが高かったチームの勝利となります。
  - 1対1フェーズでは、試合を行う際のマルチ部屋のチームモードはHead to Head、スコア方式はScoreV2に設定され、部屋の名前は"CGTS 2020: (Player Red) vs (Player Blue)"になっています。
  - 4対4フェーズでは、試合を行う際のマルチ部屋のチームモードはTeam VS、スコア方式はScoreV2に設定され、部屋の名前は"CGTS 2020: (Team Red) vs (Team Blue)"になっています。
  - 各プレイヤー/チームは3分以内の譜面であれば1回ずつウォームアップを行うことができます。ウォームアップに使用する譜面は、試合前に審判と配信者に渡さなければなりません（渡さなければウォームアップをプレイすることはできません）。
  - 各プレイヤー/チームのキャプテンはマッププールから**1つの譜面**をbanしなければなりません（Tiebreakerを除く）。banされた譜面はその試合終了までpickすることはできません。
  - 各プレイヤー/チームのキャプテンはチャットで"!roll"コマンドを打ちます。
  - !rollの結果が高かった方のプレイヤー/チームは、**banを後に行い、pickを先に行います**。!rollの結果が低かった方のチームは、**banを先に行い、pickを後に行います**。（!roll低い方ban → !roll高い方ban → !roll高い方pick → !roll低い方pick → !roll高い方pick → ……）
  - 各プレイヤー/チームのキャプテンは2分以内にどの譜面をbanするか発言してください。2分以内に発言しない場合、審判が!rollを用いてランダムにbanする譜面を決定します。
  - ban終了後は、各プレイヤー/チームのキャプテンが交互に譜面をpickしていきます。
  - 譜面をpickする際は、Tiebreaker以外ならどのブラケットからpickしても構いません。
  - プレイヤー/チームのキャプテンは2分以内にpickする譜面を発言し、pick後両プレイヤー/チームは2分以内に準備を完了させてください。2分以内にpickを完了させない場合、審判が!rollを用いてランダムにpickする譜面を決定します。また、2分以内に準備が完了できない場合、審判は強制的に試合を開始させます。
  - 4対4フェーズでは、試合中のプレイヤーの入れ替えは自由に行っていただいて構いません。
  - もしプレイヤーが譜面のプレイ中以外に回線落ち等のハプニングによってオフラインになった場合は、復帰するまで最大10分間待つことができます。この延長は一度しか適用できません。
  - もしプレイヤーが譜面のプレイ開始から30秒以上経ってオフラインとなってしまった場合、そのプレイヤー/プレイヤーの属するチームはその譜面では負けてしまったとして扱います。
  - もしプレイヤーが譜面のプレイ開始から30秒以内にオフラインとなってしまった場合、その譜面のプレイをもう一度やり直すことができます。これは1つのプレイヤー/チームにつき一度しか適用されません。
  - ノルマ落ちしたプレイヤーのスコアは0点にせず、そのまま扱います。
  - もし、ある譜面で両プレイヤー/チームのスコアが同点になった場合、その譜面での記録は無効になりもう一度同じ譜面をプレイします。両者のスコアが再度同点になった場合、そのプレイも無効になり、この際プレイされた譜面をpickしたプレイヤーは別の譜面をpickしなければなりません。
  - 両者がマッチポイントに達した場合（例：BO9で4-4になる）、強制的にTiebreakerがpickされます。
    `,
  };
  