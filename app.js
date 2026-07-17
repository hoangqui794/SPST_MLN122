/* ==========================================
   JAVASCRIPT LOGIC: BẢN ĐỒ SỐ HỘI NHẬP VIỆT NAM
   ========================================== */

// 1. DATASETS DEFINITIONS
const yearlyData = {
    // Year-by-year economic data (in Billion USD)
    '1986': { exports: 0.8, imports: 2.2, fdi: 0.0, balance: -1.4 },
    '1995': { exports: 5.4, imports: 8.2, fdi: 2.6, balance: -2.8 },
    '1998': { exports: 9.4, imports: 11.5, fdi: 2.4, balance: -2.1 },
    '2001': { exports: 15.0, imports: 16.2, fdi: 2.5, balance: -1.2 },
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
        title: "Toàn cảnh Hội nhập Kinh tế (1986 - 2025)",
        desc: "Hành trình hội nhập kinh tế của Việt Nam đi từ Đổi mới năm 1986, kết nối khu vực qua ASEAN - AFTA, mở rộng ra APEC, BTA Việt - Mỹ và WTO, rồi tiến tới các FTA thế hệ mới như CPTPP, EVFTA, RCEP. Tiến trình này thể hiện tác động hai mặt của hội nhập: mở rộng thị trường, thu hút vốn, tiếp thu công nghệ, nhưng cũng làm tăng sức ép cạnh tranh và độ nhạy cảm trước biến động bên ngoài.",
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
        ],
        conclusion: "Hành trình gần 4 thập kỷ hội nhập kinh tế quốc tế của Việt Nam từ Đổi mới 1986 đến nay chứng minh tính đúng đắn và hiệu quả trong đường lối mở cửa, khẳng định Việt Nam là mắt xích quan trọng trong kinh tế toàn cầu, đồng thời đòi hỏi nâng cao tự chủ để củng cố nền độc lập vững chắc."
    },
    '1986': {
        title: "Đại hội Đảng lần thứ VI đề ra đường lối Đổi mới",
        desc: "<strong>Tổng quan:</strong> Tháng 12/1986, Đại hội VI của Đảng Cộng sản Việt Nam chính thức khởi xướng đường lối Đổi mới toàn diện. Đây là bước ngoặt lịch sử chuyển đổi nền kinh tế từ cơ chế kế hoạch hóa tập trung, bao cấp sang nền kinh tế thị trường định hướng xã hội chủ nghĩa. Trước đó, Việt Nam rơi vào khủng hoảng kinh tế nghiêm trọng, lạm phát phi mã và khan hiếm hàng hóa.<br><br><strong>Sức ảnh hưởng đến kinh tế:</strong> Đổi mới giúp khơi thông các nguồn lực xã hội, thừa nhận sự tồn tại của kinh tế tư nhân và xóa bỏ ngăn sông cấm chợ. Sự kiện này đặt nền móng pháp lý và tư duy đầu tiên để Việt Nam từ bỏ chính sách tự cung tự cấp, bắt đầu mở cửa thu hút dòng vốn nước ngoài.",
        positive: [
            { icon: "fa-solid fa-door-open", text: "<strong>Giải phóng sản xuất:</strong> Đưa Việt Nam thoát khỏi khủng hoảng, kiềm chế lạm phát phi mã và giải quyết nạn đói." },
            { icon: "fa-solid fa-chart-line", text: "<strong>Động lực tăng trưởng:</strong> Khơi thông các nguồn lực xã hội và tạo đà cho tăng trưởng GDP bền vững." }
        ],
        negative: [
            { icon: "fa-solid fa-scale-unbalanced", text: "<strong>Phân hóa xã hội:</strong> Giai đoạn đầu đối mặt với sự phân hóa giàu nghèo manh nha xuất hiện." },
            { icon: "fa-solid fa-triangle-exclamation", text: "<strong>Lúng túng quản lý & hạ tầng:</strong> Quản lý nhà nước đối với các thành phần kinh tế mới còn lúng túng; hạ tầng chưa đáp ứng kịp." }
        ],
        conclusion: "Đổi mới 1986 là \"vạch xuất phát\" định hình diện mạo kinh tế Việt Nam hiện đại, mở đường cho mọi quyết định hội nhập quốc tế sau này."
    },
    '1995': {
        title: "Việt Nam gia nhập ASEAN và tham gia AFTA",
        desc: "<strong>Tổng quan:</strong> Ngày 28/7/1995, Việt Nam trở thành thành viên thứ 7 của Hiệp hội các quốc gia Đông Nam Á (ASEAN). Ngay sau đó, Việt Nam cam kết thực hiện lộ trình giảm thuế trong khuôn khổ AFTA, đánh dấu bước đi hội nhập đa phương đầu tiên.<br><br><strong>Sức ảnh hưởng đến kinh tế:</strong> Giúp Việt Nam phá vỡ thế bị bao vây, cô lập về kinh tế và ngoại giao. Sự kiện này đưa dòng hàng hóa Việt Nam kết nối trực tiếp với thị trường tiêu dùng năng động hơn 500 triệu dân lúc bấy giờ tại Đông Nam Á.",
        positive: [
            { icon: "fa-solid fa-cart-shopping", text: "<strong>Thương mại nội khối:</strong> Kim ngạch thương mại nội khối ASEAN tăng trưởng nhanh chóng." },
            { icon: "fa-solid fa-hand-holding-dollar", text: "<strong>Làn sóng FDI đầu tiên:</strong> Thu hút nguồn lực từ các nước láng giềng năng động như Singapore, Thái Lan." },
            { icon: "fa-solid fa-users-gear", text: "<strong>Nâng cao năng lực:</strong> Doanh nghiệp và cơ quan quản lý bắt đầu cọ xát và làm quen với các tiêu chuẩn quốc tế." }
        ],
        negative: [
            { icon: "fa-solid fa-person-falling-burst", text: "<strong>Sức ép cạnh tranh:</strong> Đối mặt với luồng hàng hóa giá rẻ, chất lượng cao từ các nước ASEAN đi trước." },
            { icon: "fa-solid fa-industry", text: "<strong>Thử thách nội địa:</strong> Nhiều ngành sản xuất non trẻ gặp khó khăn lớn khi thuế quan bắt đầu cắt giảm." }
        ],
        conclusion: "Mốc 1995 đánh dấu bước chuyển từ \"đóng cửa\" sang \"kết nối khu vực\", là trường học thực tiễn giúp Việt Nam tập dượt chuẩn bị cho sân chơi toàn cầu lớn hơn."
    },
    '1998': {
        title: "Việt Nam gia nhập Diễn đàn APEC",
        desc: "<strong>Tổng quan:</strong> Tháng 11/1998, tại Hội nghị Bộ trưởng APEC lần thứ 10 tại Malaysia, Việt Nam được kết nạp vào APEC. Đây là diễn đàn quy tụ các siêu cường kinh tế lớn nhất thế giới như Mỹ, Trung Quốc, Nhật Bản.<br><br><strong>Sức ảnh hưởng đến kinh tế:</strong> Mở rộng không gian kinh tế từ Đông Nam Á ra toàn bộ vành đai Thái Bình Dương. APEC tạo kênh đối thoại mở, không ràng buộc pháp lý nhưng định hình dòng chảy đầu tư và thương mại khổng lồ vào Việt Nam.",
        positive: [
            { icon: "fa-solid fa-microchip", text: "<strong>Tiếp thu công nghệ:</strong> Tạo cơ hội tiếp cận nguồn hỗ trợ kỹ thuật, chuyển giao công nghệ và xây dựng năng lực quản lý." },
            { icon: "fa-solid fa-globe", text: "<strong>Nâng cao uy tín:</strong> Đăng cai thành công các hội nghị cấp cao APEC (2006, 2017) giúp nâng tầm vị thế quốc tế." }
        ],
        negative: [
            { icon: "fa-solid fa-hourglass-half", text: "<strong>Nguyên tắc tự nguyện:</strong> Do cơ chế không ràng buộc pháp lý, dễ rơi vào thế bị động nếu thiếu chiến lược khai thác rõ ràng." }
        ],
        conclusion: "Gia nhập APEC 1998 đưa Việt Nam tiếp cận trực tiếp với các trung tâm quyền lực kinh tế thế giới, tạo tiền đề ngoại giao thuận lợi cho các hiệp định song phương lớn."
    },
    '2001': {
        title: "Hiệp định Thương mại Việt Nam - Hoa Kỳ (BTA) có hiệu lực",
        desc: "<strong>Tổng quan:</strong> Ký kết năm 2000 và chính thức có hiệu lực từ ngày 10/12/2001, hiệp định này bình thường hóa hoàn toàn quan hệ kinh tế giữa hai cựu thù, mở toang cánh cửa vào thị trường tiêu dùng lớn nhất thế giới.<br><br><strong>Sức ảnh hưởng đến kinh tế:</strong> Tạo nên một cú hích cực đại cho xuất khẩu của Việt Nam, đặc biệt là dệt may, da giày, nông thủy sản. Dòng vốn đầu tư nước ngoài dịch chuyển mạnh mẽ đến Việt Nam để tận dụng lợi thế xuất khẩu sang Mỹ.",
        positive: [
            { icon: "fa-solid fa-arrow-up-right-dots", text: "<strong>Bùng nổ xuất khẩu:</strong> Kim ngạch xuất khẩu sang Hoa Kỳ tăng vọt theo cấp số nhân, tạo ra hàng triệu việc làm." },
            { icon: "fa-solid fa-scroll", text: "<strong>Cải cách thể chế:</strong> Cải cách hệ thống pháp luật kinh tế trong nước tương thích với chuẩn mực phương Tây." }
        ],
        negative: [
            { icon: "fa-solid fa-gavel", text: "<strong>Phòng vệ thương mại:</strong> Doanh nghiệp bắt đầu đối diện các vụ kiện chống bán phá giá phức tạp (cá tra, tôm...)." },
            { icon: "fa-solid fa-triangle-exclamation", text: "<strong>Rào cản kỹ thuật:</strong> Sức ép lớn từ các tiêu chuẩn chất lượng và kỹ thuật khắt khe của thị trường Mỹ." }
        ],
        conclusion: "BTA 2001 là bước chạy đà quan trọng nhất, giúp Việt Nam hoàn thiện thể chế và tích lũy kinh nghiệm thực tế để gia nhập WTO."
    },
    '2007': {
        title: "Việt Nam chính thức gia nhập WTO",
        desc: "<strong>Tổng quan:</strong> Ngày 11/1/2007, sau 11 năm đàm phán kiên trì, Việt Nam chính thức gia nhập WTO, đánh dấu sự hội nhập toàn diện vào hệ thống thương mại đa phương toàn cầu.<br><br><strong>Sức ảnh hưởng đến kinh tế:</strong> Việt Nam được hưởng quy chế tối huệ quốc (MFN) vô điều kiện từ tất cả các thành viên khác. Dòng vốn đầu tư trực tiếp nước ngoài (FDI) đổ vào Việt Nam đạt mức kỷ lục ngay sau khi gia nhập.",
        positive: [
            { icon: "fa-solid fa-globe", text: "<strong>Xuất khẩu bùng nổ:</strong> Tiếp cận thị trường toàn cầu bình đẳng, thúc đẩy kim ngạch xuất khẩu tăng trưởng vượt bậc." },
            { icon: "fa-solid fa-scroll", text: "<strong>Minh bạch thể chế:</strong> Cải cách môi trường pháp lý trong nước đồng bộ, minh bạch hơn theo chuẩn WTO." },
            { icon: "fa-solid fa-bag-shopping", text: "<strong>Lợi ích người tiêu dùng:</strong> Tiếp cận hàng hóa và dịch vụ ngoại nhập chất lượng cao với giá cả cạnh tranh." }
        ],
        negative: [
            { icon: "fa-solid fa-burst", text: "<strong>Cạnh tranh khốc liệt:</strong> Nhiều doanh nghiệp nhà nước và doanh nghiệp nội địa yếu kém bị đẩy vào vòng xoáy đào thải." },
            { icon: "fa-solid fa-arrows-spin", text: "<strong>Nhập siêu & Nhạy cảm vĩ mô:</strong> Áp lực nhập siêu tăng cao trong những năm đầu; nền kinh tế nhạy cảm hơn trước khủng hoảng toàn cầu." }
        ],
        conclusion: "Gia nhập WTO 2007 là mốc lịch sử đưa Việt Nam chính thức \"chơi chung luật chơi toàn cầu\" một cách bình đẳng."
    },
    '2019': {
        title: "Hiệp định CPTPP chính thức có hiệu lực",
        desc: "<strong>Tổng quan:</strong> Hiệp định có hiệu lực với Việt Nam từ ngày 14/1/2019. Đây là một trong những FTA thế hệ mới đầu tiên trên thế giới, bao gồm 11 nước thành viên với các tiêu chuẩn cực kỳ cao.<br><br><strong>Sức ảnh hưởng đến kinh tế:</strong> Giúp Việt Nam mở rộng thị trường sang các nước thuộc khu vực châu Mỹ (như Canada, Mexico, Peru) - những nơi trước đây Việt Nam chưa từng có FTA. Nó cũng thúc đẩy tái cơ cấu chuỗi cung ứng công nghiệp và nông nghiệp trong nước.",
        positive: [
            { icon: "fa-solid fa-tags", text: "<strong>Thuế quan tiệm cận 0%:</strong> Các dòng thuế xuất khẩu được cắt giảm sâu về gần bằng 0% theo lộ trình." },
            { icon: "fa-solid fa-gavel", text: "<strong>Cải cách sâu rộng:</strong> Thúc đẩy cải cách thể chế trong nước về lao động, sở hữu trí tuệ, mua sắm công và doanh nghiệp nhà nước." }
        ],
        negative: [
            { icon: "fa-solid fa-scissors", text: "<strong>Quy tắc xuất xứ khắt khe:</strong> Quy tắc 'từ sợi trở đi' gây khó khăn cho dệt may do phụ thuộc nguyên liệu ngoài khối." }
        ],
        conclusion: "CPTPP mở ra chương mới cho hội nhập \"chất lượng cao\", buộc Việt Nam cải cách sâu rộng từ bên trong chứ không chỉ đơn thuần là cắt giảm thuế ở biên giới."
    },
    '2020': {
        title: "Hiệp định EVFTA chính thức có hiệu lực",
        desc: "<strong>Tổng quan:</strong> Có hiệu lực từ ngày 1/8/2020, EVFTA là hiệp định thương mại tự do đầy tham vọng nhất mà EU từng ký kết với một quốc gia đang phát triển.<br><br><strong>Sức ảnh hưởng đến kinh tế:</strong> Mang lại lợi thế cạnh tranh khổng lồ cho hàng hóa Việt Nam so với các đối thủ ở châu Á khi tiếp cận thị trường EU rộng lớn và có sức mua cực cao.",
        positive: [
            { icon: "fa-solid fa-euro-sign", text: "<strong>Xóa bỏ 100% dòng thuế:</strong> Lộ trình cắt giảm thuế giúp hàng Việt Nam gia tăng lợi thế cạnh tranh vượt trội tại EU." },
            { icon: "fa-solid fa-leaf", text: "<strong>Hút FDI xanh và công nghệ:</strong> Thu hút dòng vốn chất lượng cao vào công nghiệp xanh, dược phẩm và logistics." }
        ],
        negative: [
            { icon: "fa-solid fa-shield-virus", text: "<strong>Tiêu chuẩn khắt khe:</strong> Các rào cản kỹ thuật (TBT), kiểm dịch (SPS) và phát triển bền vững cực kỳ nghiêm ngặt." },
            { icon: "fa-solid fa-triangle-exclamation", text: "<strong>Thẻ vàng thủy hải sản:</strong> Sức ép từ các cam kết chống đánh bắt cá bất hợp pháp (IUU) của Liên minh Châu Âu." }
        ],
        conclusion: "EVFTA là chiếc chìa khóa vàng giúp Việt Nam thâm nhập sâu vào chuỗi giá trị cao cấp của châu Âu, đồng thời nâng tầm tiêu chuẩn sản xuất nội địa."
    },
    '2022': {
        title: "Hiệp định RCEP chính thức có hiệu lực",
        desc: "<strong>Tổng quan:</strong> Có hiệu lực từ ngày 1/1/2022, RCEP là khối thương mại tự do lớn nhất thế giới, bao gồm 10 nước ASEAN và 5 nước đối tác (Trung Quốc, Nhật Bản, Hàn Quốc, Úc, New Zealand), bao phủ 30% GDP toàn cầu.<br><br><strong>Sức ảnh hưởng đến kinh tế:</strong> RCEP giúp hài hòa hóa quy tắc xuất xứ trong toàn khu vực Đông Á, tạo điều kiện thuận lợi nhất để Việt Nam nhập khẩu nguyên liệu đầu vào và xuất khẩu thành phẩm trong cùng một chuỗi cung ứng châu Á.",
        positive: [
            { icon: "fa-solid fa-truck-fast", text: "<strong>Tối ưu hóa chuỗi cung ứng:</strong> Đồng nhất quy tắc xuất xứ, giảm chi phí giao dịch thương mại cho doanh nghiệp." },
            { icon: "fa-solid fa-seedling", text: "<strong>Xuất khẩu nông sản:</strong> Đẩy mạnh xuất khẩu nông sản chủ lực sang các thị trường lớn lân cận (Trung Quốc, Nhật Bản, Hàn Quốc)." }
        ],
        negative: [
            { icon: "fa-solid fa-scale-unbalanced-flip", text: "<strong>Thâm hụt thương mại:</strong> Nguy cơ thâm hụt thương mại lớn hơn với các đối tác cung ứng nguyên liệu lớn như Trung Quốc, Hàn Quốc." },
            { icon: "fa-solid fa-industry", text: "<strong>Cạnh tranh sân nhà:</strong> Áp lực lớn từ hàng hóa công nghiệp và tiêu dùng giá rẻ, chất lượng cao tràn vào nội địa." }
        ],
        conclusion: "RCEP giúp Việt Nam củng cố vị thế vững chắc trong \"nhà máy của thế giới\" tại Đông Á, nhưng cũng đòi hỏi doanh nghiệp phải tự chủ hơn về công nghệ để không bị kẹt ở phân khúc gia công giá trị thấp."
    },
    '2025': {
        title: "Việt Nam duy trì đà tăng trưởng và khẳng định độ mở kinh tế",
        desc: "<strong>Tổng quan:</strong> Năm 2025 là cột mốc phản ánh rõ nét thành quả tích lũy từ gần 4 thập kỷ đổi mới và hội nhập. Bất chấp những biến động địa chính trị phức tạp trên thế giới, nền kinh tế Việt Nam đạt tốc độ tăng trưởng ấn tượng khoảng 6.5% (theo báo cáo của World Bank), được dẫn dắt bởi sự phục hồi mạnh mẽ của xuất khẩu công nghiệp chế biến, chế tạo và FDI.<br><br><strong>Sức ảnh hưởng đến kinh tế:</strong> Việt Nam củng cố vị trí mắt xích không thể thiếu trong chuỗi cung ứng toàn cầu (đặc biệt trong ngành bán dẫn, điện tử). Độ mở của nền kinh tế đạt mức cực cao khi tỷ lệ tổng kim ngạch xuất nhập khẩu trên GDP đạt khoảng 180% - 200%.",
        positive: [
            { icon: "fa-solid fa-microchip", text: "<strong>Hút FDI công nghệ cao:</strong> Thu hút thành công dòng vốn đầu tư vào ngành bán dẫn, trí tuệ nhân tạo (AI) và công nghệ cao." },
            { icon: "fa-solid fa-ranking-star", text: "<strong>Vị thế quốc tế:</strong> Đời sống nhân dân cải thiện rõ rệt; vị thế địa chính trị và địa kinh tế của Việt Nam nâng tầm toàn cầu." }
        ],
        negative: [
            { icon: "fa-solid fa-wind", text: "<strong>Nhạy cảm trước cú sốc:</strong> Độ mở kinh tế cực lớn khiến Việt Nam dễ tổn thương trước lạm phát toàn cầu và xung đột địa chính trị." },
            { icon: "fa-solid fa-link-slash", text: "<strong>Khoảng cách FDI - nội địa:</strong> Doanh nghiệp nội địa còn khoảng cách lớn so với khối FDI về công nghệ và năng suất lao động." }
        ],
        conclusion: "Cột mốc 2025 chứng minh hội nhập đã mang lại quả ngọt lớn, nhưng cũng đặt ra yêu cầu cấp bách: Việt Nam phải chuyển đổi mô hình từ \"tăng trưởng dựa vào lao động giá rẻ, thâm dụng tài nguyên\" sang \"tăng trưởng dựa vào khoa học công nghệ, đổi mới sáng tạo và nâng cao năng lực tự chủ\"."
    }
};

const milestoneReferences = {
    all: [
        "Giáo trình Kinh tế chính trị Mác - Lênin, mục 6.2.2, tr. 238 - 241.",
        "World Bank Open Data - Viet Nam profile.",
        "Tổng cục Thống kê Việt Nam - số liệu kinh tế - xã hội và thương mại."
    ],
    '1986': [
        "Đảng Cộng sản Việt Nam - Văn kiện Đại hội đại biểu toàn quốc lần thứ VI (1986).",
        "World Bank - \"Viet Nam Overview: Development History\"."
    ],
    '1995': [
        "ASEAN Secretariat - \"Viet Nam in ASEAN: 25 Years of Integration\".",
        "Bộ Công Thương Việt Nam - \"Tiến trình tham gia Hiệp định AFTA của Việt Nam\"."
    ],
    '1998': [
        "APEC Secretariat - \"Member Economies: Viet Nam\".",
        "Bộ Ngoại giao Việt Nam - \"Việt Nam và Diễn đàn Hợp tác Kinh tế châu Á - Thái Bình Dương\"."
    ],
    '2001': [
        "U.S. State Department - \"U.S.-Vietnam Bilateral Trade Agreement (BTA)\".",
        "Bộ Công Thương Việt Nam - \"Đánh giá 20 năm thực hiện Hiệp định Thương mại song phương Việt Nam - Hoa Kỳ\"."
    ],
    '2007': [
        "World Trade Organization (WTO) - \"Viet Nam and the WTO\".",
        "Bộ Kế hoạch và Đầu tư Việt Nam - \"Báo cáo đánh giá tác động sau khi gia nhập WTO\"."
    ],
    '2019': [
        "Bộ Công Thương Việt Nam - \"Cổng thông tin Hiệp định CPTPP\".",
        "World Bank - \"Economic and Distributional Impacts of CPTPP: The Case of Vietnam\"."
    ],
    '2020': [
        "European Commission - \"EU-Vietnam Trade Agreement\".",
        "Hiệp hội Doanh nghiệp châu Âu tại Việt Nam (EuroCham) - \"Whitebook on EVFTA Implementation\"."
    ],
    '2022': [
        "ASEAN Secretariat - \"Regional Comprehensive Economic Partnership (RCEP) Agreement\".",
        "Bộ Công Thương Việt Nam - \"Vụ Chính sách thương mại đa phương: Cẩm nang RCEP\"."
    ],
    '2025': [
        "World Bank - \"Taking Stock: Vietnam Economic Update (2025)\".",
        "Tổng cục Thống kê Việt Nam (GSO) - \"Báo cáo tình hình kinh tế - xã hội năm 2025\"."
    ]
};

const milestoneIllustrations = {
    all: {
        src: "image/webp/2007-wto.webp",
        alt: "Minh họa toàn cảnh tiến trình hội nhập kinh tế quốc tế của Việt Nam",
        caption: "Toàn cảnh hội nhập - các mốc mở cửa đưa Việt Nam vào mạng thương mại khu vực và toàn cầu."
    },
    '1986': {
        src: "image/webp/1986.webp",
        alt: "Minh họa công cuộc Đổi mới năm 1986 của Việt Nam",
        caption: "Đổi mới 1986 - điểm khởi đầu chuyển đổi tư duy kinh tế và mở đường cho hội nhập."
    },
    '1995': {
        src: "image/webp/1995-asean.webp",
        alt: "Minh họa Việt Nam gia nhập ASEAN và tham gia AFTA năm 1995",
        caption: "ASEAN/AFTA 1995 - minh họa bước hội nhập khu vực và mở rộng thị trường Đông Nam Á."
    },
    '1998': {
        src: "image/webp/1998-apec.webp",
        alt: "Minh họa Việt Nam gia nhập APEC năm 1998",
        caption: "APEC 1998 - minh họa kết nối Việt Nam với các trung tâm kinh tế châu Á - Thái Bình Dương."
    },
    '2001': {
        src: "image/webp/2001-bta-viet-my.webp",
        alt: "Minh họa Hiệp định Thương mại Việt Nam - Hoa Kỳ năm 2001",
        caption: "BTA Việt Nam - Hoa Kỳ 2001 - minh họa cú hích xuất khẩu và cải cách thể chế thương mại."
    },
    '2007': {
        src: "image/webp/2007-wto.webp",
        alt: "Minh họa Việt Nam gia nhập WTO năm 2007",
        caption: "WTO 2007 - minh họa quá trình Việt Nam hội nhập sâu vào thương mại toàn cầu."
    },
    '2019': {
        src: "image/webp/2019-cptpp.webp",
        alt: "Minh họa Hiệp định CPTPP có hiệu lực với Việt Nam năm 2019",
        caption: "CPTPP 2019 - minh họa FTA thế hệ mới với tiêu chuẩn cao về thị trường, lao động và thể chế."
    },
    '2020': {
        src: "image/webp/2020-evfta.webp",
        alt: "Minh họa Hiệp định EVFTA có hiệu lực năm 2020",
        caption: "EVFTA 2020 - minh họa kết nối thương mại Việt Nam với thị trường Liên minh châu Âu."
    },
    '2022': {
        src: "image/webp/2022-rcep.webp",
        alt: "Minh họa Hiệp định RCEP có hiệu lực năm 2022",
        caption: "RCEP 2022 - minh họa liên kết chuỗi cung ứng khu vực Đông Á và ASEAN."
    },
    '2025': {
        src: "image/webp/2022-rcep.webp",
        alt: "Minh họa thành quả hội nhập và độ mở kinh tế của Việt Nam đến năm 2025",
        caption: "Thành quả hội nhập 2025 - minh họa độ mở lớn và vị trí của Việt Nam trong chuỗi cung ứng khu vực."
    }
};

const legacySolutionsData = {
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

const solutionBranches = ['awareness', 'strategy', 'commitment', 'institution', 'competitiveness', 'autonomy'];

const solutionsData = {
    awareness: {
        icon: "fa-solid fa-lightbulb",
        colorClass: "branch-blue",
        accent: "var(--secondary)",
        title: "Nhận thức sâu sắc thời cơ và thách thức",
        subtitle: "Cơ sở tư duy để lựa chọn chính sách hội nhập đúng",
        theory: "Hội nhập kinh tế quốc tế là xu thế khách quan, là phương thức tồn tại và phát triển của Việt Nam trong bối cảnh hiện nay. Nhận thức đúng giúp tận dụng thời cơ, đồng thời chủ động khắc chế mặt trái của hội nhập.",
        keywords: ["Xu thế khách quan", "Hai mặt tác động", "Toàn dân tham gia"],
        items: [
            { title: "Nhìn hội nhập như một tất yếu khách quan", content: "Không quốc gia nào có thể đứng ngoài dòng chảy liên kết kinh tế toàn cầu. Việt Nam cần xem hội nhập là phương thức phát triển, không phải khẩu hiệu ngắn hạn." },
            { title: "Đánh giá đủ hai mặt tác động", content: "Thuận lợi gồm mở rộng thị trường, tăng trưởng, khoa học - công nghệ và cơ cấu lại nền kinh tế. Thách thức gồm cạnh tranh gay gắt, biến động thị trường, rủi ro chính trị, an ninh và văn hóa." },
            { title: "Xác định đúng chủ thể tham gia", content: "Nhà nước giữ vai trò dẫn dắt và hỗ trợ, nhưng hội nhập là sự nghiệp của toàn xã hội; doanh nghiệp, doanh nhân, trí thức và người dân là lực lượng trực tiếp tham gia." }
        ]
    },
    strategy: {
        icon: "fa-solid fa-route",
        colorClass: "branch-yellow",
        accent: "var(--warning)",
        title: "Xây dựng chiến lược và lộ trình phù hợp",
        subtitle: "Có mục tiêu, bước đi, ưu tiên và khả năng điều chỉnh",
        theory: "Chiến lược hội nhập là kế hoạch tổng thể về phương hướng, mục tiêu và giải pháp. Lộ trình hợp lý giúp tránh cú sốc, chọn đúng ngành ưu tiên và bảo đảm hiệu quả trong từng giai đoạn.",
        keywords: ["Bối cảnh quốc tế", "Điều kiện trong nước", "Kinh nghiệm quốc tế", "Lộ trình linh hoạt"],
        items: [
            { title: "Đánh giá bối cảnh quốc tế", content: "Cần nhận diện xu hướng toàn cầu hóa, cách mạng công nghiệp lần thứ tư, các FTA thế hệ mới, vai trò của các trung tâm kinh tế và sự dịch chuyển tương quan sức mạnh quốc tế." },
            { title: "Đánh giá điều kiện trong nước", content: "Làm rõ năng lực thể chế, khung pháp lý, chất lượng nguồn nhân lực và mức độ sẵn sàng của các doanh nghiệp nội địa để tránh hội nhập vượt quá khả năng chuẩn bị." },
            { title: "Nghiên cứu kinh nghiệm của các nước", content: "Đúc rút các bài học thành công và thất bại từ kinh nghiệm hội nhập của các nước đi trước nhằm chủ động phòng ngừa và hạn chế các sai lầm." },
            { title: "Thiết kế lộ trình linh hoạt", content: "Xác định thời gian, mức độ, bước đi phù hợp cho từng giai đoạn và các ngành cần ưu tiên; đồng thời giữ tính mở để điều chỉnh kịp thời với biến động bên ngoài." }
        ]
    },
    commitment: {
        icon: "fa-solid fa-handshake",
        colorClass: "branch-green",
        accent: "var(--success)",
        title: "Chủ động tham gia liên kết và thực hiện cam kết",
        subtitle: "Nâng uy tín, vị thế và khả năng tiếp cận thị trường",
        theory: "Việt Nam cần tích cực tham gia các liên kết kinh tế quốc tế và khu vực, đồng thời thực hiện nghiêm túc các cam kết để tạo niềm tin, nâng tầm hội nhập và bảo đảm lợi ích quốc gia.",
        keywords: ["Song phương", "Đa phương", "Thực hiện cam kết", "Uy tín quốc gia"],
        items: [
            { title: "Mở rộng quan hệ song phương và đa phương", content: "Duy trì quan hệ ngoại giao, thương mại, đầu tư với nhiều quốc gia, vùng lãnh thổ; tham gia các tổ chức và diễn đàn như ASEAN, APEC, ASEM, WTO." },
            { title: "Thực hiện nghiêm túc các cam kết", content: "Triển khai cam kết về thuế quan, dịch vụ, đầu tư, minh bạch chính sách và cải cách thể chế theo các hiệp định đã ký." },
            { title: "Chủ động đóng góp trong sân chơi chung", content: "Không chỉ tham gia thụ động, Việt Nam cần đề xuất sáng kiến, phối hợp đa ngành, đa phương và nâng cao vai trò trong các cơ chế hợp tác." }
        ]
    },
    institution: {
        icon: "fa-solid fa-scale-balanced",
        colorClass: "branch-cyan",
        accent: "var(--cptpp)",
        title: "Hoàn thiện thể chế kinh tế và luật pháp",
        subtitle: "Tạo môi trường minh bạch, cạnh tranh và tương thích quốc tế",
        theory: "Sự tương thích về thể chế là điều kiện quan trọng của hội nhập. Hoàn thiện cơ chế thị trường, đổi mới quản lý nhà nước và rà soát hệ thống pháp luật giúp nền kinh tế vận hành hiệu quả theo chuẩn mực quốc tế.",
        keywords: ["Hệ thống pháp luật", "Quản lý nhà nước", "Thể chế thị trường", "Tranh chấp quốc tế"],
        items: [
            { title: "Rà soát, đồng bộ hệ thống pháp luật", content: "Rà soát, bổ sung và hoàn thiện các luật liên quan đến đầu tư, thương mại, doanh nghiệp, đất đai, thuế, tài chính tín dụng... bảo đảm tính tương thích với luật pháp quốc tế." },
            { title: "Đổi mới cơ chế quản lý của Nhà nước", content: "Nhà nước tập trung làm tốt chức năng định hướng, tạo môi trường thuận lợi, hỗ trợ và giám sát hoạt động; cải cách hành chính và minh bạch hóa chính sách kinh tế." },
            { title: "Hoàn thiện thể chế kinh tế thị trường", content: "Đổi mới mạnh mẽ về sở hữu, coi trọng phát triển cả khu vực kinh tế tư nhân và kinh tế nhà nước; hình thành đồng bộ các loại thị trường; bảo đảm môi trường cạnh tranh bình đẳng." },
            { title: "Tương trợ tư pháp và xử lý tranh chấp", content: "Hoàn thiện pháp luật về tương trợ tư pháp phù hợp với luật pháp quốc tế; chủ động phòng ngừa, giảm thiểu các thách thức và xử lý có hiệu quả các tranh chấp thương mại, đầu tư quốc tế." }
        ]
    },
    competitiveness: {
        icon: "fa-solid fa-rocket",
        colorClass: "branch-neon",
        accent: "#F43F5E",
        title: "Nâng cao năng lực cạnh tranh quốc tế của nền kinh tế",
        subtitle: "Doanh nghiệp thích ứng nhanh, Nhà nước kiến tạo điều kiện cạnh tranh",
        theory: "Năng lực cạnh tranh là điều kiện trực tiếp để hội nhập có hiệu quả. Doanh nghiệp phải học cách vận hành theo chuẩn toàn cầu, còn Nhà nước hỗ trợ bằng nguồn nhân lực, hạ tầng, thông tin, thể chế và môi trường kinh doanh thuận lợi.",
        quote: "Doanh nghiệp và đội ngũ doanh nhân là lực lượng nòng cốt trong tiến trình hội nhập.",
        extraHtml: `
            <div class="solution-action-grid">
                <div>
                    <strong>Doanh nghiệp phải thích ứng</strong>
                    <span>Chủ động học hỏi các kỹ năng kinh doanh mới, cải tiến công nghệ và liên kết để tham gia sâu vào chuỗi giá trị toàn cầu.</span>
                </div>
                <div>
                    <strong>Nhà nước phải hỗ trợ</strong>
                    <span>Đào tạo nguồn nhân lực chất lượng cao, hoàn thiện hạ tầng, logistics và cải thiện môi trường sản xuất kinh doanh.</span>
                </div>
            </div>
        `,
        keywords: ["Cơ hội kinh doanh", "Chấp nhận cạnh tranh", "Huy động vốn", "Quản trị bất định", "Đồng hành Chính phủ", "Đối thoại pháp lý"],
        items: [
            {
                title: "Học cách tìm kiếm cơ hội kinh doanh",
                content: `
                    <p>Doanh nghiệp phải chủ động tìm kiếm và khai thác các cơ hội kinh doanh mới trên thị trường quốc tế.</p>
                    <ul class="lesson-points">
                        <li>Khai thác triệt để các ưu đãi thuế quan từ các hiệp định thương mại tự do (FTA) đã ký kết.</li>
                        <li>Nghiên cứu nhu cầu, tiêu chuẩn kỹ thuật, tiêu chuẩn môi trường và vệ sinh an toàn thực phẩm của các thị trường mục tiêu.</li>
                        <li>Chuyển dịch sản xuất theo hướng nâng cao chất lượng sản phẩm để đáp ứng tiêu chuẩn của chuỗi cung ứng toàn cầu.</li>
                    </ul>
                `
            },
            {
                title: "Học cách kết nối cùng chấp nhận cạnh tranh",
                content: `
                    <p>Doanh nghiệp phải chủ động liên kết, kết nối với nhau để cùng đứng vững trước sức ép cạnh tranh gay gắt.</p>
                    <ul class="lesson-points">
                        <li>Hợp tác với các doanh nghiệp trong nước để tạo sức mạnh quy mô, giảm chi phí đầu vào và hình thành chuỗi giá trị nội địa.</li>
                        <li>Kết nối với đối tác nước ngoài để tiếp thu công nghệ tiên tiến, học hỏi năng lực quản trị hiện đại.</li>
                        <li>Chấp nhận cạnh tranh bình đẳng, dùng đổi mới sáng tạo và uy tín thương hiệu làm vũ khí cạnh tranh cốt lõi.</li>
                    </ul>
                `
            },
            {
                title: "Học cách huy động vốn",
                content: `
                    <p>Năng lực cạnh tranh phụ thuộc lớn vào khả năng tiếp cận và sử dụng hiệu quả nguồn vốn.</p>
                    <ul class="lesson-points">
                        <li>Minh bạch tài chính, nâng quản trị doanh nghiệp để tăng niềm tin với ngân hàng, nhà đầu tư và đối tác chiến lược.</li>
                        <li>Đa dạng hóa nguồn vốn: tín dụng, thị trường vốn, quỹ đầu tư, liên doanh, liên kết và vốn quốc tế.</li>
                        <li>Ưu tiên vốn cho đổi mới công nghệ, chuyển đổi số, đào tạo nhân lực và nâng cấp năng lực sản xuất.</li>
                    </ul>
                `
            },
            {
                title: "Học cách quản trị sự bất định",
                content: `
                    <p>Thị trường quốc tế biến động nhanh; doanh nghiệp phải biết dự báo và phòng ngừa rủi ro.</p>
                    <ul class="lesson-points">
                        <li>Theo dõi biến động tỷ giá, lãi suất, giá nguyên liệu, logistics, chính sách thương mại và nhu cầu tiêu dùng.</li>
                        <li>Xây dựng kịch bản ứng phó với đứt gãy chuỗi cung ứng, rào cản kỹ thuật, phòng vệ thương mại và khủng hoảng thị trường.</li>
                        <li>Đa dạng hóa thị trường, nhà cung cấp, khách hàng và phương thức thanh toán để giảm phụ thuộc.</li>
                    </ul>
                `
            },
            {
                title: "Học cách đồng hành với Chính phủ",
                content: `
                    <p>Doanh nghiệp không đứng ngoài tiến trình chính sách; phải chủ động cùng Nhà nước nâng năng lực hội nhập.</p>
                    <ul class="lesson-points">
                        <li>Cập nhật thông tin về FTA, cam kết thuế quan, quy tắc xuất xứ, tiêu chuẩn kỹ thuật và chính sách hỗ trợ.</li>
                        <li>Tham gia đào tạo, xúc tiến thương mại, chuyển đổi số, đổi mới sáng tạo và chương trình phát triển ngành hàng.</li>
                        <li>Phản hồi khó khăn thực tiễn để Nhà nước điều chỉnh thể chế, thủ tục, hạ tầng và dịch vụ hỗ trợ doanh nghiệp.</li>
                    </ul>
                `
            },
            {
                title: "Học cách đối thoại pháp lý",
                content: `
                    <p>Trong sân chơi toàn cầu, hiểu luật là năng lực cạnh tranh cốt lõi chứ không chỉ là công việc phòng thủ.</p>
                    <ul class="lesson-points">
                        <li>Nắm luật thương mại quốc tế, cam kết FTA, phòng vệ thương mại, sở hữu trí tuệ, hợp đồng và giải quyết tranh chấp.</li>
                        <li>Biết sử dụng tư vấn pháp lý, hiệp hội ngành nghề và cơ chế đối thoại để bảo vệ lợi ích chính đáng.</li>
                        <li>Chủ động tuân thủ tiêu chuẩn lao động, môi trường, minh bạch nguồn gốc để tránh rủi ro kiện tụng và mất thị trường.</li>
                    </ul>
                `
            },
            {
                title: "Vai trò hỗ trợ của Nhà nước",
                content: `
                    <p>Nhà nước giữ vai trò kiến tạo điều kiện để doanh nghiệp nâng năng lực cạnh tranh, nhưng không làm thay doanh nghiệp.</p>
                    <ul class="lesson-points state-support-list">
                        <li>Phát triển nguồn nhân lực, nhất là nhân lực chất lượng cao gắn với nhu cầu thực tiễn của doanh nghiệp.</li>
                        <li>Tổ chức các khóa đào tạo, trao đổi kinh nghiệm về kỹ năng hội nhập, luật kinh tế và thương mại quốc tế.</li>
                        <li>Hoàn thiện hạ tầng sản xuất, giao thông, thông tin, logistics, dịch vụ công nhằm giảm chi phí sản xuất cho doanh nghiệp.</li>
                        <li>Cải thiện môi trường đầu tư kinh doanh, hỗ trợ tiếp cận vốn, chuyển giao công nghệ mới và cung cấp thông tin thị trường.</li>
                    </ul>
                `
            }
        ]
    },
    autonomy: {
        icon: "fa-solid fa-shield-halved",
        colorClass: "branch-red",
        accent: "var(--danger)",
        title: "Xây dựng nền kinh tế độc lập, tự chủ",
        subtitle: "Giữ chủ quyền phát triển trong quá trình mở cửa",
        theory: "Độc lập, tự chủ không có nghĩa là biệt lập. Hội nhập hiệu quả phải đi đôi với tự chủ về đường lối phát triển, làm chủ công nghệ, đa dạng hóa thị trường và củng cố vững chắc tiềm lực kinh tế quốc gia.",
        quote: "Xây dựng nền kinh tế tự chủ phải trên cơ sở làm chủ công nghệ và chủ động, tích cực hội nhập, đa dạng hóa thị trường, nâng cao khả năng thích ứng của nền kinh tế.",
        keywords: ["Đường lối kinh tế", "Đẩy mạnh CNH-HĐH", "Đột phá chiến lược", "QP-AN, đối ngoại", "Tự chủ & Hội nhập"],
        items: [
            { title: "Hoàn thiện đường lối kinh tế phát triển", content: "Không ngừng hoàn thiện, bổ sung đường lối chung và đường lối xây dựng nền kinh tế độc lập, tự chủ phù hợp với thực tiễn từng giai đoạn phát triển của đất nước." },
            { title: "Đẩy mạnh công nghiệp hóa, hiện đại hóa", content: "Cơ cấu lại nền kinh tế theo chiều sâu; đa dạng hóa thị trường, nguồn vốn và đối tác để tránh lệ thuộc; tăng đầu tư R&D để tự chủ dần về công nghệ." },
            { title: "Thực hiện ba đột phá chiến lược", content: "Tập trung huy động các nguồn lực để thực hiện thắng lợi ba đột phá: hoàn thiện thể chế kinh tế, phát triển hạ tầng cơ sở và phát triển nguồn nhân lực chất lượng cao." },
            { title: "Kết hợp kinh tế với quốc phòng, an ninh, đối ngoại", content: "Hợp tác trên nguyên tắc bình đẳng, cùng có lợi, tôn trọng chủ quyền; củng cố thế trận quốc phòng an ninh để bảo vệ Tổ quốc; giải quyết tranh chấp bằng biện pháp hòa bình." },
            { title: "Xử lý quan hệ biện chứng giữa tự chủ và hội nhập", content: "Giữ vững tự chủ làm nền tảng vững chắc để thực hiện hội nhập hiệu quả mà không bị 'hòa tan'; hội nhập tốt giúp thu hút các nguồn lực bên ngoài để củng cố tự chủ." }
        ]
    }
};

// 2. ISO COUNTRY DATA MAPPINGS & REGIONS HELPERS
const euCodes = ['at', 'be', 'bg', 'hr', 'cy', 'cz', 'dk', 'ee', 'fi', 'fr', 'de', 'gr', 'hu', 'ie', 'it', 'lv', 'lt', 'lu', 'mt', 'nl', 'pl', 'pt', 'ro', 'sk', 'si', 'es', 'se'];
const cptppCodes = ['jp', 'ca', 'au', 'nz', 'mx', 'pe', 'cl', 'sg', 'my', 'bn'];
const aseanCodes = ['th', 'id', 'my', 'sg', 'ph', 'kh', 'la', 'mm', 'bn'];
const apecCodes = ['us', 'ca', 'mx', 'pe', 'cl', 'jp', 'cn', 'ru', 'kr', 'au', 'nz', 'sg', 'my', 'bn', 'th', 'id', 'ph', 'vn'];
const rcepCodes = [...new Set([...aseanCodes, 'cn', 'jp', 'kr', 'au', 'nz'])];

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
            onClick: (event, activeElements) => {
                if (activeElements && activeElements.length > 0) {
                    const firstPoint = activeElements[0];
                    const label = integrationChart.data.labels[firstPoint.index];
                    let targetYear = label;
                    const milestoneYears = ['1986', '1995', '1998', '2001', '2007', '2019', '2020', '2022', '2025'];
                    if (!milestoneYears.includes(targetYear)) {
                        const yearNum = parseInt(targetYear);
                        if (yearNum <= 1994) targetYear = '1986';
                        else if (yearNum >= 1995 && yearNum <= 1997) targetYear = '1995';
                        else if (yearNum >= 1998 && yearNum <= 2000) targetYear = '1998';
                        else if (yearNum >= 2001 && yearNum <= 2006) targetYear = '2001';
                        else if (yearNum >= 2007 && yearNum <= 2018) targetYear = '2007';
                        else if (yearNum === 2019) targetYear = '2019';
                        else if (yearNum >= 2020 && yearNum <= 2021) targetYear = '2020';
                        else if (yearNum >= 2022 && yearNum <= 2024) targetYear = '2022';
                        else if (yearNum >= 2025) targetYear = '2025';
                    }
                    const dot = document.querySelector(`.milestone-dot[data-year="${targetYear}"]`);
                    if (dot) {
                        handleMilestoneClick(dot, false);
                        if (label !== targetYear) {
                            updateKPIs(label);
                            updateChartHighlight(label);
                            document.getElementById('chart-title').textContent = `Số liệu kinh tế: Năm ${label}`;
                            document.getElementById('year-indicator').textContent = label;
                        }
                    }
                }
            },
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
    if (year === '1986') return `rgba(34, 197, 94, ${alpha})`; // Đổi mới - Green
    if (year === '1995') return `rgba(16, 185, 129, ${alpha})`; // ASEAN - Green
    if (year === '1998') return `rgba(59, 130, 246, ${alpha})`; // APEC - Blue
    if (year === '2001') return `rgba(244, 114, 182, ${alpha})`; // BTA - Pink
    if (year === '2007') return `rgba(139, 92, 246, ${alpha})`; // WTO - Purple
    if (year === '2019') return `rgba(6, 182, 212, ${alpha})`;  // CPTPP - Cyan
    if (year === '2020') return `rgba(245, 158, 11, ${alpha})`;  // EVFTA - Orange
    if (year === '2022') return `rgba(14, 165, 233, ${alpha})`;  // RCEP - Sky
    return `rgba(16, 185, 129, ${alpha})`; // 2025/All
}

// Check if a country is member of an agreement/active in a milestone year
function isCountryActiveInYear(code, year) {
    if (!code || code === 'vn') return false;
    
    if (year === 'all' || year === '2025') {
        return euCodes.includes(code) || cptppCodes.includes(code) || aseanCodes.includes(code) || apecCodes.includes(code) || rcepCodes.includes(code);
    }
    if (year === '1986') return ['sg', 'jp', 'ru'].includes(code);
    if (year === '1995') return aseanCodes.includes(code);
    if (year === '1998') return apecCodes.includes(code);
    if (year === '2001') return code === 'us';
    if (year === '2007') return true; // WTO covers all countries in our database
    if (year === '2019') return cptppCodes.includes(code);
    if (year === '2020') return euCodes.includes(code);
    if (year === '2022') return rcepCodes.includes(code);
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
    if (year === '1986') {
        ['sg', 'jp', 'ru'].forEach(c => activeCountries.push(c));
    } else if (year === '1995') {
        aseanCodes.forEach(c => { if (c !== 'vn') activeCountries.push(c); });
    } else if (year === '1998') {
        ['us', 'ca', 'mx', 'pe', 'cl', 'jp', 'cn', 'ru', 'kr', 'au', 'nz', 'id'].forEach(c => activeCountries.push(c));
    } else if (year === '2001') {
        ['us'].forEach(c => activeCountries.push(c));
    } else if (year === '2007') {
        ['us', 'ca', 'br', 'za', 'de', 'fr', 'cn', 'ru', 'in', 'au', 'sa', 'eg'].forEach(c => activeCountries.push(c));
    } else if (year === '2019') {
        cptppCodes.forEach(c => { if (c !== 'vn') activeCountries.push(c); });
    } else if (year === '2020') {
        euCodes.forEach(c => activeCountries.push(c));
    } else if (year === '2022') {
        rcepCodes.forEach(c => { if (c !== 'vn') activeCountries.push(c); });
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
        if (mode === '3d') {
            layerToggle.classList.remove('hidden');
            const tileBtn = document.getElementById('btn-toggle-tiles');
            if (tileBtn) {
                if (isGlobeSatellite) {
                    tileBtn.classList.add('active');
                    tileBtn.innerHTML = `<i class="fa-solid fa-earth-americas"></i> Vệ tinh`;
                } else {
                    tileBtn.classList.remove('active');
                    tileBtn.innerHTML = `<i class="fa-solid fa-layer-group"></i> Nền`;
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

    // Toggle 3D Globe textures
    const tileBtn = document.getElementById('btn-toggle-tiles');
    if (tileBtn) {
        tileBtn.addEventListener('click', () => {
            if (currentMapMode === '3d') {
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

    // Toggle Fullscreen cockpit mode
    const fullscreenBtn = document.getElementById('btn-toggle-fullscreen');
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', () => {
            toggleFullscreen();
        });
    }
}

function toggleFullscreen() {
    document.body.classList.toggle('fullscreen-mode');
    const isFullscreen = document.body.classList.contains('fullscreen-mode');
    
    // Update fullscreen button icon and text
    const btn = document.getElementById('btn-toggle-fullscreen');
    if (btn) {
        if (isFullscreen) {
            btn.innerHTML = `<i class="fa-solid fa-compress"></i> Thu nhỏ`;
            btn.classList.add('active');
        } else {
            btn.innerHTML = `<i class="fa-solid fa-expand"></i> Toàn màn hình`;
            btn.classList.remove('active');
        }
    }
    
    // Resize map canvases to fit the new fullscreen size
    setTimeout(() => {
        if (globeInstance) {
            const mapEl = document.getElementById('globeMap');
            if (mapEl) {
                globeInstance.width(mapEl.clientWidth);
                globeInstance.height(mapEl.clientHeight);
            }
        }
        updateTimelineProgressBar();
    }, 100);
}

// Global escape key to exit fullscreen mode
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !document.getElementById('image-lightbox')?.classList.contains('hidden')) {
        closeImageLightbox();
        return;
    }
    if (e.key === 'Escape' && document.body.classList.contains('mindmap-fullscreen-mode')) {
        toggleMindmapFullscreen(false);
        return;
    }
    if (e.key === 'Escape' && document.body.classList.contains('fullscreen-mode')) {
        toggleFullscreen();
    }
});

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
        const cpYBase = midY - Math.abs(tX - vnX) * 0.15;

        // Export lane (flowing outwards from VN to partner country)
        const cpYExport = cpYBase - 15;
        const pathDExport = `M ${vnX} ${vnY} Q ${cpX} ${cpYExport}, ${tX} ${tY}`;
        const pathExport = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathExport.setAttribute('d', pathDExport);
        pathExport.setAttribute('class', `flow-line active-line-export active-line-${agreementClass}`);

        // Import lane (flowing inwards from partner country to VN)
        const cpYImport = cpYBase + 15;
        const pathDImport = `M ${tX} ${tY} Q ${cpX} ${cpYImport}, ${vnX} ${vnY}`;
        const pathImport = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathImport.setAttribute('d', pathDImport);
        pathImport.setAttribute('class', `flow-line active-line-import active-line-${agreementClass}`);

        if (flowLinesGroup) {
            flowLinesGroup.appendChild(pathExport);
            flowLinesGroup.appendChild(pathImport);
        }
    }

    if (year === '1986') {
        const earlyHubs = ['sg', 'jp', 'ru'];
        earlyHubs.forEach(code => {
            const el = document.getElementById(code);
            if (el) {
                el.setAttribute('class', 'active-doimoi');
            }
            drawFlowCurve(code, 'doimoi');
        });
    }
    else if (year === '1995') {
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
    else if (year === '2001') {
        const usEl = document.getElementById('us');
        if (usEl) {
            usEl.setAttribute('class', 'active-bta');
        }
        drawFlowCurve('us', 'bta');
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
    else if (year === '2022') {
        rcepCodes.forEach(code => {
            const el = document.getElementById(code);
            if (el) {
                el.setAttribute('class', 'active-rcep');
                if (code !== 'vn') drawFlowCurve(code, 'rcep');
            }
        });
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

    if (positiveList.parentElement) positiveList.parentElement.scrollTop = 0;
    if (negativeList.parentElement) negativeList.parentElement.scrollTop = 0;

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

    // Populate overlay sidebar lists for fullscreen mode (3-column layout)
    const fsPositiveList = document.getElementById('fs-positive-list');
    const fsNegativeList = document.getElementById('fs-negative-list');
    
    if (fsPositiveList && fsNegativeList) {
        fsPositiveList.innerHTML = '';
        fsNegativeList.innerHTML = '';
        
        data.positive.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="${item.icon}"></i> <span>${item.text}</span>`;
            fsPositiveList.appendChild(li);
        });
        
        data.negative.forEach(item => {
            const li = document.createElement('li');
            li.className = 'negative-item';
            li.innerHTML = `<i class="${item.icon}"></i> <span>${item.text}</span>`;
            fsNegativeList.appendChild(li);
        });
    }
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

    const sidebarConclusionText = document.getElementById('sidebar-conclusion-text');
    const sidebarConclusionBox = document.getElementById('sidebar-conclusion-box');
    if (sidebarConclusionText && sidebarConclusionBox) {
        if (mData.conclusion) {
            sidebarConclusionText.innerHTML = mData.conclusion;
            sidebarConclusionBox.classList.remove('hidden');
            sidebarConclusionBox.style.borderLeftColor = getMilestoneColor(year);
        } else {
            sidebarConclusionText.innerHTML = '';
            sidebarConclusionBox.classList.add('hidden');
        }
    }

    const illustration = milestoneIllustrations[year] || milestoneIllustrations.all;
    const illustrationImg = document.getElementById('sidebar-illustration-img');
    const illustrationCaption = document.getElementById('sidebar-illustration-caption');
    if (illustrationImg) {
        illustrationImg.src = illustration.src;
        illustrationImg.alt = illustration.alt;
    }
    if (illustrationCaption) {
        illustrationCaption.textContent = illustration.caption;
    }

    const referenceList = document.getElementById('sidebar-reference-list');
    if (referenceList) {
        referenceList.innerHTML = '';
        const references = milestoneReferences[year] || milestoneReferences.all;
        references.forEach(ref => {
            const li = document.createElement('li');
            li.textContent = ref;
            referenceList.appendChild(li);
        });
    }

    // Synchronize all map updates
    updateWorldMap(year);
    updateGlobeData();

    // Update active legend dot color
    const activeColor = getMilestoneColor(year);
    document.documentElement.style.setProperty('--active-milestone-color', activeColor);

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
        progressBar.style.setProperty('--progress-width', `${percent}%`);
    } else {
        progressBar.style.display = 'none';
    }
}


// ==========================================
// 6. TAB 2: SOLUTIONS MINDMAP & ACCORDION CONTROL
// ==========================================

function drawMindmapLines() {
    const viewport = document.querySelector('.mindmap-viewport');
    if (!viewport) return;
    const svg = document.getElementById('mindmap-lines');
    if (!svg) return;
    svg.innerHTML = '';

    const activeNode = document.querySelector('.radar-node.active');
    const centerNode = document.getElementById('node-center');
    if (!activeNode || !centerNode) return;

    const gridContainer = document.querySelector('.radar-grid') || viewport;
    const containerRect = gridContainer.getBoundingClientRect();
    const centerRect = centerNode.getBoundingClientRect();
    const activeRect = activeNode.getBoundingClientRect();

    // Get center coordinates of Center Node relative to gridContainer
    const cx = centerRect.left - containerRect.left + centerRect.width / 2;
    const cy = centerRect.top - containerRect.top + centerRect.height / 2;

    // Get center coordinates of Active Branch Node relative to gridContainer
    const ax = activeRect.left - containerRect.left + activeRect.width / 2;
    const ay = activeRect.top - containerRect.top + activeRect.height / 2;

    // Get active branch theme color for laser
    const branchName = activeNode.getAttribute('data-branch');
    const branchInfo = solutionsData[branchName];
    const laserColor = branchInfo ? (branchInfo.accent || 'var(--primary)') : 'var(--primary)';

    // Create SVG line (laser target lock)
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('class', 'radar-laser-line');
    line.setAttribute('x1', cx);
    line.setAttribute('y1', cy);
    line.setAttribute('x2', ax);
    line.setAttribute('y2', ay);
    line.style.setProperty('--laser-color', laserColor);
    line.style.stroke = laserColor;
    
    svg.appendChild(line);
}

function setKeywordCurveHighlight(branchName, keywordIndex, shouldHighlight) {
    // No curves in Radar Layout
}


let activeSolutionBranch = null;
let activeSolutionKeywordIndex = 0;

function setActiveAccordionItem(index) {
    document.querySelectorAll('.accordion-item').forEach((el, itemIndex) => {
        const content = el.querySelector('.accordion-content');
        const isActive = itemIndex === index;
        el.classList.toggle('active-item', isActive);
        if (content) {
            content.style.maxHeight = isActive ? `${content.scrollHeight + 24}px` : '0';
        }
    });
}

function ensureSolutionNavControls() {
    const contentArea = document.getElementById('solution-content-area');
    if (!contentArea || document.getElementById('solution-step-controls')) return;

    const controls = document.createElement('div');
    controls.id = 'solution-step-controls';
    controls.className = 'solution-step-controls';
    controls.innerHTML = `
        <button type="button" id="solution-prev-btn"><i class="fa-solid fa-arrow-left"></i> Trước</button>
        <span id="solution-step-indicator">1/1</span>
        <button type="button" id="solution-next-btn">Sau <i class="fa-solid fa-arrow-right"></i></button>
    `;
    contentArea.appendChild(controls);

    controls.querySelector('#solution-prev-btn').addEventListener('click', () => navigateSolutionKeyword(-1));
    controls.querySelector('#solution-next-btn').addEventListener('click', () => navigateSolutionKeyword(1));
}

function updateSolutionNavControls() {
    const branchInfo = solutionsData[activeSolutionBranch];
    const total = branchInfo?.items?.length || 0;
    const indicator = document.getElementById('solution-step-indicator');
    if (indicator && total) {
        indicator.textContent = `${activeSolutionKeywordIndex + 1}/${total}`;
    }
}

function navigateSolutionKeyword(direction) {
    const branchInfo = solutionsData[activeSolutionBranch];
    const total = branchInfo?.items?.length || 0;
    if (!branchInfo || !total) return;
    const nextIndex = (activeSolutionKeywordIndex + direction + total) % total;
    handleKeywordClick(activeSolutionBranch, nextIndex);
}

function initAccordion(accordionData, activeIndex = 0) {
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

        triggerBtn.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();

            const branchName = activeSolutionBranch;
            if (branchName) {
                handleKeywordClick(branchName, index);
            } else {
                setActiveAccordionItem(index);
            }
        });

        itemDiv.appendChild(triggerBtn);
        itemDiv.appendChild(contentDiv);
        accordionContainer.appendChild(itemDiv);
    });

    requestAnimationFrame(() => setActiveAccordionItem(activeIndex));
}

function handleBranchClick(branchName, keywordIndex = 0) {
    activeSolutionBranch = branchName;
    activeSolutionKeywordIndex = keywordIndex;
    
    document.querySelectorAll('.radar-node').forEach(n => {
        n.classList.remove('active');
    });
    document.querySelectorAll('.keyword-node').forEach(keyword => {
        keyword.classList.remove('active-keyword');
    });
    document.querySelectorAll('.keyword-detail-popover').forEach(detail => detail.remove());

    const clickedNode = document.getElementById(`node-${branchName}`);
    if (clickedNode) {
        clickedNode.classList.add('active');
    }

    const branchInfo = solutionsData[branchName];
    if (!branchInfo) return;

    document.getElementById('solution-title').textContent = branchInfo.title;
    document.getElementById('solution-subtitle').textContent = branchInfo.subtitle;
    
    const iconBox = document.getElementById('solution-header-icon-box');
    const iconEl = document.getElementById('solution-header-icon');
    
    if (iconBox && iconEl) {
        iconBox.className = 'detail-header-icon';
        iconEl.className = branchInfo.icon;
        
        iconBox.style.boxShadow = '0 0 14px rgba(255, 255, 255, 0.08)';
        iconBox.style.borderColor = branchInfo.accent || 'var(--primary)';
        iconBox.style.color = branchInfo.accent || 'var(--primary)';
    }

    const keywordHtml = (branchInfo.keywords || [])
        .map(keyword => `<span>${keyword}</span>`)
        .join('');
    const quoteHtml = branchInfo.quote
        ? `<blockquote class="solution-quote">${branchInfo.quote}</blockquote>`
        : '';
    const extraHtml = branchInfo.extraHtml || '';
        
    const theoryEl = document.getElementById('solution-theory');
    if (theoryEl) {
        theoryEl.innerHTML = `
            <div class="solution-keyword-strip">${keywordHtml}</div>
            <div><i class="fa-solid fa-quote-left" style="opacity:0.25; margin-right:0.5rem;"></i>${branchInfo.theory}</div>
            ${extraHtml}
            ${quoteHtml}
        `;
    }

    initAccordion(branchInfo, keywordIndex);
    ensureSolutionNavControls();
    updateSolutionNavControls();

    const placeholder = document.getElementById('solution-placeholder');
    const contentArea = document.getElementById('solution-content-area');
    if (placeholder && contentArea) {
        placeholder.classList.add('hidden');
        contentArea.classList.remove('hidden');
    }

    if (document.body.classList.contains('mindmap-fullscreen-mode')) {
        renderMindmapFocusPanel(branchName, keywordIndex);
    }

    // Re-draw connection lines (active laser)
    setTimeout(drawMindmapLines, 50);
}

function closeMindmapFocusPanel() {
    const panel = document.querySelector('.mindmap-focus-panel');
    const veil  = document.querySelector('.mindmap-panel-veil');
    if (!panel) return;

    panel.classList.add('closing');
    if (veil) veil.classList.add('closing');

    // Deselect targets when panel closes
    document.querySelectorAll('.radar-node').forEach(n => n.classList.remove('active'));

    setTimeout(() => {
        panel.remove();
        if (veil) veil.remove();
        document.body.classList.remove('has-focus-panel');
        // Clear laser beam
        drawMindmapLines();
    }, 330);
}

function updateMindmapFocusPanelContent(branchName, keywordIndex) {
    const branchInfo = solutionsData[branchName];
    const item = branchInfo?.items?.[keywordIndex];
    const panel = document.querySelector(`.mindmap-focus-panel[data-branch="${branchName}"]`);
    if (!branchInfo || !item || !panel) return false;
    activeSolutionBranch = branchName;
    activeSolutionKeywordIndex = keywordIndex;
    setActiveAccordionItem(keywordIndex);
    updateSolutionNavControls();

    panel.querySelectorAll('.focus-keyword').forEach(button => {
        const isActive = Number(button.dataset.keywordIndex) === keywordIndex;
        button.classList.toggle('active', isActive);
    });

    document.querySelectorAll('.keyword-node').forEach(button => {
        const branchNode = button.closest('.radar-node');
        const isActive = branchNode?.dataset.branch === branchName &&
            Number(button.dataset.keywordIndex) === keywordIndex;
        button.classList.toggle('active-keyword', isActive);
    });

    const contentArea = panel.querySelector('.focus-panel-content-text');
    if (contentArea) {
        contentArea.classList.remove('content-swap');
        void contentArea.offsetWidth;
        contentArea.classList.add('content-swap');
        contentArea.innerHTML = `
            <h5>${item.title}</h5>
            <div class="focus-rich-content">${item.content}</div>
        `;
    }

    setTimeout(drawMindmapLines, 0);
    return true;
}

function renderMindmapFocusPanel(branchName, keywordIndex = 0) {
    const branchInfo = solutionsData[branchName];
    if (!branchInfo) return;

    const existingPanel = document.querySelector(`.mindmap-focus-panel[data-branch="${branchName}"]`);
    if (existingPanel) {
        updateMindmapFocusPanelContent(branchName, keywordIndex);
        return;
    }

    // Remove any existing panel/veil
    document.querySelectorAll('.mindmap-focus-panel, .mindmap-panel-veil').forEach(el => el.remove());

    const safeKeywordIndex = Number.isInteger(keywordIndex) && branchInfo.items[keywordIndex] ? keywordIndex : 0;
    const activeItem = branchInfo.items[safeKeywordIndex];
    activeSolutionBranch = branchName;
    activeSolutionKeywordIndex = safeKeywordIndex;

    document.querySelectorAll('.keyword-node').forEach(button => {
        const branchNode = button.closest('.radar-node');
        const isActive = branchNode?.dataset.branch === branchName &&
            Number(button.dataset.keywordIndex) === safeKeywordIndex;
        button.classList.toggle('active-keyword', isActive);
    });

    // ── Veil: subtle dim behind the panel ────────────────────────
    const veil = document.createElement('div');
    veil.className = 'mindmap-panel-veil';
    veil.addEventListener('click', () => {
        closeMindmapFocusPanel();
    });
    document.body.appendChild(veil);

    // ── Panel ─────────────────────────────────────────────────────
    const panel = document.createElement('div');
    panel.className = 'mindmap-focus-panel';
    panel.dataset.branch = branchName;
    panel.style.setProperty('--focus-accent', branchInfo.accent || 'var(--primary)');
    
    const keywordsHtml = (branchInfo.keywords || []).map((keyword, index) => {
        const isActive = index === safeKeywordIndex;
        return `
            <button class="focus-keyword ${isActive ? 'active' : ''}" data-keyword-index="${index}">
                <span class="focus-keyword-radar-shape"></span>
                <span class="focus-keyword-text">${keyword}</span>
            </button>
        `;
    }).join('');

    panel.innerHTML = `
        <div class="focus-panel-header">
            <div class="focus-panel-icon"><i class="${branchInfo.icon}"></i></div>
            <div>
                <div class="focus-panel-eyebrow">Phương hướng 6.2.3</div>
                <h4>${branchInfo.title}</h4>
                <p>${branchInfo.subtitle}</p>
            </div>
            <button class="focus-panel-close" title="Đóng">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
        <div class="focus-panel-scroll">
            <div class="focus-panel-body">
                <div class="focus-body-label">Từ khóa chính</div>
                <div class="focus-panel-keywords">
                    ${keywordsHtml}
                </div>
                <div class="focus-body-label" style="margin-top: 1.5rem;">Nội dung triển khai</div>
                <div class="focus-panel-content-text">
                    <h5>${activeItem.title}</h5>
                    <div class="focus-rich-content">${activeItem.content}</div>
                </div>
            </div>
        </div>
    `;

    // Close button
    panel.querySelector('.focus-panel-close').addEventListener('click', e => {
        e.stopPropagation();
        closeMindmapFocusPanel();
    });

    // Add listeners to keyword buttons
    panel.querySelectorAll('.focus-keyword').forEach(button => {
        button.addEventListener('click', () => {
            const index = parseInt(button.dataset.keywordIndex);
            handleKeywordClick(branchName, index);
        });
    });

    document.body.appendChild(panel);
    document.body.classList.add('has-focus-panel');
    setTimeout(drawMindmapLines, 0);
}


function handleKeywordClick(branchName, keywordIndex) {
    const branchInfo = solutionsData[branchName];
    const item = branchInfo?.items?.[keywordIndex];
    const node = document.getElementById(`node-${branchName}`);
    if (!branchInfo || !item || !node) return;
    activeSolutionBranch = branchName;
    activeSolutionKeywordIndex = keywordIndex;

    if (document.body.classList.contains('mindmap-fullscreen-mode')) {
        if (updateMindmapFocusPanelContent(branchName, keywordIndex)) {
            return;
        }
        handleBranchClick(branchName, keywordIndex);
        renderMindmapFocusPanel(branchName, keywordIndex);
        return;
    }

    handleBranchClick(branchName, keywordIndex);

    document.querySelectorAll('.keyword-node').forEach(keyword => {
        keyword.classList.remove('active-keyword');
    });

    const keywordButton = node.querySelector(`.keyword-node[data-keyword-index="${keywordIndex}"]`);
    if (keywordButton) {
        keywordButton.classList.add('active-keyword');
    }
    setActiveAccordionItem(keywordIndex);
    updateSolutionNavControls();
    setTimeout(drawMindmapLines, 0);

    document.querySelectorAll('.keyword-detail-popover').forEach(detail => detail.remove());

    const keywordWrap = node.querySelector('.node-keywords');
    const viewport = document.querySelector('.mindmap-viewport');
    if (!keywordWrap || !viewport) return;

    const detail = document.createElement('div');
    detail.className = 'keyword-detail-popover';
    detail.style.color = branchInfo.accent || 'var(--primary)';
    detail.innerHTML = `
        <button class="keyword-detail-close" title="Đóng nội dung"><i class="fa-solid fa-xmark"></i></button>
        <div class="keyword-detail-label">${branchInfo.title}</div>
        <h5>${item.title}</h5>
        <p>${item.content}</p>
    `;

    detail.querySelector('.keyword-detail-close').addEventListener('click', event => {
        event.stopPropagation();
        detail.remove();
        keywordButton?.classList.remove('active-keyword');
    });

    if (document.body.classList.contains('mindmap-fullscreen-mode')) {
        viewport.appendChild(detail);
    } else {
        keywordWrap.appendChild(detail);
    }
}

function toggleMindmapFullscreen(forceState = null) {
    const nextState = forceState === null
        ? !document.body.classList.contains('mindmap-fullscreen-mode')
        : forceState;

    // Clean up panel when exiting fullscreen
    if (!nextState) {
        document.querySelectorAll('.mindmap-focus-panel, .mindmap-panel-veil').forEach(el => el.remove());
        document.body.classList.remove('has-focus-panel');
    }

    document.body.classList.toggle('mindmap-fullscreen-mode', nextState);

    const btn = document.getElementById('btn-toggle-mindmap-fullscreen');
    if (btn) {
        btn.innerHTML = nextState
            ? `<i class="fa-solid fa-compress"></i> Thu nhỏ`
            : `<i class="fa-solid fa-expand"></i> Trình chiếu`;
        btn.classList.toggle('active', nextState);
    }

    setTimeout(() => {
        drawMindmapLines();
        if (nextState && !document.querySelector('.radar-node.active')) {
            handleBranchClick('awareness');
        }
    }, 120);
}

function openImageLightbox() {
    const sourceImg = document.getElementById('sidebar-illustration-img');
    const sourceCaption = document.getElementById('sidebar-illustration-caption');
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('image-lightbox-img');
    const lightboxCaption = document.getElementById('image-lightbox-caption');

    if (!sourceImg || !lightbox || !lightboxImg || !lightboxCaption) return;

    lightboxImg.src = sourceImg.src;
    lightboxImg.alt = sourceImg.alt;
    lightboxCaption.textContent = sourceCaption?.textContent || sourceImg.alt;
    lightbox.classList.remove('hidden');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('image-lightbox-open');
}

function closeImageLightbox() {
    const lightbox = document.getElementById('image-lightbox');
    if (!lightbox) return;
    lightbox.classList.add('hidden');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('image-lightbox-open');
}

function syncMindmapStaticLabels() {
    const infoTitle = document.querySelector('.mindmap-info h3');
    const infoDesc = document.querySelector('.mindmap-info p');
    const presentBtn = document.getElementById('btn-toggle-mindmap-fullscreen');
    const root = document.querySelector('#node-center .node-content');
    const footerTip = document.querySelector('.mindmap-footer-tip');
    const detailTitle = document.getElementById('solution-title');
    const detailSubtitle = document.getElementById('solution-subtitle');
    const placeholderTitle = document.querySelector('#solution-placeholder h4');
    const placeholderText = document.querySelector('#solution-placeholder p');
    const subTitle = document.querySelector('.sub-solutions-title');

    if (infoTitle) infoTitle.innerHTML = '<i class="fa-solid fa-diagram-project"></i> Sơ đồ tư duy 6.2.3';
    if (infoDesc) infoDesc.textContent = '6 phương hướng nâng cao hiệu quả hội nhập kinh tế quốc tế của Việt Nam:';
    if (presentBtn && !document.body.classList.contains('mindmap-fullscreen-mode')) {
        presentBtn.innerHTML = '<i class="fa-solid fa-expand"></i> Trình chiếu';
        presentBtn.title = 'Trình chiếu toàn màn hình';
    }
    if (root) root.innerHTML = '<h4>HỘI NHẬP KINH TẾ</h4><p>Nâng cao hiệu quả</p>';
    if (footerTip) footerTip.innerHTML = '<i class="fa-solid fa-circle-info"></i> Bấm vào từng nhánh hoặc từ khóa để xem nội dung chi tiết và trình bày theo từng bước.';
    if (detailTitle) detailTitle.textContent = 'Chọn một phương hướng';
    if (detailSubtitle) detailSubtitle.textContent = 'Chi tiết nội dung 6.2.3';
    if (placeholderTitle) placeholderTitle.textContent = 'Khám phá sơ đồ tư duy';
    if (placeholderText) placeholderText.textContent = 'Chọn một nhánh trong sơ đồ để xem luận điểm, từ khóa và ý triển khai trọng tâm.';
    if (subTitle) subTitle.innerHTML = '<i class="fa-solid fa-list-check"></i> Ý triển khai trọng tâm:';

    const compactTitles = {
        awareness: ['Nhận thức', 'Thời cơ & thách thức'],
        strategy: ['Chiến lược', 'Lộ trình phù hợp'],
        commitment: ['Liên kết', 'Thực hiện cam kết'],
        institution: ['Thể chế', 'Luật pháp & môi trường'],
        competitiveness: ['Năng lực cạnh tranh', 'Doanh nghiệp & Nhà nước'],
        autonomy: ['Tự chủ', 'Độc lập & hội nhập']
    };

    Object.entries(compactTitles).forEach(([branch, labels]) => {
        const node = document.getElementById(`node-${branch}`);
        const branchInfo = solutionsData[branch];
        if (!node || !branchInfo) return;

        const title = node.querySelector('.node-content h4');
        const subtitle = node.querySelector('.node-content p');
        if (title) title.textContent = labels[0];
        if (subtitle) subtitle.textContent = labels[1];

        node.querySelectorAll('.keyword-node').forEach((button, index) => {
            if (branchInfo.keywords?.[index]) button.textContent = branchInfo.keywords[index];
        });
    });
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
    document.querySelectorAll('.radar-node').forEach(branch => {
        branch.addEventListener('click', () => {
            const branchName = branch.getAttribute('data-branch');
            handleBranchClick(branchName);
        });
    });

    document.querySelectorAll('.keyword-node').forEach(keyword => {
        keyword.addEventListener('click', event => {
            event.stopPropagation();
            const branchNode = keyword.closest('.radar-node');
            const branchName = branchNode?.getAttribute('data-branch');
            const keywordIndex = Number(keyword.getAttribute('data-keyword-index'));
            handleKeywordClick(branchName, keywordIndex);
        });
    });

    const mindmapFullscreenBtn = document.getElementById('btn-toggle-mindmap-fullscreen');
    if (mindmapFullscreenBtn) {
        mindmapFullscreenBtn.addEventListener('click', () => {
            toggleMindmapFullscreen();
        });
    }

    const illustration = document.getElementById('sidebar-illustration');
    const illustrationZoomBtn = document.getElementById('illustration-zoom-btn');
    const lightboxClose = document.getElementById('image-lightbox-close');
    const lightboxBackdrop = document.getElementById('image-lightbox-backdrop');

    if (illustration) {
        illustration.setAttribute('tabindex', '0');
        illustration.setAttribute('role', 'button');
        illustration.setAttribute('aria-label', 'Xem ảnh minh họa chi tiết');
        illustration.addEventListener('click', () => openImageLightbox());
        illustration.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openImageLightbox();
            }
        });
    }

    if (illustrationZoomBtn) {
        illustrationZoomBtn.addEventListener('click', event => {
            event.stopPropagation();
            openImageLightbox();
        });
    }

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeImageLightbox);
    }

    if (lightboxBackdrop) {
        lightboxBackdrop.addEventListener('click', closeImageLightbox);
    }

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

    // Click outside viewport deselects branch and closes popovers
    document.addEventListener('click', (event) => {
        const solutionsTab = document.getElementById('tab-solutions');
        if (!solutionsTab || !solutionsTab.classList.contains('active-content')) return;
        if (!event.target.isConnected) return;

        const isBranch = event.target.closest('.radar-node');
        const isKeyword = event.target.closest('.keyword-node') || event.target.closest('.focus-keyword');
        const isPopover = event.target.closest('.keyword-detail-popover');
        const isPresentBtn = event.target.closest('.mindmap-present-btn') || event.target.closest('#btn-toggle-mindmap-fullscreen');
        const isDetailPanel = event.target.closest('.solutions-detail-panel') || event.target.closest('.mindmap-focus-panel');
        const isCenterNode = event.target.closest('.radar-root');
        const isVeil = event.target.closest('.mindmap-panel-veil');

        if (!isBranch && !isKeyword && !isPopover && !isPresentBtn && !isDetailPanel && !isCenterNode && !isVeil) {
            document.querySelectorAll('.radar-node').forEach(n => n.classList.remove('active'));
            document.querySelectorAll('.map-line').forEach(line => line.classList.remove('active-line'));
            document.querySelectorAll('.keyword-node').forEach(k => k.classList.remove('active-keyword'));
            document.querySelectorAll('.keyword-detail-popover').forEach(detail => detail.remove());
            
            if (document.body.classList.contains('mindmap-fullscreen-mode')) {
                closeMindmapFocusPanel();
            } else {
                const placeholder = document.getElementById('solution-placeholder');
                const contentArea = document.getElementById('solution-content-area');
                if (placeholder && contentArea) {
                    placeholder.classList.remove('hidden');
                    contentArea.classList.add('hidden');
                }
            }
            
            drawMindmapLines();
        }
    });

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
    syncMindmapStaticLabels();
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
const milestoneYears = ['1986', '1995', '1998', '2001', '2007', '2019', '2020', '2022', '2025', 'all'];

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
