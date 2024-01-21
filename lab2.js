var y = ["Thứ Hai","Thứ Ba","Thứ Tư","Thứ 5","Thứ 6","Thứ 7","Chủ Nhật"];
var x = 10;
switch (x) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        console.log('Ngày của tuần theo chỉ mục : '+y[x]);
        break;
    default:
        console.log('Không có ngày nào(chỉ mục hợp lệ 0-6 )');
        break;
}