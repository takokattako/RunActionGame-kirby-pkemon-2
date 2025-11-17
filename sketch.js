let x;
let y;
let r;
let vx;
let vy;
let g;
let e; //ボールの反発係数
let μ; //床との摩擦係数

function setup() {
    createCanvas(400, 400);
    x = 0;
    y = 0;
    r = 20;
    vx = 4;
    vy = 2;
    g = 1;
    e = 0.9;
    μ = 0.99;
}

function draw() {
    background(220);
    //ボールのｘ速度
    x = x + vx;

    //ボールのｙ速度
    vy = vy + g ;
    y = y + vy;

    // 右壁との衝突判定
    if (x > width - r) {
        x = width - r;
        vx = -vx;
    }
    // 左壁との衝突判定
    if (x < r) {
        x = r;
        vx = -vx;
    }
    // 床との衝突判定
    if (y > height - r) {
        y = height - r;
        vy = -vy * e;
        vx = vx * μ; //減速（摩擦力）
    };
    circle(x, y, r * 2);
}
