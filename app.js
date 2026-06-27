/* ==========================================
   JAVASCRIPT LOGIC: BẢN ĐỒ SỐ HỘI NHẬP VIỆT NAM
   ========================================== */

// 1. DATASETS DEFINITIONS
const yearlyData = {
    // Year-by-year economic data (in Billion USD)
    '2006': { exports: 39.8, imports: 44.8, fdi: 4.1, balance: -5.0 },
    '2007': { exports: 48.6, imports: 62.8, fdi: 8.0, balance: -14.2 },
    '2008': { exports: 62.7, imports: 80.7, fdi: 11.5, balance: -18.0 },
    '2009': { exports: 57.1, imports: 69.9, fdi: 10.0, balance: -12.8 },
    '2010': { exports: 72.2, imports: 84.8, fdi: 11.0, balance: -12.6 },
    '2011': { exports: 96.9, imports: 106.7, fdi: 11.0, balance: -9.8 },
    '2012': { exports: 114.6, imports: 113.8, fdi: 10.5, balance: 0.8 },
    '2013': { exports: 132.1, imports: 132.0, fdi: 11.5, balance: 0.1 },
    '2014': { exports: 150.2, imports: 147.8, fdi: 12.5, balance: 2.4 },
    '2015': { exports: 162.0, imports: 165.6, fdi: 14.5, balance: -3.6 },
    '2016': { exports: 176.6, imports: 174.1, fdi: 15.8, balance: 2.5 },
    '2017': { exports: 214.0, imports: 211.9, fdi: 17.5, balance: 2.1 },
    '2018': { exports: 243.5, imports: 236.7, fdi: 19.1, balance: 6.8 },
    '2019': { exports: 264.3, imports: 253.5, fdi: 20.4, balance: 10.8 },
    '2020': { exports: 282.7, imports: 262.7, fdi: 20.0, balance: 20.0 },
    '2021': { exports: 336.3, imports: 332.3, fdi: 19.7, balance: 4.0 },
    '2022': { exports: 371.3, imports: 358.9, fdi: 22.4, balance: 12.4 },
    '2023': { exports: 355.5, imports: 328.5, fdi: 23.2, balance: 27.0 },
    '2024': { exports: 390.9, imports: 341.6, fdi: 25.4, balance: 49.3 },
    '2025': { exports: 475.0, imports: 455.0, fdi: 27.6, balance: 20.0 }
};

const milestoneTexts = {
    'all': {
        title: "Toàn cảnh Hội nhập Kinh tế (2006 - 2025)",
        desc: "Hành trình 20 năm hội nhập kinh tế quốc tế sâu rộng của Việt Nam. Từ khi gia nhập WTO năm 2007, nước ta đã ký kết 16+ FTA, đưa kim ngạch thương mại đạt kỷ lục lịch sử hơn 930 tỷ USD năm 2025, liên tục xuất siêu 10 năm liền, khẳng định vị thế một trong những nền kinh tế mở năng động hàng đầu thế giới.",
        positive: [
            { icon: "fa-solid fa-chart-line", text: "<strong>Tăng trưởng vượt bậc:</strong> Kim ngạch xuất nhập khẩu tăng hơn 11 lần, đạt kỷ lục hơn 930 tỷ USD năm 2025, liên tục xuất siêu 10 năm liền." },
            { icon: "fa-solid fa-hand-holding-dollar", text: "<strong>Động lực FDI vững chắc:</strong> Dòng vốn đầu tư nước ngoài giải ngân thực tế tăng trưởng ổn định qua các năm, chiếm trên 70% tổng kim ngạch xuất khẩu." },
            { icon: "fa-solid fa-scale-balanced", text: "<strong>Cải cách thể chế:</strong> Quá trình đàm phán và thực thi 16+ FTA tạo động lực mạnh mẽ để hoàn thiện hệ thống luật pháp và môi trường đầu tư kinh doanh." },
            { icon: "fa-solid fa-users-gear", text: "<strong>Nguồn nhân lực & Công nghệ:</strong> Nâng cao khả năng hấp thu khoa học - công nghệ thông qua chuyển giao FDI và đẩy mạnh hợp tác giáo dục quốc tế." }
        ],
        negative: [
            { icon: "fa-solid fa-triangle-exclamation", text: "<strong>Sức ép cạnh tranh lớn:</strong> Nhiều ngành sản xuất và doanh nghiệp trong nước năng lực yếu đối mặt nguy cơ thu hẹp sản xuất hoặc giải thể." },
            { icon: "fa-solid fa-arrows-spin", text: "<strong>Mức độ phụ thuộc cao:</strong> Nền kinh tế hướng xuất khẩu nên cực kỳ nhạy cảm và dễ tổn thương trước biến động thị trường và địa chính trị thế giới." },
            { icon: "fa-solid fa-network-wired", text: "<strong>Bẫy gia công giá trị thấp:</strong> Nguy cơ mắc kẹt ở phân khúc gia công thô (dệt may, lắp ráp điện tử), tỉ lệ nội địa hóa và giá trị gia tăng nội địa thấp." },
            { icon: "fa-solid fa-dumpster-fire", text: "<strong>Rủi ro môi trường:</strong> Nguy cơ trở thành 'bãi thải công nghiệp' của các công nghệ lỗi thời và cạn kiệt tài nguyên thiên nhiên." }
        ]
    },
    '1995': {
        title: "Mốc ASEAN & AFTA (1995)",
        desc: "Dấu mốc lịch sử khi Việt Nam chính thức gia nhập Hiệp hội các quốc gia Đông Nam Á (ASEAN) và tham gia Khu vực Mậu dịch Tự do AFTA. Sự kiện này chính thức phá vỡ thế bị bao vây cấm vận, mở đầu cho tiến trình hội nhập đa phương và đa dạng hóa quan hệ kinh tế đối ngoại của đất nước.",
        positive: [
            { icon: "fa-solid fa-door-open", text: "<strong>Bắt đầu mở cửa:</strong> Đặt dấu mốc chính thức cho tiến trình mở cửa, phá vỡ thế bị bao vây cấm vận, hội nhập sâu rộng vào khu vực Đông Nam Á." },
            { icon: "fa-solid fa-users-viewfinder", text: "<strong>Làm quen luật chơi:</strong> Giúp các doanh nghiệp Việt Nam bước đầu cọ xát với môi trường cạnh tranh khu vực thông qua Khu vực Mậu dịch Tự do AFTA." },
            { icon: "fa-solid fa-handshake-angle", text: "<strong>Hòa bình & Hợp tác:</strong> Tạo điều kiện chính trị ổn định để củng cố an ninh quốc phòng và phát triển kinh tế vĩ mô." }
        ],
        negative: [
            { icon: "fa-solid fa-person-falling-burst", text: "<strong>Cạnh tranh trực diện:</strong> Sức ép cạnh tranh gay gắt từ hàng tiêu dùng Thái Lan, Indonesia khi thuế suất nội khối bị cắt giảm." },
            { icon: "fa-solid fa-puzzle-piece", text: "<strong>Thiếu hụt kinh nghiệm:</strong> Hệ thống pháp luật, cơ chế thị trường và năng lực hành chính của Nhà nước lúc này còn thô sơ, chưa tương thích hoàn toàn." }
        ]
    },
    '1998': {
        title: "Mốc Diễn đàn APEC (1998)",
        desc: "Việt Nam gia nhập Diễn đàn Hợp tác Kinh tế Châu Á - Thái Bình Dương (APEC). Dấu mốc này thiết lập cầu nối thương mại trực tiếp đầu tiên giữa nước ta với các siêu cường kinh tế hàng đầu (Mỹ, Trung Quốc, Nhật Bản, Nga), mở ra những cơ hội đột phá về thu hút đầu tư, chuyển giao công nghệ và hợp tác kỹ thuật.",
        positive: [
            { icon: "fa-solid fa-bridge", text: "<strong>Cầu nối với các siêu cường:</strong> Mở rộng quan hệ hợp tác trực tiếp với các nền kinh tế hàng đầu chiếm 60% GDP thế giới như Mỹ, Trung Quốc, Nhật Bản, Nga." },
            { icon: "fa-solid fa-passport", text: "<strong>Đơn giản hóa thương mại:</strong> Thúc đẩy tự do hóa và thuận lợi hóa thương mại, đơn giản hóa thủ tục xuất nhập khẩu và cấp visa doanh nhân." },
            { icon: "fa-solid fa-database", text: "<strong>Chia sẻ tri thức:</strong> Tiếp cận các chương trình đào tạo quản lý, phát triển công nghệ thông tin và chính sách hỗ trợ phát triển vùng sâu vùng xa từ APEC." }
        ],
        negative: [
            { icon: "fa-solid fa-hourglass-half", text: "<strong>Áp lực tự nguyện hóa:</strong> APEC hoạt động trên nguyên tắc tự nguyện, không ràng buộc pháp lý, đòi hỏi sự chủ động cực lớn của doanh nghiệp để nắm lấy cơ hội." },
            { icon: "fa-solid fa-gauge-simple-high", text: "<strong>Khoảng cách công nghệ lớn:</strong> Chênh lệch trình độ quá lớn với các nước phát triển trong khối tạo ra vị thế bất lợi trong việc tiếp cận các dự án lớn." }
        ]
    },
    '2007': {
        title: "Gia nhập Tổ chức Thương mại Thế giới WTO (2007)",
        desc: "Mốc son chói lọi khi Việt Nam chính thức trở thành thành viên thứ 150 của WTO. Sự kiện này đưa Việt Nam bước vào sân chơi toàn cầu bình đẳng với 149 quốc gia khác, mở ra làn sóng đầu tư FDI bùng nổ chưa từng có, buộc hệ thống luật pháp và thể chế kinh tế trong nước phải cải cách mạnh mẽ theo chuẩn mực quốc tế.",
        positive: [
            { icon: "fa-solid fa-globe", text: "<strong>Bình đẳng thương mại:</strong> Việt Nam được hưởng đối xử MFN (Tối huệ quốc) không điều kiện từ 150 thành viên, chấm dứt phân biệt đối xử về thuế quan." },
            { icon: "fa-solid fa-scroll", text: "<strong>Đột phá cải cách luật pháp:</strong> Thay đổi căn bản hệ thống pháp luật kinh tế theo chuẩn quốc tế, nâng cao độ minh bạch và an toàn đầu tư." },
            { icon: "fa-solid fa-money-bill-trend-up", text: "<strong>Bùng nổ dòng vốn ngoại:</strong> Vốn đầu tư FDI đổ vào kỷ lục (đạt 8 tỷ USD giải ngân năm 2007 và tăng mạnh sau đó), tạo hàng triệu việc làm mới." },
            { icon: "fa-solid fa-bag-shopping", text: "<strong>Lợi ích cho người dân:</strong> Người tiêu dùng được tiếp cận hàng ngoại nhập, dịch vụ tài chính, y tế, giáo dục chất lượng cao với giá cạnh tranh." }
        ],
        negative: [
            { icon: "fa-solid fa-burst", text: "<strong>Áp lực đào thải cực mạnh:</strong> Làn sóng hàng ngoại giá rẻ tràn vào khiến các doanh nghiệp nhà nước yếu kém và doanh nghiệp nhỏ trong nước lâm vào cảnh phá sản." },
            { icon: "fa-solid fa-arrow-right-arrow-left", text: "<strong>Khủng hoảng nhập siêu:</strong> Giai đoạn đầu nhập siêu lớn (năm 2007, 2008 thâm hụt tới 14-18 tỷ USD) gây áp lực lên tỷ giá và cán cân thanh toán." },
            { icon: "fa-solid fa-people-arrows", text: "<strong>Phân hóa giàu nghèo:</strong> Sự phát triển tập trung ở khu vực đô thị và FDI làm giãn cách thu nhập với khu vực nông thôn và nông nghiệp truyền thống." }
        ]
    },
    '2019': {
        title: "Hiệp định đối tác toàn diện CPTPP (2019)",
        desc: "Kỷ nguyên FTA thế hệ mới bắt đầu khi Việt Nam thực thi Hiệp định CPTPP. Đây là FTA chuẩn mực cao nhất châu Á - Thái Bình Dương, đòi hỏi cam kết thuế quan tiệm cận 0%, mở toang cánh cửa xuất khẩu sang châu Mỹ, đồng thời thúc đẩy cải cách các tiêu chuẩn cao về lao động, môi trường và bảo vệ quyền sở hữu trí tuệ.",
        positive: [
            { icon: "fa-solid fa-map-location-dot", text: "<strong>Chinh phục châu Mỹ:</strong> Mở rộng xuất khẩu sang các thị trường hoàn toàn mới có cam kết thuế quan bằng 0% như Canada, Mexico, Peru." },
            { icon: "fa-solid fa-shield-cat", text: "<strong>Đa dạng đối tác chống lệ thuộc:</strong> Giảm sự phụ thuộc quá mức vào các thị trường nhập khẩu nguyên liệu truyền thống, phân tán rủi ro chuỗi cung ứng." },
            { icon: "fa-solid fa-gavel", text: "<strong>Thúc đẩy cải cách thể chế thế hệ mới:</strong> Cam kết bảo vệ quyền sở hữu trí tuệ, môi trường sạch, minh bạch trong mua sắm công và tạo lập công đoàn độc lập." }
        ],
        negative: [
            { icon: "fa-solid fa-scissors", text: "<strong>Quy tắc xuất xứ ngặt nghèo:</strong> Yêu cầu 'quy tắc từ sợi trở đi' đối với dệt may làm khó các doanh nghiệp vốn quen nhập khẩu vải thô từ nước ngoài." },
            { icon: "fa-solid fa-scale-unbalanced-flip", text: "<strong>Cạnh tranh nông nghiệp gay gắt:</strong> Ngành chăn nuôi và chế biến thịt phải đối đầu với các nước thành viên có thế mạnh nông nghiệp quy mô lớn." },
            { icon: "fa-solid fa-file-contract", text: "<strong>Chi phí tuân thủ lớn:</strong> Sức ép chi phí pháp lý và tuân thủ các quy định môi trường, lao động chuẩn quốc tế." }
        ]
    },
    '2020': {
        title: "Hiệp định EVFTA (2020)",
        desc: "Thực thi Hiệp định EVFTA ký kết với Liên minh Châu Âu (EU). Được mệnh danh là 'tuyến đường cao tốc thương mại' kết nối Việt Nam với khối kinh tế phát triển hàng đầu thế giới, EVFTA mở ra cơ hội xuất khẩu bứt phá cho nông sản, giày dép, dệt may Việt Nam, đồng thời thu hút FDI công nghệ cao, công nghệ xanh từ EU.",
        positive: [
            { icon: "fa-solid fa-euro-sign", text: "<strong>Cửa ngõ sang thị trường EU:</strong> Lộ trình xóa bỏ gần 100% thuế quan giúp hàng thủy hải sản, da giày, nông sản Việt Nam bứt phá chiếm lĩnh thị trường châu Âu." },
            { icon: "fa-solid fa-microchip", text: "<strong>Hút FDI chất lượng cao từ EU:</strong> Thu hút các dự án FDI công nghệ sạch, thân thiện môi trường và có trình độ quản lý hiện đại từ các tập đoàn đa quốc gia châu Âu." },
            { icon: "fa-solid fa-certificate", text: "<strong>Chuẩn hóa chất lượng sản phẩm:</strong> Thúc đẩy doanh nghiệp Việt Nam tự cải tiến tiêu chuẩn kỹ thuật để vượt qua hàng rào xuất khẩu của EU." }
        ],
        negative: [
            { icon: "fa-solid fa-shield-virus", text: "<strong>Hàng rào phi thuế quan khắt khe:</strong> Tiêu chuẩn SPS (kiểm dịch động thực vật) và TBT (rào cản kỹ thuật) cực kỳ ngặt nghèo của châu Âu." },
            { icon: "fa-solid fa-triangle-exclamation", text: "<strong>Phòng vệ thương mại:</strong> Nguy cơ đối mặt với các vụ kiện chống bán phá giá, chống trợ cấp và rào cản 'Thẻ vàng IUU' về đánh bắt thủy sản." },
            { icon: "fa-solid fa-leaf", text: "<strong>Rào cản xanh mới:</strong> Áp lực từ các tiêu chuẩn mới của EU như cơ chế CBAM (đánh thuế carbon) và quy định truy xuất nguồn gốc chống phá rừng." }
        ]
    },
    '2025': {
        title: "Mốc kỷ lục mới & Tương lai hội nhập (2025)",
        desc: "Năm 2025 đánh dấu quy mô thương mại của Việt Nam tiệm cận cột mốc lịch sử 930 tỷ USD, đưa nước ta vững vàng trong nhóm 20 nền kinh tế hàng đầu về giao thương quốc tế. Cơ cấu dòng vốn FDI dịch chuyển mạnh mẽ sang các lĩnh vực công nghệ cao, chíp bán dẫn, AI, năng lượng xanh và phát triển bền vững.",
        positive: [
            { icon: "fa-solid fa-ranking-star", text: "<strong>Quy mô thương mại khổng lồ:</strong> Tổng kim ngạch tiệm cận 930 tỷ USD đưa Việt Nam vào nhóm 20 nền kinh tế hàng đầu về thương mại quốc tế." },
            { icon: "fa-solid fa-bolt", text: "<strong>Dịch chuyển sang công nghệ cao:</strong> Dòng vốn FDI tập trung mạnh vào các dự án bán dẫn, trí tuệ nhân tạo (AI), năng lượng tái tạo và kinh tế tuần hoàn." },
            { icon: "fa-solid fa-medal", text: "<strong>Thương hiệu Việt vươn tầm:</strong> Xuất khẩu chuyển dịch mạnh từ hàng thô sang các sản phẩm công nghệ cao tự chủ thiết kế và nông sản chế biến sâu." }
        ],
        negative: [
            { icon: "fa-solid fa-link-slash", text: "<strong>Thách thức bẫy lắp ráp:</strong> Vẫn đối mặt với áp lực gia tăng nhanh tỷ lệ giá trị nội địa, tránh nguy cơ trở thành nơi lắp ráp hộ cho nước khác để tránh thuế." },
            { icon: "fa-solid fa-wind", text: "<strong>Chậm chân trong chuyển đổi ESG:</strong> Các doanh nghiệp chậm xanh hóa quy trình sản xuất sẽ bị loại khỏi chuỗi cung ứng của các thương hiệu quốc tế lớn." },
            { icon: "fa-solid fa-earth-americas", text: "<strong>Địa chính trị bất ổn:</strong> Căng thẳng thương mại toàn cầu và xu hướng phi toàn cầu hóa gây gián đoạn chuỗi cung ứng logistics." }
        ]
    }
};

const solutionsData = {
    'state': {
        icon: "fa-solid fa-landmark",
        colorClass: "branch-blue",
        title: "Nhà nước - Vai trò Kiến tạo & Dẫn dắt",
        subtitle: "Đề ra đường lối, chính sách và đảm bảo độc lập, tự chủ kinh tế",
        theory: "Theo giáo trình Kinh tế Chính trị Mác - Lênin: <em>'Nhà nước cần đổi mới cơ chế quản lý trên cơ sở thực hiện đúng các chức năng của Nhà nước trong định hướng, tạo môi trường, hỗ trợ và giám sát hoạt động của các chủ thể kinh tế.'</em>",
        items: [
            {
                title: "Hoàn thiện thể chế kinh tế & luật pháp",
                content: "Nhà nước cần rà soát, hoàn thiện đồng bộ hệ thống pháp luật (đất đai, đầu tư, thương mại, doanh nghiệp, tài chính, tín dụng...). Bảo đảm tính tương thích giữa pháp luật Việt Nam với luật pháp quốc tế nhằm phòng ngừa, giảm thiểu các tranh chấp thương mại và bảo vệ tối đa lợi ích của người lao động và doanh nghiệp trong nước."
            },
            {
                title: "Xây dựng chiến lược & lộ trình hội nhập phù hợp",
                content: "Thiết lập một lộ trình hợp lý có phân kỳ thời gian, bước đi cụ thể nhằm tránh các cú sốc gây tổn hại cho nền kinh tế. Xác định rõ các ngành, lĩnh vực cần ưu tiên để tập trung nguồn lực đầu tư hình thành các nhân tố đột phá, đẩy mạnh công nghiệp hóa, hiện đại hóa."
            },
            {
                title: "Phát triển cơ sở hạ tầng & hỗ trợ logistics",
                content: "Nhà nước chủ động đầu tư, phát triển cơ sở hạ tầng sản xuất, mạng lưới giao thông, hạ tầng viễn thông số và dịch vụ logistics hiện đại. Điều này giúp cắt giảm chi phí giao dịch, tăng năng suất lao động xã hội và tạo môi trường hấp dẫn thu hút dòng vốn công nghệ tiên tiến."
            },
            {
                title: "Kết hợp kinh tế với quốc phòng, an ninh & đối ngoại",
                content: "Quán triệt nguyên tắc bình đẳng, cùng có lợi, tôn trọng độc lập chủ quyền trong hợp tác quốc tế. Chủ động giải quyết các tranh chấp bằng thương lượng hòa bình, kết hợp chặt chẽ việc phát triển kinh tế với củng cố thế trận quốc phòng, an ninh vững chắc."
            }
        ]
    },
    'enterprise': {
        icon: "fa-solid fa-briefcase",
        colorClass: "branch-yellow",
        title: "Doanh nghiệp - Lực lượng nòng cốt",
        subtitle: "Nâng cao năng lực cạnh tranh và tham gia vào chuỗi giá trị toàn cầu",
        theory: "Giáo trình khẳng định: <em>'Đối với doanh nghiệp, ngành hàng, lợi ích không tự đến. Để đứng vững trong cạnh tranh, các doanh nghiệp phải chủ trọng tới đầu tư, cải tiến công nghệ để nâng cao khả năng cạnh tranh của mình.'</em>",
        items: [
            {
                title: "Nâng cao năng lực cạnh tranh quốc tế",
                content: "Chủ động đổi mới máy móc, thiết bị, quy trình sản xuất theo hướng hiện đại hóa. Áp dụng hệ thống quản trị chất lượng toàn cầu (ISO, Lean) và tích cực đẩy mạnh chuyển đổi số trong quản lý, vận hành để tối ưu hóa năng suất."
            },
            {
                title: "Lĩnh hội sâu sắc 6 bài học hội nhập cốt lõi",
                content: "Doanh nghiệp cần học cách thích ứng thông qua 6 kỹ năng mới:<br>1. <strong>Học cách tìm kiếm cơ hội:</strong> Chủ động khai thác lợi thế từ các biểu thuế ưu đãi của các hiệp định FTA.<br>2. <strong>Học cách kết nối cùng chấp nhận cạnh tranh:</strong> Liên kết với các doanh nghiệp khác để tạo sức mạnh quy mô sòng phẳng.<br>3. <strong>Học cách huy động vốn:</strong> Tiếp cận các nguồn tài chính đa dạng từ các quỹ đầu tư quốc tế và thị trường chứng khoán.<br>4. <strong>Học cách quản trị sự bất định:</strong> Xây dựng các kịch bản dự báo, phòng ngừa rủi ro biến động tỷ giá, thị trường.<br>5. <strong>Học cách đồng hành cùng Chính phủ:</strong> Phối hợp với cơ quan quản lý để bảo vệ lợi ích nội địa trước hàng nhái, hàng lậu.<br>6. <strong>Học cách 'đối thoại pháp lý':</strong> Am hiểu luật kinh tế thương mại quốc tế để sẵn sàng đối mặt tranh chấp."
            },
            {
                title: "Xây dựng thương hiệu & Tự chủ chuỗi cung ứng",
                content: "Dịch chuyển mô hình kinh doanh từ gia công thô (OEM) sang sản xuất thành phẩm có thương hiệu riêng (ODM/OBM). Tích cực liên kết với chuỗi cung ứng nội địa để gia tăng tỷ lệ giá trị gia tăng nội địa, đáp ứng quy tắc xuất xứ chặt chẽ của các FTA thế hệ mới."
            },
            {
                title: "Chuyển đổi xanh & thực thi bộ tiêu chuẩn ESG",
                content: "Nhanh chóng tích hợp tiêu chuẩn ESG (Môi trường - Xã hội - Quản trị) vào hoạt động kinh doanh. Đây là tấm vé thông hành bắt buộc để vượt qua các hàng rào phi thuế quan thế hệ mới như cơ chế CBAM của châu Âu và thu hút đầu tư tài chính xanh toàn cầu."
            }
        ]
    },
    'youth': {
        icon: "fa-solid fa-graduation-cap",
        colorClass: "branch-green",
        title: "Nguồn nhân lực trẻ - Lực lượng đi đầu",
        subtitle: "Làm chủ tri thức mới, rèn luyện kỹ năng số và tư duy toàn cầu",
        theory: "Giáo trình nêu rõ phương hướng: <em>'Nhà nước cần chủ động triển khai xây dựng nguồn nhân lực chất lượng cao gắn với nhu cầu của các doanh nghiệp... đề cao năng lực sáng tạo trong hội nhập.'</em> Thế hệ trẻ chính là rường cột thực thi phương hướng này.",
        items: [
            {
                title: "Nâng cao trình độ chuyên môn & Kỹ năng số",
                content: "Không ngừng chủ động học tập chuyên môn sâu, tích cực làm chủ các công nghệ cốt lõi của Cách mạng công nghiệp lần thứ tư (Trí tuệ nhân tạo AI, Phân tích dữ liệu lớn, Điện toán đám mây...) để sẵn sàng đảm nhận các vị trí công việc yêu cầu chất lượng cao trong các tập đoàn đa quốc gia."
            },
            {
                title: "Trau dồi ngoại ngữ & Kỹ năng mềm toàn cầu",
                content: "Thành thạo tiếng Anh và bổ sung thêm các ngôn ngữ giao thương lớn khác. Phát triển toàn diện các kỹ năng mềm cốt lõi để làm việc trong môi trường đa văn hóa (kỹ năng thuyết trình, làm việc nhóm, tư duy phản biện và đàm phán quốc tế)."
            },
            {
                title: "Phát triển tư duy toàn cầu song hành giữ gìn bản sắc",
                content: "Xây dựng tư duy mở (Global Mindset), sẵn sàng tiếp thu văn minh và các chuẩn mực đạo đức nghề nghiệp quốc tế. Đồng thời, giữ vững lòng yêu nước, ý thức tự cường dân tộc, tích cực giữ gìn và quảng bá giá trị văn hóa, bản sắc truyền thống Việt Nam, tránh sự 'xâm lăng văn hóa' tiêu cực."
            },
            {
                title: "Khơi dậy tinh thần khởi nghiệp, sáng tạo xã hội",
                content: "Phát huy tính năng động sáng tạo của tuổi trẻ bằng cách tham gia nghiên cứu khoa học, phát triển các giải pháp khởi nghiệp công nghệ, khởi nghiệp xanh (xử lý rác thải, nông nghiệp sạch) giải quyết trực tiếp bài toán kinh tế - xã hội của đất nước."
            }
        ]
    }
};

// 2. ISO COUNTRY DATA MAPPINGS & REGIONS HELPERS
const euCodes = ['at', 'be', 'bg', 'hr', 'cy', 'cz', 'dk', 'ee', 'fi', 'fr', 'de', 'gr', 'hu', 'ie', 'it', 'lv', 'lt', 'lu', 'mt', 'nl', 'pl', 'pt', 'ro', 'sk', 'si', 'es', 'se'];
const cptppCodes = ['jp', 'ca', 'au', 'nz', 'mx', 'pe', 'cl', 'sg', 'my', 'bn'];
const aseanCodes = ['th', 'id', 'my', 'sg', 'ph', 'kh', 'la', 'mm', 'bn'];
const apecCodes = ['us', 'ca', 'mx', 'pe', 'cl', 'jp', 'cn', 'ru', 'kr', 'au', 'nz', 'sg', 'my', 'bn', 'th', 'id', 'ph', 'vn'];

// Capital coordinates for mapping trade flows from Hanoi, Vietnam
const countryCoords = {
    'vn': [21.0285, 105.8542], // Hanoi
    'us': [38.9072, -77.0369], // Washington DC
    'cn': [39.9042, 116.4074], // Beijing
    'ru': [55.7558, 37.6173], // Moscow
    'jp': [35.6762, 139.6503], // Tokyo
    'ca': [45.4215, -75.6972], // Ottawa
    'mx': [19.4326, -99.1332], // Mexico City
    'pe': [-12.0464, -77.0428], // Lima
    'cl': [-33.4489, -70.6693], // Santiago
    'au': [-35.2809, 149.1300], // Canberra
    'nz': [-41.2865, 174.7762], // Wellington
    'sg': [1.3521, 103.8198], // Singapore
    'my': [3.1390, 101.6869], // Kuala Lumpur
    'bn': [4.8903, 114.9404], // Bandar Seri Begawan
    'th': [13.7563, 100.5018], // Bangkok
    'id': [-6.2088, 106.8456], // Jakarta
    'ph': [14.5995, 120.9842], // Manila
    'kh': [11.5564, 104.9282], // Phnom Penh
    'la': [17.9757, 102.6331], // Vientiane
    'mm': [19.7633, 96.0785], // Naypyidaw
    'fr': [48.8566, 2.3522], // Paris
    'de': [52.5200, 13.4050], // Berlin
    'it': [41.9028, 12.4964], // Rome
    'es': [40.4168, -3.7038], // Madrid
    'nl': [52.3676, 4.9041], // Amsterdam
    'be': [50.8503, 4.3517], // Brussels
    'se': [59.3293, 18.0686], // Stockholm
    'pl': [52.2297, 21.0122], // Warsaw
    'fi': [60.1699, 24.9384], // Helsinki
    'dk': [55.6761, 12.5683], // Copenhagen
    'ie': [53.3498, -6.2603], // Dublin
    'pt': [38.7223, -9.1393], // Lisbon
    'gr': [37.9838, 23.7275], // Athens
    'za': [-33.9249, 18.4241], // Cape Town
    'br': [-15.7938, -47.8828], // Brasilia
    'in': [28.6139, 77.2090], // New Delhi
    'sa': [24.7136, 46.6753], // Riyadh
    'eg': [30.0444, 31.2357], // Cairo
    'kr': [37.5665, 126.9780], // Seoul
    'gb': [51.5074, -0.1278], // London
    'at': [48.2082, 16.3738], // Vienna
    'bg': [42.6977, 23.3219], // Sofia
    'hr': [45.8150, 15.9819], // Zagreb
    'cy': [35.1856, 33.3823], // Nicosia
    'cz': [50.0755, 14.4378], // Prague
    'ee': [59.4370, 24.7536], // Tallinn
    'hu': [47.4979, 19.0402], // Budapest
    'lv': [56.9496, 24.1052], // Riga
    'lt': [54.6872, 25.2797], // Vilnius
    'lu': [49.6116, 6.1319],  // Luxembourg
    'mt': [35.8989, 14.5146], // Valletta
    'ro': [44.4268, 26.1025], // Bucharest
    'sk': [48.1486, 17.1077], // Bratislava
    'si': [46.0569, 14.5058]  // Ljubljana
};


function getCountryName(id) {
    const code = id.toLowerCase();
    
    if (code === 'vn') return "Việt Nam (Nước chủ thể)";

    const nameMap = {
        'us': 'Hoa Kỳ (Mỹ)', 'cn': 'Trung Quốc', 'ru': 'Nga', 'in': 'Ấn Độ', 'jp': 'Nhật Bản',
        'ca': 'Canada', 'mx': 'Mexico', 'pe': 'Peru', 'cl': 'Chile', 'au': 'Australia (Úc)',
        'nz': 'New Zealand', 'sg': 'Singapore', 'my': 'Malaysia', 'bn': 'Brunei',
        'th': 'Thái Lan', 'id': 'Indonesia', 'ph': 'Philippines', 'kh': 'Campuchia',
        'la': 'Lào', 'mm': 'Myanmar', 'fr': 'Pháp', 'de': 'Đức', 'it': 'Ý (Italia)',
        'es': 'Tây Ban Nha', 'nl': 'Hà Lan', 'be': 'Bỉ', 'se': 'Thụy Điển',
        'pl': 'Ba Lan', 'at': 'Áo', 'fi': 'Phần Lan', 'dk': 'Đan Mạch',
        'ie': 'Ireland', 'pt': 'Bồ Đào Nha', 'gr': 'Hy Lạp', 'sa': 'Ả Rập Xê Út',
        'za': 'Nam Phi', 'br': 'Brazil', 'ar': 'Argentina', 'gb': 'Vương quốc Anh',
        'kr': 'Hàn Quốc', 'ua': 'Ukraine', 'tr': 'Thổ Nhĩ Kỳ', 'eg': 'Ai Cập',
        '_somaliland': 'Somaliland', 'ae': 'Các TVQ Ả Rập Thống Nhất', 'af': 'Afghanistan',
        'al': 'Albania', 'am': 'Armenia', 'ao': 'Angola', 'az': 'Azerbaijan',
        'ba': 'Bosnia và Herzegovina', 'bd': 'Bangladesh', 'bf': 'Burkina Faso',
        'bg': 'Bulgaria', 'bi': 'Burundi', 'bj': 'Benin', 'bo': 'Bolivia',
        'bs': 'Bahamas', 'by': 'Belarus', 'bz': 'Belize', 'cf': 'Cộng hòa Trung Phi',
        'cg': 'Cộng hòa Congo', 'ch': 'Thụy Sĩ', 'ci': 'Bờ Biển Ngà', 'cm': 'Cameroon',
        'co': 'Colombia', 'cr': 'Costa Rica', 'cu': 'Cuba', 'cv': 'Cape Verde',
        'cy': 'Síp', 'cz': 'Cộng hòa Séc', 'dj': 'Djibouti', 'dm': 'Dominica',
        'do': 'Cộng hòa Dominica', 'dz': 'Algeria', 'ec': 'Ecuador', 'ee': 'Estonia',
        'er': 'Eritrea', 'et': 'Ethiopia', 'fj': 'Fiji', 'fk': 'Quần đảo Falkland',
        'ga': 'Gabon', 'gh': 'Ghana', 'gl': 'Greenland', 'gm': 'Gambia',
        'gn': 'Guinea', 'gq': 'Equatorial Guinea', 'gr': 'Hy Lạp', 'gt': 'Guatemala',
        'gw': 'Guinea-Bissau', 'gy': 'Guyana', 'hn': 'Honduras', 'hr': 'Croatia',
        'ht': 'Haiti', 'hu': 'Hungary', 'id': 'Indonesia', 'ie': 'Ireland',
        'il': 'Israel', 'iq': 'Iraq', 'ir': 'Iran', 'is': 'Iceland',
        'jm': 'Jamaica', 'jo': 'Jordan', 'ke': 'Kenya', 'kg': 'Kyrgyzstan',
        'kh': 'Campuchia', 'kp': 'Triều Tiên', 'kw': 'Kuwait', 'kz': 'Kazakhstan',
        'la': 'Lào', 'lb': 'Lebanon', 'lk': 'Sri Lanka', 'lr': 'Liberia',
        'ls': 'Lesotho', 'lt': 'Lithuania', 'lu': 'Luxembourg', 'lv': 'Latvia',
        'ly': 'Libya', 'ma': 'Morocco', 'md': 'Moldova', 'me': 'Montenegro',
        'mg': 'Madagascar', 'mk': 'Bắc Macedonia', 'ml': 'Mali', 'mm': 'Myanmar',
        'mn': 'Mông Cổ', 'mr': 'Mauritania', 'mw': 'Malawi', 'mz': 'Mozambique',
        'na': 'Namibia', 'nc': 'New Caledonia', 'ne': 'Niger', 'ng': 'Nigeria',
        'ni': 'Nicaragua', 'no': 'Na Uy', 'np': 'Nepal', 'om': 'Oman',
        'pa': 'Panama', 'pg': 'Papua New Guinea', 'pk': 'Pakistan', 'pl': 'Ba Lan',
        'pr': 'Puerto Rico', 'pt': 'Bồ Đào Nha', 'py': 'Paraguay', 'qa': 'Qatar',
        'ro': 'Romania', 'rs': 'Serbia', 'rw': 'Rwanda', 'sb': 'Quần đảo Solomon',
        'sd': 'Sudan', 'se': 'Thụy Điển', 'si': 'Slovenia', 'sk': 'Slovakia',
        'sl': 'Sierra Leone', 'sn': 'Senegal', 'so': 'Somalia', 'sr': 'Suriname',
        'ss': 'Nam Sudan', 'sv': 'El Salvador', 'sy': 'Syria', 'sz': 'Eswatini',
        'td': 'Chad', 'tg': 'Togo', 'th': 'Thái Lan', 'tj': 'Tajikistan',
        'tl': 'Đông Timor', 'tm': 'Turkmenistan', 'tn': 'Tunisia', 'tz': 'Tanzania',
        'ug': 'Uganda', 'uy': 'Uruguay', 'uz': 'Uzbekistan', 've': 'Venezuela',
        'ye': 'Yemen', 'zm': 'Zambia', 'zw': 'Zimbabwe'
    };

    let suffix = "";
    if (euCodes.includes(code)) suffix = " (Thành viên EU - EVFTA)";
    else if (cptppCodes.includes(code)) suffix = " (Thành viên CPTPP)";
    else if (aseanCodes.includes(code)) suffix = " (Thành viên ASEAN)";

    const baseName = nameMap[code] || id.toUpperCase();
    return baseName + suffix;
}

// 3. CHART.JS INITIALIZATION & CONTROL
let integrationChart = null;

function initChart() {
    const canvas = document.getElementById('integrationChart');
    const ctx = canvas.getContext('2d');
    
    const years = Object.keys(yearlyData);
    const exportsData = years.map(y => yearlyData[y].exports);
    const importsData = years.map(y => yearlyData[y].imports);
    const fdiData = years.map(y => yearlyData[y].fdi);

    // Create glowing neon linear gradients
    const exportGrad = ctx.createLinearGradient(0, 0, 0, 400);
    exportGrad.addColorStop(0, 'rgba(59, 130, 246, 0.85)'); // Neon blue top
    exportGrad.addColorStop(1, 'rgba(59, 130, 246, 0.1)');  // Dark fade bottom

    const importGrad = ctx.createLinearGradient(0, 0, 0, 400);
    importGrad.addColorStop(0, 'rgba(245, 158, 11, 0.85)'); // Neon orange top
    importGrad.addColorStop(1, 'rgba(245, 158, 11, 0.1)');  // Dark fade bottom

    integrationChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: years,
            datasets: [
                {
                    label: 'Xuất khẩu',
                    data: exportsData,
                    backgroundColor: exportGrad,
                    borderColor: '#3B82F6',
                    borderWidth: 1.5,
                    borderRadius: 4,
                    yAxisID: 'yTrade',
                    order: 2
                },
                {
                    label: 'Nhập khẩu',
                    data: importsData,
                    backgroundColor: importGrad,
                    borderColor: '#F59E0B',
                    borderWidth: 1.5,
                    borderRadius: 4,
                    yAxisID: 'yTrade',
                    order: 3
                },
                {
                    label: 'FDI Thực hiện',
                    data: fdiData,
                    type: 'line',
                    borderColor: '#10B981',
                    borderWidth: 3,
                    backgroundColor: 'transparent',
                    fill: false,
                    pointBackgroundColor: '#10B981',
                    pointBorderColor: '#FFF',
                    pointBorderWidth: 1.5,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    yAxisID: 'yFdi',
                    order: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#E5E7EB',
                        font: { family: 'Inter', size: 10, weight: '600' },
                        boxWidth: 12,
                        padding: 12
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                    titleColor: '#FFF',
                    titleFont: { family: 'Montserrat', weight: '700', size: 12 },
                    bodyFont: { family: 'Inter', size: 11 },
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                    borderWidth: 1,
                    padding: 10,
                    cornerRadius: 6
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: {
                        color: '#9CA3AF',
                        font: { family: 'Inter', size: 9, weight: '500' }
                    }
                },
                yTrade: {
                    type: 'linear',
                    position: 'left',
                    grid: { color: 'rgba(255, 255, 255, 0.03)' },
                    ticks: {
                        color: '#60A5FA',
                        font: { family: 'Inter', size: 9, weight: '600' },
                        callback: function(value) { return value + ' Tỷ $'; }
                    },
                    title: {
                        display: true,
                        text: 'Thương mại (Billion USD)',
                        color: '#60A5FA',
                        font: { family: 'Inter', size: 9, weight: '700' }
                    }
                },
                yFdi: {
                    type: 'linear',
                    position: 'right',
                    grid: { display: false },
                    ticks: {
                        color: '#34D399',
                        font: { family: 'Inter', size: 9, weight: '600' },
                        callback: function(value) { return value + ' Tỷ $'; }
                    },
                    title: {
                        display: true,
                        text: 'Vốn FDI (Billion USD)',
                        color: '#34D399',
                        font: { family: 'Inter', size: 9, weight: '700' }
                    }
                }
            }
        }
    });
}

function updateChartHighlight(selectedYear) {
    if (!integrationChart) return;

    const canvas = document.getElementById('integrationChart');
    const ctx = canvas.getContext('2d');
    const years = Object.keys(yearlyData);

    const exportGrad = ctx.createLinearGradient(0, 0, 0, 400);
    exportGrad.addColorStop(0, 'rgba(59, 130, 246, 0.85)');
    exportGrad.addColorStop(1, 'rgba(59, 130, 246, 0.15)');

    const importGrad = ctx.createLinearGradient(0, 0, 0, 400);
    importGrad.addColorStop(0, 'rgba(245, 158, 11, 0.85)');
    importGrad.addColorStop(1, 'rgba(245, 158, 11, 0.15)');

    const exportColors = years.map(y => 
        (selectedYear === 'all' || y === selectedYear) ? exportGrad : 'rgba(59, 130, 246, 0.08)'
    );
    const importColors = years.map(y => 
        (selectedYear === 'all' || y === selectedYear) ? importGrad : 'rgba(245, 158, 11, 0.08)'
    );

    const pointRadii = years.map(y => 
        (selectedYear === 'all' || y === selectedYear) ? 5 : 2
    );
    const pointBg = years.map(y => 
        (selectedYear === 'all' || y === selectedYear) ? '#10B981' : 'rgba(16, 185, 129, 0.2)'
    );

    integrationChart.data.datasets[0].backgroundColor = exportColors;
    integrationChart.data.datasets[1].backgroundColor = importColors;
    integrationChart.data.datasets[2].pointRadius = pointRadii;
    integrationChart.data.datasets[2].pointBackgroundColor = pointBg;
    
    integrationChart.update('none');
}

// 4. MULTI-MODE GEOGRAPHICAL MAP ENGINE (3D GLOBE, 2D SATELLITE, 2D VECTOR FALLBACK)
let globeInstance = null;
let worldGeoJson = null;
let isGlobeRotating = true;
let isGlobeSatellite = false;

let leafletMapInstance = null;
let leafletGeoJsonLayer = null;
let leafletFlowLinesGroup = null;
let leafletActiveTile = 'dark'; // 'dark' or 'satellite'

let currentMapMode = '3d';

// Fetch GeoJSON borders from CDN with robust fallback
function fetchGeoJson() {
    if (worldGeoJson) return Promise.resolve(worldGeoJson);
    
    return fetch('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_0_countries.geojson')
        .then(res => {
            if (!res.ok) throw new Error("Primary GeoJSON fetch failed");
            return res.json();
        })
        .catch(err => {
            console.warn("Primary GeoJSON failed. Falling back to secondary CDN...", err);
            return fetch('https://raw.githubusercontent.com/datasets/geo-boundaries/master-with-valid-geometries/release/0.1.0/geo-boundaries.geojson')
                .then(res => {
                    if (!res.ok) throw new Error("Secondary GeoJSON fetch failed");
                    return res.json();
                });
        })
        .then(data => {
            worldGeoJson = data;
            return worldGeoJson;
        })
        .catch(err => {
            console.error("Critical: Failed to load country boundaries GeoJSON", err);
        });
}

// Get standard theme colors based on the active milestone
function getMilestoneColor(year, alpha = 1) {
    if (year === '1995') return `rgba(16, 185, 129, ${alpha})`; // ASEAN - Green
    if (year === '1998') return `rgba(59, 130, 246, ${alpha})`; // APEC - Blue
    if (year === '2007') return `rgba(139, 92, 246, ${alpha})`; // WTO - Purple
    if (year === '2019') return `rgba(6, 182, 212, ${alpha})`;  // CPTPP - Cyan
    if (year === '2020') return `rgba(245, 158, 11, ${alpha})`;  // EVFTA - Orange
    return `rgba(16, 185, 129, ${alpha})`; // 2025/All
}

// Check if a country is member of an agreement/active in a milestone year
function isCountryActiveInYear(code, year) {
    if (!code || code === 'vn') return false;
    
    if (year === 'all' || year === '2025') {
        return euCodes.includes(code) || cptppCodes.includes(code) || aseanCodes.includes(code) || apecCodes.includes(code);
    }
    if (year === '1995') return aseanCodes.includes(code);
    if (year === '1998') return apecCodes.includes(code);
    if (year === '2007') return true; // WTO covers all countries in our database
    if (year === '2019') return cptppCodes.includes(code);
    if (year === '2020') return euCodes.includes(code);
    return false;
}

// Get the currently active timeline milestone year
function getActiveYear() {
    const activeDot = document.querySelector('.milestone-dot.active');
    return activeDot ? activeDot.getAttribute('data-year') : '2007';
}

// ==========================================
// 4A. 3D GLOBE ENGINE (GLOBE.GL)
// ==========================================
function init3DGlobe() {
    const container = document.getElementById('globeMap');
    if (!container || globeInstance) return;

    // Initialize Globe.gl with exact container dimensions to keep it centered
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;
    
    globeInstance = Globe()(container)
        .width(width)
        .height(height)
        .globeImageUrl(isGlobeSatellite ? 'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg' : 'https://unpkg.com/three-globe/example/img/earth-dark.jpg')
        .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
        .backgroundColor('rgba(0,0,0,0)')
        .showAtmosphere(true)
        .atmosphereColor('rgba(59, 130, 246, 0.35)')
        .atmosphereAltitude(0.12)
        .onPolygonHover(hoverD => {
            const tooltip = document.getElementById('mapTooltip');
            if (hoverD) {
                const code = (hoverD.properties.iso_a2 || hoverD.properties.ISO_A2 || "").toLowerCase();
                tooltip.innerHTML = getCountryName(code);
                tooltip.style.opacity = 1;
            } else {
                tooltip.style.opacity = 0;
            }
        })
        .polygonLabel(() => "") // disable default tooltips
        .polygonCapColor(d => {
            const code = (d.properties.iso_a2 || d.properties.ISO_A2 || "").toLowerCase();
            const year = getActiveYear();
            if (code === 'vn') return 'rgba(16, 185, 129, 0.7)'; // VN Emerald glow
            if (isCountryActiveInYear(code, year)) {
                return getMilestoneColor(year, 0.45);
            }
            return 'rgba(30, 41, 59, 0.2)'; // inactive dark slate
        })
        .polygonSideColor(() => 'rgba(255, 255, 255, 0.02)')
        .polygonStrokeColor(d => {
            const code = (d.properties.iso_a2 || d.properties.ISO_A2 || "").toLowerCase();
            const year = getActiveYear();
            if (code === 'vn') return '#34D399';
            if (isCountryActiveInYear(code, year)) {
                return getMilestoneColor(year, 0.85);
            }
            return 'rgba(255, 255, 255, 0.05)';
        });

    // Camera settings
    globeInstance.controls().autoRotate = isGlobeRotating;
    globeInstance.controls().autoRotateSpeed = 0.6;
    globeInstance.controls().enableZoom = true;
    globeInstance.pointOfView({ lat: 16.0, lng: 108.0, altitude: 2.2 });

    // Track tooltip mouse movement
    container.addEventListener('mousemove', e => {
        const tooltip = document.getElementById('mapTooltip');
        if (tooltip.style.opacity === "1") {
            const rect = container.getBoundingClientRect();
            tooltip.style.left = `${e.clientX - rect.left}px`;
            tooltip.style.top = `${e.clientY - rect.top}px`;
        }
    });

    // Populate data
    if (worldGeoJson) {
        globeInstance.polygonsData(worldGeoJson.features);
        updateGlobeData();
    } else {
        fetchGeoJson().then(geojson => {
            if (geojson) {
                globeInstance.polygonsData(geojson.features);
                updateGlobeData();
            }
        });
    }
}

function updateGlobeData() {
    if (!globeInstance) return;
    const year = getActiveYear();

    // 1. Force polygon color refresh
    globeInstance.polygonsTransitionDuration(400);
    globeInstance.polygonCapColor(globeInstance.polygonCapColor());

    // 2. Generate arcs (trade flow streams) from Hanoi to active nodes
    const activeCountries = [];
    if (year === '1995') {
        aseanCodes.forEach(c => { if (c !== 'vn') activeCountries.push(c); });
    } else if (year === '1998') {
        ['us', 'ca', 'mx', 'pe', 'cl', 'jp', 'cn', 'ru', 'kr', 'au', 'nz', 'id'].forEach(c => activeCountries.push(c));
    } else if (year === '2007') {
        ['us', 'ca', 'br', 'za', 'de', 'fr', 'cn', 'ru', 'in', 'au', 'sa', 'eg'].forEach(c => activeCountries.push(c));
    } else if (year === '2019') {
        cptppCodes.forEach(c => { if (c !== 'vn') activeCountries.push(c); });
    } else if (year === '2020') {
        euCodes.forEach(c => activeCountries.push(c));
    } else {
        ['us', 'cn', 'kr', 'jp', 'de', 'nl', 'au', 'sg', 'in', 'br'].forEach(c => activeCountries.push(c));
    }

    const arcs = [];
    const color = getMilestoneColor(year);

    activeCountries.forEach(code => {
        const dest = countryCoords[code];
        if (dest) {
            arcs.push({
                startLat: countryCoords.vn[0],
                startLng: countryCoords.vn[1],
                endLat: dest[0],
                endLng: dest[1],
                color: color
            });
        }
    });

    globeInstance
        .arcsData(arcs)
        .arcColor('color')
        .arcDashLength(0.35)
        .arcDashGap(1.5)
        .arcDashAnimateTime(1600)
        .arcStroke(1.2)
        .arcAltitude(d => Math.min(0.5, Math.max(0.12, Math.abs(d.endLng - d.startLng) * 0.0035)));
}

// ==========================================
// 4B. 2D GEOGRAPHIC SATELLITE ENGINE (LEAFLET.JS)
// ==========================================
function init2DMap() {
    const container = document.getElementById('leafletMap');
    if (!container || leafletMapInstance) return;

    // Create Map
    leafletMapInstance = L.map('leafletMap', {
        center: [16.0, 108.0],
        zoom: 2,
        minZoom: 2,
        maxZoom: 9,
        zoomControl: true,
        attributionControl: false
    });

    // Add Tile layer
    setLeafletTileLayer(leafletActiveTile);

    // Overlay groups
    leafletFlowLinesGroup = L.layerGroup().addTo(leafletMapInstance);

    if (worldGeoJson) {
        renderLeafletGeoJson();
        updateLeafletData();
    } else {
        fetchGeoJson().then(geojson => {
            if (geojson) {
                renderLeafletGeoJson();
                updateLeafletData();
            }
        });
    }
}

function setLeafletTileLayer(tileType) {
    if (!leafletMapInstance) return;

    // Remove existing tile layers
    leafletMapInstance.eachLayer(layer => {
        if (layer instanceof L.TileLayer) {
            leafletMapInstance.removeLayer(layer);
        }
    });

    let tileUrl = '';
    const leafletMapContainer = document.getElementById('leafletMap');

    if (tileType === 'satellite') {
        tileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
        leafletMapContainer.classList.add('satellite-active');
    } else {
        tileUrl = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{y}/{x}{r}.png';
        leafletMapContainer.classList.remove('satellite-active');
    }

    L.tileLayer(tileUrl, {
        maxZoom: 18,
        crossOrigin: true
    }).addTo(leafletMapInstance);

    leafletActiveTile = tileType;
}

function renderLeafletGeoJson() {
    if (!leafletMapInstance || !worldGeoJson) return;

    if (leafletGeoJsonLayer) {
        leafletMapInstance.removeLayer(leafletGeoJsonLayer);
    }

    leafletGeoJsonLayer = L.geoJSON(worldGeoJson, {
        style: leafletStyleCountry,
        smoothFactor: 3.0,
        onEachFeature: (feature, layer) => {
            layer.on({
                mouseover: e => {
                    const code = (feature.properties.iso_a2 || feature.properties.ISO_A2 || "").toLowerCase();
                    const tooltip = document.getElementById('mapTooltip');
                    tooltip.innerHTML = getCountryName(code);
                    tooltip.style.opacity = 1;

                    const year = getActiveYear();
                    if (code === 'vn' || isCountryActiveInYear(code, year)) {
                        e.target.setStyle({
                            fillOpacity: 0.5,
                            weight: 1.5,
                            color: '#6366F1'
                        });
                    }
                },
                mouseout: e => {
                    document.getElementById('mapTooltip').style.opacity = 0;
                    const code = (feature.properties.iso_a2 || feature.properties.ISO_A2 || "").toLowerCase();
                    const year = getActiveYear();
                    if (code === 'vn' || isCountryActiveInYear(code, year)) {
                        leafletGeoJsonLayer.resetStyle(e.target);
                    }
                },
                mousemove: e => {
                    const tooltip = document.getElementById('mapTooltip');
                    const mapContainer = document.getElementById('leafletMap');
                    const rect = mapContainer.getBoundingClientRect();
                    tooltip.style.left = `${e.originalEvent.clientX - rect.left}px`;
                    tooltip.style.top = `${e.originalEvent.clientY - rect.top}px`;
                }
            });
        }
    }).addTo(leafletMapInstance);
}

function leafletStyleCountry(feature) {
    const code = (feature.properties.iso_a2 || feature.properties.ISO_A2 || "").toLowerCase();
    const year = getActiveYear();

    if (code === 'vn') {
        return {
            fillColor: '#10B981',
            fillOpacity: 0.7,
            weight: 1.5,
            color: '#34D399'
        };
    }

    if (isCountryActiveInYear(code, year)) {
        return {
            fillColor: getMilestoneColor(year, 1),
            fillOpacity: 0.35,
            weight: 0.8,
            color: getMilestoneColor(year, 0.7)
        };
    }

    return {
        fillColor: '#1E293B',
        fillOpacity: 0.15,
        weight: 0.5,
        color: 'rgba(255,255,255,0.05)'
    };
}

function updateLeafletData() {
    if (!leafletMapInstance) return;

    if (leafletGeoJsonLayer) {
        leafletGeoJsonLayer.eachLayer(layer => {
            leafletGeoJsonLayer.resetStyle(layer);
        });
    }

    if (leafletFlowLinesGroup) {
        leafletFlowLinesGroup.clearLayers();
    }

    const year = getActiveYear();
    const color = getMilestoneColor(year);

    const activeCountries = [];
    if (year === '1995') {
        aseanCodes.forEach(c => { if (c !== 'vn') activeCountries.push(c); });
    } else if (year === '1998') {
        ['us', 'ca', 'mx', 'pe', 'cl', 'jp', 'cn', 'ru', 'kr', 'au', 'nz', 'id'].forEach(c => activeCountries.push(c));
    } else if (year === '2007') {
        ['us', 'ca', 'br', 'za', 'de', 'fr', 'cn', 'ru', 'in', 'au', 'sa', 'eg'].forEach(c => activeCountries.push(c));
    } else if (year === '2019') {
        cptppCodes.forEach(c => { if (c !== 'vn') activeCountries.push(c); });
    } else if (year === '2020') {
        euCodes.forEach(c => activeCountries.push(c));
    } else {
        ['us', 'cn', 'kr', 'jp', 'de', 'nl', 'au', 'sg', 'in', 'br'].forEach(c => activeCountries.push(c));
    }

    const vnLatLng = countryCoords.vn;

    activeCountries.forEach(code => {
        const dest = countryCoords[code];
        if (dest) {
            // Draw a curved line representing the flow on the 2D map
            const points = getLeafletBezierPoints(vnLatLng[0], vnLatLng[1], dest[0], dest[1]);
            L.polyline(points, {
                color: color,
                weight: 1.6,
                opacity: 0.7,
                className: 'leaflet-flow-path'
            }).addTo(leafletFlowLinesGroup);
        }
    });
}

function getLeafletBezierPoints(lat1, lon1, lat2, lon2, numPoints = 30) {
    const points = [];
    for (let i = 0; i <= numPoints; i++) {
        const t = i / numPoints;
        let lat = lat1 + (lat2 - lat1) * t;
        let lon = lon1 + (lon2 - lon1) * t;

        // Calculate a perpendicular curve offset
        const dx = lat2 - lat1;
        const dy = lon2 - lon1;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const curveHeight = Math.sin(t * Math.PI) * distance * 0.15;

        // Offset lat/lon slightly to create arc curvature
        lat += curveHeight * 0.25;
        lon -= curveHeight * 0.15;

        points.push([lat, lon]);
    }
    return points;
}

// ==========================================
// 4C. MAP TAB CONTROLLER & OVERLAYS
// ==========================================
function switchMapMode(mode) {
    currentMapMode = mode;

    // Toggle active state on selector buttons
    document.querySelectorAll('.map-mode-btn').forEach(btn => {
        if (btn.getAttribute('data-mode') === mode) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Toggle layers visibility
    const layers = {
        '3d': document.getElementById('globeMap'),
        '2d': document.getElementById('leafletMap'),
        'svg': document.getElementById('worldMapContainer')
    };

    Object.keys(layers).forEach(key => {
        const el = layers[key];
        if (!el) return;
        if (key === mode) {
            el.classList.add('active-layer');
        } else {
            el.classList.remove('active-layer');
        }
    });

    // Switch HUD display overlays
    const rotateToggle = document.getElementById('globe-rotate-toggle');
    const layerToggle = document.getElementById('leaflet-layer-toggle');

    if (rotateToggle) {
        if (mode === '3d') rotateToggle.classList.remove('hidden');
        else rotateToggle.classList.add('hidden');
    }
    if (layerToggle) {
        if (mode === '3d' || mode === '2d') {
            layerToggle.classList.remove('hidden');
            const tileBtn = document.getElementById('btn-toggle-tiles');
            if (tileBtn) {
                if (mode === '3d') {
                    if (isGlobeSatellite) {
                        tileBtn.classList.add('active');
                        tileBtn.innerHTML = `<i class="fa-solid fa-earth-americas"></i> Vệ tinh`;
                    } else {
                        tileBtn.classList.remove('active');
                        tileBtn.innerHTML = `<i class="fa-solid fa-layer-group"></i> Nền`;
                    }
                } else if (mode === '2d') {
                    if (leafletActiveTile === 'satellite') {
                        tileBtn.classList.add('active');
                        tileBtn.innerHTML = `<i class="fa-solid fa-earth-americas"></i> Vệ tinh`;
                    } else {
                        tileBtn.classList.remove('active');
                        tileBtn.innerHTML = `<i class="fa-solid fa-layer-group"></i> Nền`;
                    }
                }
            }
        }
        else layerToggle.classList.add('hidden');
    }

    // Initialize and Sync current data
    const year = getActiveYear();
    if (mode === '3d') {
        if (!globeInstance) {
            init3DGlobe();
        } else {
            updateGlobeData();
        }
        // Force size refresh to ensure WebGL canvas matches container clientWidth/clientHeight
        if (globeInstance) {
            const mapEl = document.getElementById('globeMap');
            if (mapEl) {
                globeInstance.width(mapEl.clientWidth);
                globeInstance.height(mapEl.clientHeight);
            }
        }
    } else if (mode === '2d') {
        if (!leafletMapInstance) {
            init2DMap();
        } else {
            updateLeafletData();
            setTimeout(() => {
                leafletMapInstance.invalidateSize();
            }, 100);
        }
    } else if (mode === 'svg') {
        const svgEl = document.getElementById('worldMapSvg');
        if (!svgEl) {
            loadMap();
        } else {
            updateWorldMap(year);
        }
    }
}

function setupMapControls() {
    // Mode switcher clicks
    document.querySelectorAll('.map-mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const mode = btn.getAttribute('data-mode');
            switchMapMode(mode);
        });
    });

    // Toggle 3D Auto rotation
    const rotateBtn = document.getElementById('btn-toggle-rotate');
    if (rotateBtn) {
        rotateBtn.addEventListener('click', () => {
            isGlobeRotating = !isGlobeRotating;
            if (isGlobeRotating) {
                rotateBtn.classList.add('active');
                rotateBtn.innerHTML = `<i class="fa-solid fa-arrows-spin"></i> Xoay`;
            } else {
                rotateBtn.classList.remove('active');
                rotateBtn.innerHTML = `<i class="fa-solid fa-play"></i> Quay`;
            }
            if (globeInstance) {
                globeInstance.controls().autoRotate = isGlobeRotating;
            }
        });
    }

    // Toggle Leaflet Tile layers or 3D Globe textures
    const tileBtn = document.getElementById('btn-toggle-tiles');
    if (tileBtn) {
        tileBtn.addEventListener('click', () => {
            if (currentMapMode === '2d') {
                if (leafletActiveTile === 'dark') {
                    setLeafletTileLayer('satellite');
                    tileBtn.classList.add('active');
                    tileBtn.innerHTML = `<i class="fa-solid fa-earth-americas"></i> Vệ tinh`;
                } else {
                    setLeafletTileLayer('dark');
                    tileBtn.classList.remove('active');
                    tileBtn.innerHTML = `<i class="fa-solid fa-layer-group"></i> Nền`;
                }
            } else if (currentMapMode === '3d') {
                isGlobeSatellite = !isGlobeSatellite;
                if (globeInstance) {
                    if (isGlobeSatellite) {
                        globeInstance.globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg');
                        tileBtn.classList.add('active');
                        tileBtn.innerHTML = `<i class="fa-solid fa-earth-americas"></i> Vệ tinh`;
                    } else {
                        globeInstance.globeImageUrl('https://unpkg.com/three-globe/example/img/earth-dark.jpg');
                        tileBtn.classList.remove('active');
                        tileBtn.innerHTML = `<i class="fa-solid fa-layer-group"></i> Nền`;
                    }
                }
            }
        });
    }
}

// 4D. GEOGRAPHICAL SVG FALLBACK MAP UPDATING
function updateWorldMap(year) {
    const mapSvg = document.getElementById('worldMapSvg');
    if (!mapSvg) return;

    const vnEl = document.getElementById('vn');
    if (!vnEl) return;
    const vnBBox = vnEl.getBBox();
    const vnX = vnBBox.x + vnBBox.width / 2;
    const vnY = vnBBox.y + vnBBox.height / 2;

    document.querySelectorAll('#worldMapSvg path').forEach(path => {
        if (path.id !== 'vn') {
            path.setAttribute('class', '');
        }
    });

    const flowLinesGroup = document.getElementById('map-flow-lines');
    if (flowLinesGroup) {
        flowLinesGroup.innerHTML = '';
    }

    function drawFlowCurve(targetId, agreementClass) {
        const targetEl = document.getElementById(targetId);
        if (!targetEl) return;
        
        const targetBBox = targetEl.getBBox();
        const tX = targetBBox.x + targetBBox.width / 2;
        const tY = targetBBox.y + targetBBox.height / 2;

        const midX = (vnX + tX) / 2;
        const midY = (vnY + tY) / 2;
        const cpX = midX;
        const cpY = midY - Math.abs(tX - vnX) * 0.15;

        const pathD = `M ${vnX} ${vnY} Q ${cpX} ${cpY}, ${tX} ${tY}`;

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathD);
        path.setAttribute('class', `flow-line active-line-${agreementClass}`);
        if (flowLinesGroup) {
            flowLinesGroup.appendChild(path);
        }
    }

    if (year === '1995') {
        aseanCodes.forEach(code => {
            const el = document.getElementById(code);
            if (el) {
                el.setAttribute('class', 'active-asean');
                if (code !== 'vn') drawFlowCurve(code, 'asean');
            }
        });
    } 
    else if (year === '1998') {
        apecCodes.forEach(code => {
            const el = document.getElementById(code);
            if (el) {
                el.setAttribute('class', 'active-apec');
            }
        });
        const apecHubs = ['us', 'ca', 'mx', 'pe', 'cl', 'jp', 'cn', 'ru', 'kr', 'au', 'nz', 'id'];
        apecHubs.forEach(code => drawFlowCurve(code, 'apec'));
    }
    else if (year === '2007') {
        document.querySelectorAll('#worldMapSvg path').forEach(path => {
            if (path.id !== 'vn') {
                path.setAttribute('class', 'active-wto');
            }
        });
        const wtoHubs = ['us', 'ca', 'br', 'za', 'de', 'fr', 'cn', 'ru', 'in', 'au', 'sa', 'eg'];
        wtoHubs.forEach(code => drawFlowCurve(code, 'wto'));
    }
    else if (year === '2019') {
        cptppCodes.forEach(code => {
            const el = document.getElementById(code);
            if (el) {
                el.setAttribute('class', 'active-cptpp');
                if (code !== 'vn') drawFlowCurve(code, 'cptpp');
            }
        });
    }
    else if (year === '2020') {
        euCodes.forEach(code => {
            const el = document.getElementById(code);
            if (el) {
                el.setAttribute('class', 'active-evfta');
            }
        });
        const euHubs = ['fr', 'de', 'it', 'es', 'nl', 'pl', 'se', 'gr', 'fi'];
        euHubs.forEach(code => drawFlowCurve(code, 'evfta'));
    }
    else if (year === '2025' || year === 'all') {
        document.querySelectorAll('#worldMapSvg path').forEach(path => {
            if (path.id !== 'vn') {
                path.setAttribute('class', 'active-2025');
            }
        });
        const hubs2025 = ['us', 'cn', 'kr', 'jp', 'de', 'nl', 'au', 'sg', 'in', 'br'];
        hubs2025.forEach(code => drawFlowCurve(code, '2025'));
    }
}

function initMapTooltip() {
    const tooltip = document.getElementById('mapTooltip');
    const paths = document.querySelectorAll('#worldMapSvg path');
    const viewport = document.querySelector('.world-map-viewport');
    if (!viewport) return;

    paths.forEach(path => {
        path.addEventListener('mouseenter', () => {
            const countryId = path.id;
            if (!countryId || countryId === 'map-flow-lines') return;
            tooltip.innerHTML = getCountryName(countryId);
            tooltip.style.opacity = 1;
        });

        path.addEventListener('mousemove', (e) => {
            const viewportRect = viewport.getBoundingClientRect();
            const x = e.clientX - viewportRect.left;
            const y = e.clientY - viewportRect.top;
            
            tooltip.style.left = `${x}px`;
            tooltip.style.top = `${y}px`;
        });

        path.addEventListener('mouseleave', () => {
            tooltip.style.opacity = 0;
        });
    });
}

// 5. UI STATE CONTROLLERS
function animateNumber(elementId, targetValue, decimals = 1) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    let start = 0;
    const duration = 600;
    const startTime = performance.now();
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeProgress = progress * (2 - progress);
        const currentValue = start + easeProgress * (targetValue - start);
        
        element.textContent = currentValue.toFixed(decimals);
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        } else {
            element.textContent = targetValue.toFixed(decimals);
        }
    }
    
    const currentTextVal = parseFloat(element.textContent);
    start = isNaN(currentTextVal) ? 0 : currentTextVal;
    
    requestAnimationFrame(updateNumber);
}

function updateKPIs(year) {
    let exportsVal = 0;
    let importsVal = 0;
    let fdiVal = 0;
    let balanceVal = 0;

    if (year === 'all') {
        exportsVal = 475.0;
        importsVal = 455.0;
        fdiVal = 27.6;
        balanceVal = 20.0;
    } else if (yearlyData[year]) {
        exportsVal = yearlyData[year].exports;
        importsVal = yearlyData[year].imports;
        fdiVal = yearlyData[year].fdi;
        balanceVal = yearlyData[year].balance;
    }

    animateNumber('val-export', exportsVal, 1);
    animateNumber('val-import', importsVal, 1);
    animateNumber('val-fdi', fdiVal, 1);
    animateNumber('val-balance', balanceVal, 1);

    const balanceCard = document.getElementById('val-balance');
    if (balanceVal < 0) {
        balanceCard.style.color = 'var(--danger)';
    } else {
        balanceCard.style.color = '#C084FC';
    }
}

function populateImpactLists(year) {
    const data = milestoneTexts[year] || milestoneTexts['all'];
    
    const positiveList = document.getElementById('positive-list');
    const negativeList = document.getElementById('negative-list');
    
    positiveList.innerHTML = '';
    negativeList.innerHTML = '';

    data.positive.forEach((item, index) => {
        const li = document.createElement('li');
        li.style.animationDelay = `${index * 60}ms`;
        li.innerHTML = `<i class="${item.icon}"></i> <span>${item.text}</span>`;
        positiveList.appendChild(li);
    });

    data.negative.forEach((item, index) => {
        const li = document.createElement('li');
        li.style.animationDelay = `${index * 60}ms`;
        li.innerHTML = `<i class="${item.icon}"></i> <span>${item.text}</span>`;
        negativeList.appendChild(li);
    });
}

function handleMilestoneClick(element, isAutoTriggered = false) {
    // If user clicked a milestone manually, stop any active simulation play
    if (!isAutoTriggered && simulationInterval) {
        toggleSimulation();
    }

    document.querySelectorAll('.milestone-dot').forEach(dot => {
        dot.classList.remove('active');
    });

    element.classList.add('active');

    const year = element.getAttribute('data-year');
    
    // Update main chart title and year indicator
    const titleText = year === 'all' ? "Biểu đồ kinh tế tổng quan (2006 - 2025)" : `Số liệu kinh tế: Mốc năm ${year}`;
    document.getElementById('chart-title').textContent = titleText;
    document.getElementById('year-indicator').textContent = year === 'all' ? '2006-25' : year;

    // Update map displays titles
    const mapTitle = year === 'all' ? "Bản đồ liên kết địa lý: Toàn cảnh" : `Bản đồ liên kết địa lý: Mốc năm ${year}`;
    document.getElementById('map-display-title').textContent = mapTitle;

    // Update Milestone Sidebar (badge, title, desc)
    const mData = milestoneTexts[year] || milestoneTexts['all'];
    const sidebarBadge = document.getElementById('sidebar-year-badge');
    if (sidebarBadge) {
        sidebarBadge.textContent = year === 'all' ? 'Tổng quan' : `MỐC ${year}`;
        // Adjust badge color according to year
        sidebarBadge.style.color = getMilestoneColor(year);
        sidebarBadge.style.borderColor = getMilestoneColor(year, 0.4);
        sidebarBadge.style.background = getMilestoneColor(year, 0.08);
    }
    
    const sidebarTitle = document.getElementById('sidebar-milestone-title');
    if (sidebarTitle) sidebarTitle.textContent = mData.title;
    
    const sidebarDesc = document.getElementById('sidebar-milestone-desc');
    if (sidebarDesc) sidebarDesc.innerHTML = mData.desc || '';

    // Synchronize all map updates
    updateWorldMap(year);
    updateGlobeData();
    updateLeafletData();

    // Sync chart highlights, KPIs and lists
    updateChartHighlight(year);
    updateKPIs(year);
    populateImpactLists(year);
    updateTimelineProgressBar();
}

function updateTimelineProgressBar() {
    const dots = Array.from(document.querySelectorAll('.milestone-dot'));
    const activeIndex = dots.findIndex(dot => dot.classList.contains('active'));
    const progressBar = document.getElementById('timeline-progress-bar');
    
    if (activeIndex === -1 || dots.length <= 1) return;
    
    if (window.innerWidth > 768) {
        const percent = (activeIndex / (dots.length - 1)) * 100;
        progressBar.style.display = 'block';
        progressBar.style.width = `calc(${percent}% - 2rem)`;
        progressBar.style.left = `1.5rem`;
    } else {
        progressBar.style.display = 'none';
    }
}


// ==========================================
// 6. TAB 2: SOLUTIONS MINDMAP & ACCORDION CONTROL
// ==========================================

function drawMindmapLines() {
    const viewport = document.querySelector('.mindmap-viewport');
    if (!viewport || window.innerWidth <= 600) return;

    const viewportRect = viewport.getBoundingClientRect();
    const centerNode = document.getElementById('node-center');
    if (!centerNode) return;

    const centerRect = centerNode.getBoundingClientRect();
    const cx = centerRect.left - viewportRect.left + centerRect.width / 2;
    const cy = centerRect.top - viewportRect.top + centerRect.height / 2;

    const branches = ['state', 'enterprise', 'youth'];

    branches.forEach(branch => {
        const node = document.getElementById(`node-${branch}`);
        const line = document.getElementById(`line-${branch}`);
        if (!node || !line) return;

        const nodeRect = node.getBoundingClientRect();
        const bx = nodeRect.left - viewportRect.left + nodeRect.width / 2;
        const by = nodeRect.top - viewportRect.top + nodeRect.height / 2;

        const dx = bx - cx;
        const ctrlX1 = cx + dx * 0.5;
        const ctrlY1 = cy;
        const ctrlX2 = cx + dx * 0.5;
        const ctrlY2 = by;

        const pathD = `M ${cx} ${cy} C ${ctrlX1} ${ctrlY1}, ${ctrlX2} ${ctrlY2}, ${bx} ${by}`;
        line.setAttribute('d', pathD);
    });
}

function initAccordion(accordionData) {
    const accordionContainer = document.getElementById('solutions-accordion');
    accordionContainer.innerHTML = '';

    accordionData.items.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'accordion-item';

        const triggerBtn = document.createElement('button');
        triggerBtn.className = 'accordion-trigger';
        triggerBtn.innerHTML = `
            <span class="accordion-title">
                <span class="badge" style="margin:0; padding: 0.15rem 0.5rem; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:var(--text-secondary); font-size:0.7rem;">
                    0${index + 1}
                </span>
                ${item.title}
            </span>
            <i class="fa-solid fa-chevron-down chevron-icon"></i>
        `;

        const contentDiv = document.createElement('div');
        contentDiv.className = 'accordion-content';
        contentDiv.innerHTML = `<div class="accordion-inner-text">${item.content}</div>`;

        triggerBtn.addEventListener('click', () => {
            const isActive = itemDiv.classList.contains('active-item');
            
            document.querySelectorAll('.accordion-item').forEach(el => {
                el.classList.remove('active-item');
                el.querySelector('.accordion-content').style.maxHeight = '0';
            });

            if (!isActive) {
                itemDiv.classList.add('active-item');
                contentDiv.style.maxHeight = contentDiv.scrollHeight + 'px';
            }
        });

        itemDiv.appendChild(triggerBtn);
        itemDiv.appendChild(contentDiv);
        accordionContainer.appendChild(itemDiv);
    });
}

function handleBranchClick(branchName) {
    document.querySelectorAll('.node-branch').forEach(n => {
        n.classList.remove('active');
    });
    const clickedNode = document.getElementById(`node-${branchName}`);
    clickedNode.classList.add('active');

    document.querySelectorAll('.map-line').forEach(line => {
        line.classList.remove('active-line');
    });
    const clickedLine = document.getElementById(`line-${branchName}`);
    if (clickedLine) {
        clickedLine.classList.add('active-line');
    }

    const branchInfo = solutionsData[branchName];
    if (!branchInfo) return;

    document.getElementById('solution-title').textContent = branchInfo.title;
    document.getElementById('solution-subtitle').textContent = branchInfo.subtitle;
    
    const iconBox = document.getElementById('solution-header-icon-box');
    const iconEl = document.getElementById('solution-header-icon');
    
    iconBox.className = 'detail-header-icon';
    iconEl.className = branchInfo.icon;
    
    if (branchName === 'state') {
        iconBox.style.boxShadow = '0 0 12px rgba(59, 130, 246, 0.3)';
        iconBox.style.borderColor = 'rgba(59, 130, 246, 0.4)';
        iconBox.style.color = 'var(--secondary)';
    } else if (branchName === 'enterprise') {
        iconBox.style.boxShadow = '0 0 12px rgba(245, 158, 11, 0.3)';
        iconBox.style.borderColor = 'rgba(245, 158, 11, 0.4)';
        iconBox.style.color = 'var(--warning)';
    } else if (branchName === 'youth') {
        iconBox.style.boxShadow = '0 0 12px rgba(16, 185, 129, 0.3)';
        iconBox.style.borderColor = 'rgba(16, 185, 129, 0.4)';
        iconBox.style.color = 'var(--success)';
    }

    document.getElementById('solution-theory').innerHTML = `<i class="fa-solid fa-quote-left" style="opacity:0.25; margin-right:0.5rem;"></i>${branchInfo.theory}`;

    initAccordion(branchInfo);

    document.getElementById('solution-placeholder').classList.add('hidden');
    document.getElementById('solution-content-area').classList.remove('hidden');
}


// ==========================================
// 7. GLOBAL TAB NAVIGATION & STARTUP
// ==========================================

function initTabNavigation() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active-content');
            });
            document.getElementById(targetTab).classList.add('active-content');

            if (targetTab === 'tab-solutions') {
                setTimeout(() => {
                    drawMindmapLines();
                }, 100);
            } else if (targetTab === 'tab-quiz') {
                initQuiz();
            }
        });
    });
}

function setupDOMListeners() {
    // Milestone Clicks (Tab 1)
    document.querySelectorAll('.milestone-dot').forEach(dot => {
        dot.addEventListener('click', (e) => {
            handleMilestoneClick(dot, false);
        });
    });

    // Branch Clicks (Tab 2)
    document.querySelectorAll('.node-branch').forEach(branch => {
        branch.addEventListener('click', () => {
            const branchName = branch.getAttribute('data-branch');
            handleBranchClick(branchName);
        });
    });

    // Quiz restart button listener
    const restartBtn = document.getElementById('quiz-restart-btn');
    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            initQuiz();
        });
    }

    // Simulation button listener
    const simBtn = document.getElementById('simBtn');
    if (simBtn) {
        simBtn.addEventListener('click', () => {
            toggleSimulation();
        });
    }

    window.addEventListener('resize', () => {
        updateTimelineProgressBar();
        drawMindmapLines();
    });
}

// 6. DYNAMIC ROBINSON MAP LOADER (ROBUST OFFLINE/CDN FALLBACK)
function loadMap() {
    // Try local file world-map-robinson.svg first, fallback to CDN if CORS/local fetch fails
    fetch('world-map-robinson.svg')
        .then(response => {
            if (!response.ok) throw new Error("Local file fetch error");
            return response.text();
        })
        .catch(err => {
            console.log("Local fetch blocked or failed. Loading map via unpkg CDN...");
            return fetch('https://unpkg.com/@svg-maps/world@1.0.1/world.svg')
                .then(res => {
                    if (!res.ok) throw new Error("CDN map fetch error");
                    return res.text();
                });
        })
        .then(svgText => {
            const container = document.getElementById('worldMapContainer');
            if (!container) return;
            
            container.innerHTML = svgText;
            
            const svg = container.querySelector('svg');
            if (!svg) return;
            
            svg.setAttribute('id', 'worldMapSvg');
            
            // Inject drop-shadow filters
            const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            defs.innerHTML = `
                <filter id="glow-vn" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="glow-active" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            `;
            svg.insertBefore(defs, svg.firstChild);
            
            const gLines = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            gLines.setAttribute('id', 'map-flow-lines');
            svg.insertBefore(gLines, svg.childNodes[1]);
            
            // Setup interactive event listeners
            initMapTooltip();
            
            // Highlight current active milestone
            const currentYear = getActiveYear();
            updateWorldMap(currentYear);
            
            setTimeout(() => {
                drawMindmapLines();
            }, 300);
        })
        .catch(err => {
            console.error("Critical: Failed to render geographical world map: ", err);
        });
}

// App bootstrapping
document.addEventListener('DOMContentLoaded', () => {
    switchMapMode('3d');
    initTabNavigation();
    initChart();
    setupDOMListeners();
    setupMapControls();
    
    const defaultDot = document.querySelector('.milestone-dot[data-year="2007"]');
    if (defaultDot) {
        handleMilestoneClick(defaultDot, true);
    }
});

// ==========================================
// 8. INTERACTIVE QUIZ LOGIC (NEW PREMIUM FEATURE)
// ==========================================
const quizQuestions = [
    {
        question: "Việt Nam chính thức gia nhập Tổ chức Thương mại Thế giới (WTO) vào năm nào?",
        answers: ["1995", "1998", "2007", "2019"],
        correct: 2,
        explain: "Việt Nam chính thức trở thành thành viên thứ 150 của WTO vào ngày 11/01/2007, đánh dấu bước hội nhập sâu rộng nhất vào nền kinh tế toàn cầu thời kỳ đó."
    },
    {
        question: "Quy tắc xuất xứ thương mại 'từ sợi trở đi' (yarn forward) của Hiệp định đối tác toàn diện CPTPP gây thách thức lớn nhất cho ngành sản xuất nào của nước ta?",
        answers: ["Chế biến thủy hải sản xuất khẩu", "Lắp ráp linh kiện thiết bị điện tử", "Sản xuất phần mềm & dịch vụ công nghệ", "Ngành dệt may và da giày"],
        correct: 3,
        explain: "Quy tắc xuất xứ 'từ sợi trở đi' yêu cầu toàn bộ nguyên liệu dệt may từ sợi phải được sản xuất trong nội khối CPTPP, là thách thức lớn đối với dệt may Việt Nam do thói quen nhập khẩu nguyên liệu thô từ các nước ngoài khối."
    },
    {
        question: "Khối liên kết kinh tế quốc tế nào đóng vai trò là 'Cầu nối thương mại trực tiếp đầu tiên với các siêu cường kinh tế toàn cầu' của Việt Nam từ năm 1998?",
        answers: ["ASEAN & khu vực tự do thương mại AFTA", "Hiệp định EVFTA ký kết với châu Âu", "Diễn đàn hợp tác kinh tế châu Á - Thái Bình Dương (APEC)", "Tổ chức Thương mại Thế giới WTO"],
        correct: 2,
        explain: "Việt Nam gia nhập diễn đàn APEC năm 1998, mở ra cơ hội hợp tác kinh tế song phương trực tiếp với các nước lớn như Hoa Kỳ, Trung Quốc, Nga, Nhật Bản."
    },
    {
        question: "Theo giáo trình Kinh tế chính trị Mác - Lênin, nhóm chủ thể nào đóng vai trò là 'Lực lượng nòng cốt' nâng cao khả năng cạnh tranh trong hội nhập kinh tế quốc tế?",
        answers: ["Hệ thống cơ quan quản lý Nhà nước", "Cộng đồng Doanh nghiệp và Hiệp hội ngành hàng", "Nguồn nhân lực trẻ, thanh niên sinh viên", "Các tổ chức phi chính phủ quốc tế"],
        correct: 1,
        explain: "Doanh nghiệp là chủ thể trực tiếp sản xuất kinh doanh và cạnh tranh. Để đứng vững, doanh nghiệp bắt buộc cải tiến công nghệ, nâng cao chất lượng sản phẩm."
    },
    {
        question: "Mối quan hệ biện chứng giữa 'Độc lập, Tự chủ' và 'Hội nhập kinh tế quốc tế' được mô tả chính xác nhất qua luận điểm nào?",
        answers: ["Hội nhập quốc tế làm mất hoàn toàn tính độc lập tự chủ của nền kinh tế", "Độc lập tự chủ là cơ sở giữ vững chủ quyền; hội nhập là giải pháp tăng cường thực lực kinh tế", "Độc lập tự chủ đòi hỏi khép kín nền kinh tế, không giao lưu bên ngoài", "Hội nhập quốc tế chỉ mang lại thách thức chứ không giúp củng cố độc lập quốc gia"],
        correct: 1,
        explain: "Xây dựng nền kinh tế độc lập, tự chủ là cơ sở để hội nhập kinh tế quốc tế hiệu quả; ngược lại, hội nhập quốc tế giúp gia tăng tiềm lực kinh tế để củng cố nền độc lập vững vàng."
    },
    {
        question: "Thách thức mới về bảo vệ môi trường đối với Việt Nam khi xuất khẩu nông, lâm, thủy sản sang Liên minh Châu Âu (EU) theo thỏa thuận xanh EVFTA gần đây là gì?",
        answers: ["EU cấm toàn bộ nông sản có nguồn gốc từ châu Á", "Quy định CBAM đánh thuế carbon và đạo luật chống phá rừng (EUDR)", "EU không yêu cầu kiểm dịch chất lượng sản phẩm nhập khẩu", "Thuế suất đối với tất cả hàng nông sản tăng lên 100%"],
        correct: 1,
        explain: "Các quy định xanh mới của EU như cơ chế điều chỉnh biên giới carbon (CBAM) và luật chống phá rừng bắt buộc doanh nghiệp nông lâm thủy sản Việt Nam phải truy xuất nguồn gốc và xanh hóa chuỗi sản xuất."
    }
];

let currentQuestionIndex = 0;
let quizScore = 0;
let userHasAnswered = false;

function initQuiz() {
    currentQuestionIndex = 0;
    quizScore = 0;
    userHasAnswered = false;
    
    document.getElementById('quiz-result-box').classList.add('hidden');
    document.getElementById('quiz-question-box').classList.remove('hidden');
    
    showQuestion();
}

function showQuestion() {
    userHasAnswered = false;
    const currentQ = quizQuestions[currentQuestionIndex];
    
    // Update progress bar
    const progressPercent = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    document.getElementById('quiz-progress-bar').style.width = `${progressPercent}%`;
    
    // Update meta question number
    document.getElementById('quiz-question-number').textContent = `Câu hỏi ${currentQuestionIndex + 1}/${quizQuestions.length}`;
    
    // Update text
    document.getElementById('quiz-question-text').textContent = currentQ.question;
    
    // Render options
    const optionsContainer = document.getElementById('quiz-options-list');
    optionsContainer.innerHTML = '';
    
    currentQ.answers.forEach((ans, idx) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.innerHTML = `<i class="fa-regular fa-circle"></i> <span>${ans}</span>`;
        
        btn.addEventListener('click', () => {
            if (userHasAnswered) return;
            checkAnswer(idx, btn);
        });
        
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedIndex, clickedBtn) {
    userHasAnswered = true;
    const currentQ = quizQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.quiz-option-btn');
    
    if (selectedIndex === currentQ.correct) {
        // Correct answer
        clickedBtn.className = 'quiz-option-btn correct';
        clickedBtn.querySelector('i').className = 'fa-solid fa-circle-check';
        quizScore++;
    } else {
        // Wrong answer
        clickedBtn.className = 'quiz-option-btn wrong';
        clickedBtn.querySelector('i').className = 'fa-solid fa-circle-xmark';
        
        // Highlight correct one
        options[currentQ.correct].className = 'quiz-option-btn correct';
        options[currentQ.correct].querySelector('i').className = 'fa-solid fa-circle-check';
    }
    
    // Disable all options and show explanation
    options.forEach(btn => {
        btn.style.cursor = 'not-allowed';
    });
    
    // Add explanation paragraph
    const explainDiv = document.createElement('div');
    explainDiv.className = 'solution-theory-box';
    explainDiv.style.marginTop = '1rem';
    explainDiv.style.borderLeftColor = selectedIndex === currentQ.correct ? 'var(--success)' : 'var(--danger)';
    explainDiv.innerHTML = `<strong>Giải thích:</strong> ${currentQ.explain}`;
    document.getElementById('quiz-options-list').appendChild(explainDiv);
    
    // Add Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'quiz-restart-btn';
    nextBtn.style.marginTop = '1rem';
    nextBtn.style.alignSelf = 'flex-end';
    nextBtn.innerHTML = currentQuestionIndex === quizQuestions.length - 1 
        ? `Xem kết quả <i class="fa-solid fa-trophy"></i>` 
        : `Câu tiếp theo <i class="fa-solid fa-arrow-right"></i>`;
        
    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            showQuizResult();
        }
    });
    
    document.getElementById('quiz-options-list').appendChild(nextBtn);
}

function showQuizResult() {
    document.getElementById('quiz-question-box').classList.add('hidden');
    document.getElementById('quiz-result-box').classList.remove('hidden');
    
    document.getElementById('quiz-result-score').innerHTML = `Bạn đã trả lời đúng <strong>${quizScore}/${quizQuestions.length}</strong> câu hỏi.`;
    
    let feedback = "";
    if (quizScore === quizQuestions.length) {
        feedback = "Xuất sắc! Bạn đã nắm vững toàn bộ lý thuyết Công nghiệp hóa, hiện đại hóa và hội nhập kinh tế quốc tế Chương 6.";
    } else if (quizScore >= 4) {
        feedback = "Khá tốt! Bạn đã nắm được đa số kiến thức trọng tâm của chương. Đọc thêm tài liệu để củng cố điểm tuyệt đối nhé.";
    } else {
        feedback = "Hãy xem kỹ lại Bản đồ số hội nhập và Sơ đồ tư duy giải pháp để tích lũy thêm kiến thức bài học Chương 6 nhé!";
    }
    
    document.getElementById('quiz-result-feedback').textContent = feedback;
}

// ==========================================
// 9. AUTOMATIC PRESENTATION / SIMULATION PLAYBACK (UX ENHANCEMENT)
// ==========================================
let simulationInterval = null;
const milestoneYears = ['1995', '1998', '2007', '2019', '2020', '2025', 'all'];

function toggleSimulation() {
    const btn = document.getElementById('simBtn');
    if (!btn) return;
    
    if (simulationInterval) {
        // Stop current running simulation
        clearInterval(simulationInterval);
        simulationInterval = null;
        btn.innerHTML = `<i class="fa-solid fa-play"></i> Trình chiếu tự động`;
        btn.classList.remove('playing');
    } else {
        // Start simulation loop
        btn.innerHTML = `<i class="fa-solid fa-pause"></i> Tạm dừng trình chiếu`;
        btn.classList.add('playing');
        
        let activeDot = document.querySelector('.milestone-dot.active');
        let currentYear = activeDot ? activeDot.getAttribute('data-year') : '2007';
        let currentIndex = milestoneYears.indexOf(currentYear);
        if (currentIndex === -1) currentIndex = 0;
        
        simulationInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % milestoneYears.length;
            const nextYear = milestoneYears[currentIndex];
            const nextDot = document.querySelector(`.milestone-dot[data-year="${nextYear}"]`);
            if (nextDot) {
                handleMilestoneClick(nextDot, true);
            }
        }, 5000); // Transitions to next milestone every 5 seconds
    }
}
