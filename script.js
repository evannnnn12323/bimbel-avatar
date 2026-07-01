// ====================================================
//         1. CONSTANTS & DATABASE INITIALIZER
// ====================================================

// Mock Database Structure
const DEFAULT_DB = {
    classes: ["Kelas 9", "Kelas 10 MIPA", "Kelas 11 MIPA", "Kelas 12 MIPA"],
    subjects: ["Matematika Kelas 9", "Matematika", "Fisika", "Kimia", "Biologi", "Bahasa Inggris", "Bahasa Indonesia"],
    materi: [], // Admin will add materials manually
    schedules: [
        { id: "sch-1", dayTime: "Senin, 14:00 - 15:30", subject: "Matematika", room: "Ruang Avatar 1" },
        { id: "sch-2", dayTime: "Rabu, 16:00 - 17:30", subject: "Fisika", room: "Ruang Avatar 2" },
        { id: "sch-3", dayTime: "Jumat, 14:00 - 15:30", subject: "Kimia", room: "Link Zoom Online" }
    ],
    announcements: [
        { id: "ann-1", date: "2026-06-30", content: "Pendaftaran Try Out Akbar UTBK Mandiri Semester Ganjil Resmi Dibuka!" },
        { id: "ann-2", date: "2026-06-25", content: "Libur semester telah selesai. Seluruh kelas bimbingan aktif kembali per tanggal 1 Juli 2026." }
    ],
    questions: [
        {
            id: "q-1",
            category: "Latihan",
            subject: "Matematika",
            type: "PG",
            text: "Berapakah turunan pertama dari fungsi f(x) = 3x^2 + 5x - 7?",
            options: ["6x", "6x + 5", "3x + 5", "6x - 7"],
            answer: "B",
            explanation: "Menggunakan aturan turunan f'(x) = d/dx(3x^2) + d/dx(5x) - d/dx(7) = 3(2x) + 5(1) - 0 = 6x + 5."
        },
        {
            id: "q-2",
            category: "Latihan",
            subject: "Matematika",
            type: "BS",
            text: "Nilai limit dari sin(x)/x saat x mendekati 0 adalah 1.",
            options: ["Benar", "Salah"],
            answer: "A",
            explanation: "Limit sin(x)/x untuk x mendekati 0 merupakan limit trigonometri dasar yang nilainya adalah 1."
        },
        {
            id: "q-3",
            category: "Latihan",
            subject: "Matematika",
            type: "IS",
            text: "Berapakah nilai x yang memenuhi persamaan linear 5x + 3 = 18?",
            options: [],
            answer: "3",
            explanation: "Pindahkan konstanta: 5x = 18 - 3 => 5x = 15. Bagi kedua sisi dengan 5: x = 15 / 5 = 3."
        },
        {
            id: "q-4",
            category: "Latihan",
            subject: "Fisika",
            type: "PG",
            text: "Sebuah mobil bergerak dengan kecepatan tetap sebesar 20 m/s. Jarak yang ditempuh mobil dalam waktu 5 detik adalah...",
            options: ["50 meter", "80 meter", "100 meter", "120 meter"],
            answer: "C",
            explanation: "Jarak (s) = Kecepatan (v) * Waktu (t) = 20 m/s * 5 s = 100 meter."
        },
        {
            id: "q-5",
            category: "TryOut",
            subject: "Try Out UTBK Mandiri",
            type: "PG",
            text: "Manakah penulisan kalimat di bawah ini yang sesuai dengan Ejaan Bahasa Indonesia (EBI)?",
            options: [
                "Kakak membeli jeruk bali di pasar.",
                "Ayah membaca koran Kompas pagi ini.",
                "Ibu pergi berobat ke apotik dekat rumah.",
                "Kami sedang belajar Bahasa Inggris."
            ],
            answer: "A",
            explanation: "A: 'bali' ditulis dengan huruf kecil karena merupakan nama jenis buah, bukan nama geografi asal jeruk. B: Nama koran harusnya miring. C: Harusnya apotek. D: Bahasa Inggris harusnya bahasa Inggris (huruf b kecil)."
        },
        {
            id: "q-6",
            category: "TryOut",
            subject: "Try Out UTBK Mandiri",
            type: "PG",
            text: "Jika log 2 = a dan log 3 = b, berapakah nilai dari log 12?",
            options: ["a + b", "2a + b", "a + 2b", "2a + 2b"],
            answer: "B",
            explanation: "log 12 = log(4 * 3) = log 4 + log 3 = log(2^2) + log 3 = 2 log 2 + log 3 = 2a + b."
        },
        {
            id: "q-7",
            category: "TryOut",
            subject: "Try Out UTBK Mandiri",
            type: "PG",
            text: "Unsur X memiliki nomor atom 11. Konfigurasi elektron unsur X tersebut adalah...",
            options: ["2, 8, 1", "2, 8, 2", "2, 8, 8", "2, 9"],
            answer: "A",
            explanation: "Unsur dengan nomor atom 11 adalah Natrium (Na). Konfigurasi elektron berdasarkan kulit K, L, M adalah K=2, L=8, M=1."
        },
        {
            id: "q-8",
            category: "TryOut",
            subject: "Try Out UTBK Mandiri",
            type: "PG",
            text: "Apakah sel prokariotik memiliki organel bermembran seperti mitokondria?",
            options: ["Benar", "Salah"],
            answer: "B",
            explanation: "Sel prokariotik tidak memiliki organel bermembran ganda atau tunggal seperti mitokondria maupun kloroplas. Sel prokariotik hanya memiliki ribosom."
        },
        {
            id: "q-9",
            category: "TryOut",
            subject: "Try Out UTBK Mandiri",
            type: "IS",
            text: "Berapakah hasil penyederhanaan eksponen dari (2^3 * 2^4) / 2^5 ?",
            options: [],
            answer: "4",
            explanation: "Sesuai hukum eksponen: 2^3 * 2^4 = 2^(3+4) = 2^7. Kemudian dibagi 2^5: 2^7 / 2^5 = 2^(7-5) = 2^2 = 4."
        }
    ],
    tryouts: [
        { id: "to-1", name: "Try Out UTBK Mandiri", duration: 15, questionsCount: 5 },
        { id: "to-2", name: "Ulangan Harian Matematika Kelas 9", duration: 20, questionsCount: 5 }
    ],
    leaderboard: [
        { name: "Adi Wijaya", score: 95 },
        { name: "Budi Santoso", score: 88 },
        { name: "Citra Kirana", score: 80 },
        { name: "Dodi Prasetyo", score: 60 }
    ],
    profile: {
        name: "",
        className: "",
        school: "",
        email: "",
        phone: "",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
        favorites: [],
        completedMateri: [],
        targets: []
    },
    grades: [],
    attendance: [],
    activityLogs: [],
    chats: [],
    mentors: []
};

// Database local persistence helper
let db = {};
function initDatabase() {
    const localData = localStorage.getItem("bimbel_avatar_db_v5");
    if (!localData) {
        db = JSON.parse(JSON.stringify(DEFAULT_DB));
        saveDatabase();
    } else {
        db = JSON.parse(localData);
        // Merge missing fields if structure updates
        for (let key in DEFAULT_DB) {
            if (db[key] === undefined) {
                db[key] = JSON.parse(JSON.stringify(DEFAULT_DB[key]));
            }
        }
        
        // Seeding Matematika Kelas 9 Kurikulum Merdeka if not present
        if (!db.subjects.includes("Matematika Kelas 9")) {
            db.subjects.push("Matematika Kelas 9");
            if (!db.classes.includes("Kelas 9")) {
                db.classes.push("Kelas 9");
            }
            
            // Seed new materials
            const newMaterials = [
                {
                    id: "mat-9-1",
                    title: "Sistem Persamaan Linear Dua Variabel / SPLDV (Semester 1)",
                    subject: "Matematika Kelas 9",
                    className: "Kelas 9",
                    bab: "Bab 1",
                    subbab: "Metode Penyelesaian SPLDV",
                    desc: "Memahami konsep persamaan linear dua variabel dan metode penyelesaian sistem persamaannya.",
                    content: `<h3>A. Pengertian SPLDV</h3><p>Sistem Persamaan Linear Dua Variabel (SPLDV) adalah sekumpulan persamaan linear yang memiliki dua variabel (biasanya x dan y) yang saling berhubungan dan memiliki satu penyelesaian unik. Bentuk umumnya:</p><p><strong>ax + by = c</strong><br><strong>dx + ey = f</strong></p><h3>B. Metode Penyelesaian</h3><ul><li><strong>Metode Eliminasi:</strong> Menghilangkan salah satu variabel dengan menyamakan koefisiennya lalu mengurangkan atau menjumlahkan kedua persamaan.</li><li><strong>Metode Substitusi:</strong> Menyatakan salah satu variabel dalam bentuk variabel lain dari satu persamaan, kemudian memasukkannya ke persamaan lainnya.</li><li><strong>Metode Campuran:</strong> Menggabungkan metode eliminasi untuk mencari nilai variabel pertama dan substitusi untuk variabel kedua.</li><li><strong>Metode Grafik:</strong> Menggambar garis dari kedua persamaan pada koordinat Kartesius. Titik potong kedua garis merupakan penyelesaiannya.</li></ul>`,
                    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    pdfName: "modul-matematika-kalkulus.pdf",
                    status: "Publish"
                },
                {
                    id: "mat-9-2",
                    title: "Persamaan Kuadrat (Semester 1)",
                    subject: "Matematika Kelas 9",
                    className: "Kelas 9",
                    bab: "Bab 2",
                    subbab: "Menentukan Akar-akar Persamaan Kuadrat",
                    desc: "Metode pemfaktoran, melengkapkan kuadrat sempurna, dan rumus ABC untuk menyelesaikan persamaan kuadrat.",
                    content: `<h3>Persamaan Kuadrat</h3><p>Persamaan kuadrat adalah suatu persamaan berderajat dua dengan bentuk umum: <strong>ax^2 + bx + c = 0</strong>, dengan a &ne; 0.</p><h4>Metode Penyelesaian:</h4><ol><li><strong>Pemfaktoran:</strong> Mengubah ax^2 + bx + c = 0 menjadi bentuk perkalian dua faktor linear (x - x1)(x - x2) = 0.</li><li><strong>Rumus ABC:</strong> Menggunakan rumus kuadratik x = (-b &plusmn; &radic;(b^2 - 4ac)) / 2a.</li></ol>`,
                    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    pdfName: "modul-matematika-kalkulus.pdf",
                    status: "Publish"
                },
                {
                    id: "mat-9-3",
                    title: "Kesebangunan dan Kekongruenan (Semester 2)",
                    subject: "Matematika Kelas 9",
                    className: "Kelas 9",
                    bab: "Bab 4",
                    subbab: "Syarat Segitiga Sebangun dan Kongruen",
                    desc: "Mengidentifikasi kekongruenan dan kesebangunan bangun datar khususnya segitiga.",
                    content: `<h3>Kesebangunan vs Kekongruenan</h3><p><strong>Kongruen:</strong> Dua atau lebih bangun datar yang memiliki bentuk dan ukuran yang sama persis (sisi bersesuaian sama panjang, sudut bersesuaian sama besar).</p><p><strong>Sebangun:</strong> Dua atau lebih bangun datar yang memiliki bentuk yang sama, namun ukurannya berbeda dengan perbandingan sisi-sisi yang bersesuaian senilai.</p>`,
                    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    pdfName: "modul-matematika-kalkulus.pdf",
                    status: "Publish"
                },
                {
                    id: "mat-9-4",
                    title: "Bangun Ruang Sisi Lengkung (Semester 2)",
                    subject: "Matematika Kelas 9",
                    className: "Kelas 9",
                    bab: "Bab 5",
                    subbab: "Volume dan Luas Permukaan Tabung",
                    desc: "Menghitung volume dan luas selimut tabung, kerucut, dan bola dalam kehidupan sehari-hari.",
                    content: `<h3>Rumus Tabung, Kerucut, dan Bola</h3><h4>1. Tabung (Cylinder)</h4><ul><li>Volume = &pi; &times; r^2 &times; t</li><li>Luas Permukaan = 2 &pi; r (r + t)</li></ul><h4>2. Kerucut (Cone)</h4><ul><li>Volume = 1/3 &times; &pi; &times; r^2 &times; t</li><li>Luas Permukaan = &pi; r (r + s) di mana s adalah garis pelukis</li></ul><h4>3. Bola (Sphere)</h4><ul><li>Volume = 4/3 &times; &pi; &times; r^3</li><li>Luas Permukaan = 4 &pi; r^2</li></ul>`,
                    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    pdfName: "modul-matematika-kalkulus.pdf",
                    status: "Publish"
                }
            ];
            
            db.materi = db.materi.concat(newMaterials);
            
            // Seed new questions
            const newQuestions = [
                // === LATIHAN MATEMATIKA KELAS 9 (15 SOAL) ===
                {
                    id: "q-m9-1",
                    category: "Latihan",
                    subject: "Matematika Kelas 9",
                    type: "PG",
                    text: "Tentukan nilai x yang memenuhi sistem persamaan linear x + y = 5 dan x - y = 1.",
                    options: ["2", "3", "4", "5"],
                    answer: "B",
                    explanation: "Jumlahkan kedua persamaan: (x + y) + (x - y) = 5 + 1 => 2x = 6 => x = 3. Jadi, nilai x yang memenuhi adalah 3."
                },
                {
                    id: "q-m9-2",
                    category: "Latihan",
                    subject: "Matematika Kelas 9",
                    type: "PG",
                    text: "Harga 2 buku dan 3 pensil adalah Rp 12.000, sedangkan harga 1 buku dan 2 pensil adalah Rp 7.000. Berapakah harga 1 buku?",
                    options: ["Rp 2.000", "Rp 3.000", "Rp 4.000", "Rp 5.000"],
                    answer: "B",
                    explanation: "Misalkan buku = x dan pensil = y. Persamaannya: (1) 2x + 3y = 12.000, (2) x + 2y = 7.000. Dari (2) didapat x = 7.000 - 2y. Substitusikan ke (1): 2(7.000 - 2y) + 3y = 12.000 => 14.000 - 4y + 3y = 12.000 => -y = -2.000 => y = 2.000. Maka x = 7.000 - 2(2.000) = 3.000. Harga 1 buku adalah Rp 3.000."
                },
                {
                    id: "q-m9-3",
                    category: "Latihan",
                    subject: "Matematika Kelas 9",
                    type: "PG",
                    text: "Jika akar-akar persamaan kuadrat x^2 - 7x + 10 = 0 adalah x1 dan x2, tentukan nilai dari x1 + x2.",
                    options: ["-7", "-10", "7", "10"],
                    answer: "C",
                    explanation: "Pada persamaan ax^2 + bx + c = 0, jumlah akar-akar x1 + x2 = -b/a. Untuk x^2 - 7x + 10 = 0, a=1, b=-7. Maka x1 + x2 = -(-7)/1 = 7."
                },
                {
                    id: "q-m9-4",
                    category: "Latihan",
                    subject: "Matematika Kelas 9",
                    type: "PG",
                    text: "Titik potong grafik fungsi kuadrat y = x^2 - 4x - 5 dengan sumbu Y adalah...",
                    options: ["(0, -5)", "(0, 5)", "(-5, 0)", "(5, 0)"],
                    answer: "A",
                    explanation: "Grafik memotong sumbu Y ketika x = 0. Substitusikan x = 0 ke fungsi: y = 0^2 - 4(0) - 5 = -5. Koordinatnya adalah (0, -5)."
                },
                {
                    id: "q-m9-5",
                    category: "Latihan",
                    subject: "Matematika Kelas 9",
                    type: "BS",
                    text: "Grafik fungsi kuadrat f(x) = -x^2 + 6x - 9 memiliki kurva yang terbuka ke atas.",
                    options: ["Benar", "Salah"],
                    answer: "B",
                    explanation: "Karena koefisien a dari x^2 bernilai negatif (a = -1 < 0), kurva terbuka ke bawah (memiliki titik balik maksimum), bukan ke atas."
                },
                {
                    id: "q-m9-6",
                    category: "Latihan",
                    subject: "Matematika Kelas 9",
                    type: "PG",
                    text: "Titik A(3, -5) ditranslasikan oleh T(2, 4). Koordinat bayangan titik A adalah...",
                    options: ["A'(5, -1)", "A'(5, -9)", "A'(1, -1)", "A'(1, -9)"],
                    answer: "A",
                    explanation: "Bayangan hasil translasi: A'(x+a, y+b) = A'(3+2, -5+4) = A'(5, -1)."
                },
                {
                    id: "q-m9-7",
                    category: "Latihan",
                    subject: "Matematika Kelas 9",
                    type: "PG",
                    text: "Jika titik P(-4, 2) dicerminkan (refleksi) terhadap garis y = x, koordinat bayangannya adalah...",
                    options: ["P'(-4, -2)", "P'(4, 2)", "P'(2, -4)", "P'(-2, 4)"],
                    answer: "C",
                    explanation: "Rumus refleksi terhadap garis y = x adalah (x, y) menjadi (y, x). Jadi, bayangan dari P(-4, 2) adalah P'(2, -4)."
                },
                {
                    id: "q-m9-8",
                    category: "Latihan",
                    subject: "Matematika Kelas 9",
                    type: "IS",
                    text: "Sebuah titik B(2, 3) didilatasikan dengan pusat O(0,0) dan faktor skala k = -3. Berapakah koordinat sumbu X dari bayangan titik B tersebut?",
                    options: [],
                    answer: "-6",
                    explanation: "Dilatasi dengan pusat O(0,0) rumusnya B'(kx, ky). Dengan k = -3, maka B'(-3 * 2, -3 * 3) = B'(-6, -9). Koordinat X adalah -6."
                },
                {
                    id: "q-m9-9",
                    category: "Latihan",
                    subject: "Matematika Kelas 9",
                    type: "PG",
                    text: "Sebuah foto ditempelkan pada karton 30 cm x 40 cm. Sisa karton sebelah kiri, kanan, atas adalah 3 cm. Jika foto dan karton sebangun, sisa karton bagian bawah adalah...",
                    options: ["3 cm", "4 cm", "5 cm", "6 cm"],
                    answer: "C",
                    explanation: "Lebar foto = 30 - 3 - 3 = 24. Karena sebangun: Lebar Foto / Lebar Karton = Tinggi Foto / Tinggi Karton => 24/30 = Tinggi Foto/40 => Tinggi Foto = 32 cm. Sisa karton bawah = 40 - 32 - 3 = 5 cm."
                },
                {
                    id: "q-m9-10",
                    category: "Latihan",
                    subject: "Matematika Kelas 9",
                    type: "BS",
                    text: "Dua buah persegi panjang dengan ukuran berbeda selalu sebangun.",
                    options: ["Benar", "Salah"],
                    answer: "B",
                    explanation: "Dua persegi panjang belum tentu sebangun karena perbandingan sisi-sisi bersesuaian belum tentu senilai. Contoh: ukuran 2x3 tidak sebangun dengan 2x4."
                },
                {
                    id: "q-m9-11",
                    category: "Latihan",
                    subject: "Matematika Kelas 9",
                    type: "PG",
                    text: "Berapakah luas permukaan sebuah bola (dalam cm2) yang memiliki jari-jari 10 cm? (Gunakan pi = 3.14)",
                    options: ["314", "628", "1256", "3140"],
                    answer: "C",
                    explanation: "Luas Permukaan Bola = 4 * pi * r^2 = 4 * 3.14 * 10^2 = 4 * 314 = 1256 cm2."
                },
                {
                    id: "q-m9-12",
                    category: "Latihan",
                    subject: "Matematika Kelas 9",
                    type: "IS",
                    text: "Sebuah kerucut memiliki jari-jari alas 6 cm dan tinggi 8 cm. Berapakah panjang garis pelukis (s) kerucut tersebut dalam cm?",
                    options: [],
                    answer: "10",
                    explanation: "Panjang garis pelukis s = √(r^2 + t^2) = √(6^2 + 8^2) = √(36 + 64) = √100 = 10 cm."
                },
                {
                    id: "q-m9-13",
                    category: "Latihan",
                    subject: "Matematika Kelas 9",
                    type: "PG",
                    text: "Data nilai matematika sekelompok siswa: 7, 8, 6, 8, 9, 7, 8, 9. Rata-rata (mean) dari data tersebut adalah...",
                    options: ["7.50", "7.75", "8.00", "8.25"],
                    answer: "B",
                    explanation: "Jumlah data = 7+8+6+8+9+7+8+9 = 62. Banyak data = 8. Rata-rata = 62 / 8 = 7.75."
                },
                {
                    id: "q-m9-14",
                    category: "Latihan",
                    subject: "Matematika Kelas 9",
                    type: "PG",
                    text: "Dua dadu dilambungkan bersama satu kali. Peluang munculnya mata dadu berjumlah 8 adalah...",
                    options: ["3/36", "4/36", "5/36", "6/36"],
                    answer: "C",
                    explanation: "Semesta n(S) = 36. Kejadian berjumlah 8: {(2,6), (3,5), (4,4), (5,3), (6,2)} => n(A) = 5. Peluang = 5/36."
                },
                {
                    id: "q-m9-15",
                    category: "Latihan",
                    subject: "Matematika Kelas 9",
                    type: "BS",
                    text: "Median dari data terurut: 4, 5, 5, 6, 7, 8, 9 adalah 6.",
                    options: ["Benar", "Salah"],
                    answer: "A",
                    explanation: "Data terurut memiliki banyak data ganjil (n=7). Nilai tengah berada pada data ke-4, yaitu 6. Pernyataan tersebut BENAR."
                },
                
                // === ULANGAN HARIAN TIMED EXAMS (5 SOAL) ===
                {
                    id: "q-m9-to1",
                    category: "TryOut",
                    subject: "Ulangan Harian Matematika Kelas 9",
                    type: "PG",
                    text: "Himpunan penyelesaian dari sistem persamaan linear 2x - y = 4 dan x + y = 5 adalah...",
                    options: ["{(3, 2)}", "{(2, 3)}", "{(4, 1)}", "{(1, 4)}"],
                    answer: "A",
                    explanation: "Jumlahkan kedua persamaan: (2x - y) + (x + y) = 4 + 5 => 3x = 9 => x = 3. Substitusikan x = 3 ke persamaan kedua: 3 + y = 5 => y = 2. Jadi, himpunan penyelesaiannya adalah {(3, 2)}."
                },
                {
                    id: "q-m9-to2",
                    category: "TryOut",
                    subject: "Ulangan Harian Matematika Kelas 9",
                    type: "PG",
                    text: "Akar-akar dari persamaan kuadrat x^2 - 5x + 6 = 0 adalah...",
                    options: ["2 dan 3", "-2 dan -3", "1 dan 6", "-1 dan -6"],
                    answer: "A",
                    explanation: "Faktorkan persamaan: x^2 - 5x + 6 = (x - 2)(x - 3) = 0. Jadi, x = 2 atau x = 3."
                },
                {
                    id: "q-m9-to3",
                    category: "TryOut",
                    subject: "Ulangan Harian Matematika Kelas 9",
                    type: "PG",
                    text: "Dua segitiga dikatakan kongruen (sama dan sebangun) jika memenuhi syarat berikut...",
                    options: [
                        "Sudut-sudut bersesuaian sama besar saja",
                        "Sisi-sisi bersesuaian sama panjang & sudut bersesuaian sama besar",
                        "Perbandingan panjang sisi bersesuaian sama",
                        "Luas wilayahnya sama walaupun bentuknya berbeda"
                    ],
                    answer: "B",
                    explanation: "Dua bangun dikatakan kongruen jika memiliki bentuk dan ukuran yang sama. Syaratnya adalah sisi bersesuaian sama panjang dan sudut bersesuaian sama besar."
                },
                {
                    id: "q-m9-to4",
                    category: "TryOut",
                    subject: "Ulangan Harian Matematika Kelas 9",
                    type: "PG",
                    text: "Apakah rumus luas selimut kerucut adalah L = pi × r × s?",
                    options: ["Benar", "Salah"],
                    answer: "A",
                    explanation: "Luas selimut kerucut dirumuskan dengan L = pi × r × s, di mana r adalah jari-jari alas dan s adalah garis pelukis kerucut."
                },
                {
                    id: "q-m9-to5",
                    category: "TryOut",
                    subject: "Ulangan Harian Matematika Kelas 9",
                    type: "IS",
                    text: "Berapakah volume sebuah kerucut (dalam cm3) jika memiliki tinggi kerucut 12 cm dan jari-jari alasnya 7 cm? (Gunakan pi = 22/7)",
                    options: [],
                    answer: "616",
                    explanation: "Volume kerucut = 1/3 \u00d7 pi \u00d7 r^2 \u00d7 t = 1/3 \u00d7 (22/7) \u00d7 7 \u00d7 7 \u00d7 12 = 1/3 \u00d7 154 \u00d7 12 = 154 \u00d7 4 = 616 cm3."
                }
            ];
            
            db.questions = db.questions.concat(newQuestions);
            
            // Seed tryout
            db.tryouts.push({
                id: "to-2",
                name: "Ulangan Harian Matematika Kelas 9",
                duration: 20,
                questionsCount: 5
            });
        }
        
        saveDatabase();
    }
}

function saveDatabase() {
    localStorage.setItem("bimbel_avatar_db_v5", JSON.stringify(db));
}


// ====================================================
//         2. SYSTEM SETUP (THEMING & UTILS)
// ====================================================

// Loading Screen
window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loading-screen");
        loader.style.opacity = 0;
        setTimeout(() => loader.style.display = "none", 500);
    }, 800);
});

// Toast Notifications
function showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    
    let iconClass = "fa-info-circle";
    if (type === "success") iconClass = "fa-check-circle";
    if (type === "warning") iconClass = "fa-exclamation-triangle";
    if (type === "danger") iconClass = "fa-exclamation-circle";
    
    toast.innerHTML = `
        <i class="fa-solid ${iconClass} toast-icon"></i>
        <span>${message}</span>
    `;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = 0;
        toast.style.transform = "translateY(20px)";
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Dark/Light Mode Management
function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    
    const icon = document.getElementById("theme-icon");
    if (newTheme === "dark") {
        icon.className = "fa-solid fa-sun";
    } else {
        icon.className = "fa-solid fa-moon";
    }
}

function initTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    const icon = document.getElementById("theme-icon");
    if (savedTheme === "dark") {
        icon.className = "fa-solid fa-sun";
    } else {
        icon.className = "fa-solid fa-moon";
    }
}

// Log activity wrapper
function logActivity(name, activity, details) {
    const now = new Date();
    const formattedTime = now.getFullYear() + "-" + 
        String(now.getMonth() + 1).padStart(2, '0') + "-" + 
        String(now.getDate()).padStart(2, '0') + " " + 
        String(now.getHours()).padStart(2, '0') + ":" + 
        String(now.getMinutes()).padStart(2, '0');
    
    db.activityLogs.unshift({
        time: formattedTime,
        name: name,
        activity: activity,
        details: details
    });
    
    if (db.activityLogs.length > 50) db.activityLogs.pop(); // Keep only 50 logs
    saveDatabase();
}

// Countdown timer
let countdownInterval;
function startCountdown() {
    const countdownDays = document.getElementById("countdown-days");
    const countdownHours = document.getElementById("countdown-hours");
    const countdownMins = document.getElementById("countdown-mins");
    
    if (!countdownDays) return;
    
    // Set target: 120 days from current date
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 120);
    
    function updateTimer() {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;
        
        if (distance < 0) {
            clearInterval(countdownInterval);
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        countdownDays.innerText = String(days).padStart(2, '0');
        countdownHours.innerText = String(hours).padStart(2, '0');
        countdownMins.innerText = String(minutes).padStart(2, '0');
    }
    
    clearInterval(countdownInterval);
    updateTimer();
    countdownInterval = setInterval(updateTimer, 60000);
}

// Chart.js Global Config / References
let adminNilaiChart = null;
let adminAttendanceChart = null;
let progressDoughnut = null;
let siswaNilaiChart = null;

// Render Admin Charts
function renderAdminCharts() {
    const nilaiCtx = document.getElementById("admin-nilai-chart");
    const attendanceCtx = document.getElementById("admin-attendance-chart");
    
    if (!nilaiCtx || !attendanceCtx) return;
    
    // Nilai Chart
    const recentGrades = db.grades.slice(-6);
    const labels = recentGrades.map(g => g.quizType.replace("Latihan ", ""));
    const scores = recentGrades.map(g => g.score);
    
    if (adminNilaiChart) adminNilaiChart.destroy();
    adminNilaiChart = new Chart(nilaiCtx, {
        type: 'bar',
        data: {
            labels: labels.length ? labels : ["Fisika", "Matematika", "Kimia"],
            datasets: [{
                label: 'Skor Latihan',
                data: scores.length ? scores : [100, 85, 0],
                backgroundColor: 'rgba(99, 102, 241, 0.7)',
                borderColor: 'rgba(99, 102, 241, 1)',
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { min: 0, max: 100 }
            }
        }
    });
    
    // Attendance Ratio Chart
    const checkins = db.attendance.length;
    const absents = Math.max(0, 10 - checkins); // dummy calculation
    
    if (adminAttendanceChart) adminAttendanceChart.destroy();
    adminAttendanceChart = new Chart(attendanceCtx, {
        type: 'doughnut',
        data: {
            labels: ['Hadir', 'Tidak Hadir'],
            datasets: [{
                data: [checkins || 2, absents || 8],
                backgroundColor: ['#10b981', '#ef4444'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Render Student Charts
function renderStudentCharts() {
    const progressCtx = document.getElementById("siswa-progress-doughnut");
    const gradesCtx = document.getElementById("siswa-nilai-chart");
    
    if (!progressCtx || !gradesCtx) return;
    
    // Progress Doughnut
    const totalMateriCount = db.materi.filter(m => m.status === "Publish").length;
    const completedCount = db.profile.completedMateri.length;
    const completedPercentage = totalMateriCount > 0 ? Math.round((completedCount / totalMateriCount) * 100) : 0;
    
    document.getElementById("progress-percentage-text").innerText = `${completedPercentage}%`;
    document.getElementById("progress-materi-completed").innerText = `${completedCount} dari ${totalMateriCount} materi selesai dibaca`;
    
    if (progressDoughnut) progressDoughnut.destroy();
    progressDoughnut = new Chart(progressCtx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [completedPercentage, 100 - completedPercentage],
                backgroundColor: ['#6366f1', '#e2e8f0'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            cutout: '80%',
            plugins: { legend: { display: false } }
        }
    });
    
    // Student Grades Line Chart
    const studentGrades = db.grades;
    const labels = studentGrades.map(g => g.quizType);
    const scores = studentGrades.map(g => g.score);
    
    if (siswaNilaiChart) siswaNilaiChart.destroy();
    siswaNilaiChart = new Chart(gradesCtx, {
        type: 'line',
        data: {
            labels: labels.length ? labels : ["Belum Ada Kuis"],
            datasets: [{
                label: 'Nilai Ujian',
                data: scores.length ? scores : [0],
                backgroundColor: 'rgba(99, 102, 241, 0.15)',
                borderColor: '#6366f1',
                borderWidth: 3,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { min: 0, max: 100 }
            }
        }
    });
}


// ====================================================
//        3. AUTHENTICATION & SHELL NAV ROUTER
// ====================================================

let currentUser = null;

function handleLogin(event) {
    event.preventDefault();
    const userField = document.getElementById("username").value.trim();
    const passField = document.getElementById("password").value;
    
    if (userField === "admin" && passField === "123456") {
        currentUser = { username: "admin", name: "Administrator Bimbel", role: "admin" };
        showShell();
        showToast("Login Administrator Sukses!", "success");
    } else if (userField === "siswa" && passField === "siswa123") {
        currentUser = { username: "siswa", name: db.profile.name, role: "siswa" };
        showShell();
        showToast(`Selamat datang kembali, ${db.profile.name}!`, "success");
    } else {
        showToast("Username atau Password salah!", "danger");
    }
}

function handleLogout() {
    Swal.fire({
        title: 'Keluar Aplikasi?',
        text: "Anda akan keluar dari sesi login ini.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ya, Keluar!',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.isConfirmed) {
            currentUser = null;
            document.getElementById("app-shell").style.display = "none";
            document.getElementById("landing-view").style.display = "flex";
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            showToast("Sesi login berakhir.", "info");
        }
    });
}

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}

// Router Navigation
function navigateTo(viewId) {
    // Hide all view sections
    const sections = document.querySelectorAll(".view-section");
    sections.forEach(s => s.classList.remove("active"));
    
    // Show active section
    const activeSection = document.getElementById(viewId);
    if (activeSection) {
        activeSection.classList.add("active");
    }
    
    // Close sidebar on mobile
    document.getElementById("sidebar").classList.remove("open");
    
    // Update active sidebar link
    const links = document.querySelectorAll(".sidebar-link");
    links.forEach(l => {
        if (l.getAttribute("onclick").includes(viewId)) {
            l.classList.add("active");
        } else {
            l.classList.remove("active");
        }
    });
    
    // Specific View Initializations
    if (viewId === "admin-dashboard-view") {
        updateAdminDashboardStats();
        renderAdminCharts();
        renderAdminActivityLogs();
    }
    if (viewId === "admin-materi-view") {
        renderAdminMateriTable();
    }
    if (viewId === "admin-kelas-mapel-view") {
        renderKelasMapelTables();
    }
    if (viewId === "admin-mentor-view") {
        renderAdminMentorTable();
    }
    if (viewId === "admin-jadwal-pengumuman-view") {
        renderJadwalPengumumanTables();
    }
    if (viewId === "admin-bank-soal-view") {
        renderQuestionsTable();
    }
    if (viewId === "admin-siswa-view") {
        renderAdminSiswaTables();
    }
    
    if (viewId === "siswa-dashboard-view") {
        document.getElementById("siswa-dashboard-welcome").innerText = `Selamat Datang, ${db.profile.name}!`;
        renderStudentDashboard();
        renderStudentCharts();
        startCountdown();
    }
    if (viewId === "siswa-materi-view") {
        populateSiswaMateriFilters();
        renderSiswaMateriList();
    }
    if (viewId === "siswa-latihan-view") {
        initSiswaLatihanView();
    }
    if (viewId === "siswa-tryout-view") {
        initSiswaTryoutView();
    }
    if (viewId === "siswa-absensi-view") {
        initSiswaAbsensiView();
    }
    if (viewId === "siswa-chat-view") {
        initSiswaChatView();
    }
    if (viewId === "siswa-profile-view") {
        initSiswaProfileView();
    }
}

// Build Shell UI based on Role
function showShell() {
    document.getElementById("landing-view").style.display = "none";
    document.getElementById("app-shell").style.display = "block";
    
    // Set navbar user info
    document.getElementById("nav-user-name").innerText = currentUser.name;
    document.getElementById("nav-user-role").innerText = currentUser.role === "admin" ? "Administrator" : db.profile.className;
    document.getElementById("nav-avatar").src = currentUser.role === "admin" ? "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" : db.profile.avatar;
    
    // Generate Sidebar Menu
    const sidebarMenu = document.getElementById("sidebar-menu");
    sidebarMenu.innerHTML = "";
    
    if (currentUser.role === "admin") {
        sidebarMenu.innerHTML = `
            <li class="sidebar-link active" onclick="navigateTo('admin-dashboard-view')">
                <i class="fa-solid fa-gauge-high"></i> Dashboard
            </li>
            <li class="sidebar-link" onclick="navigateTo('admin-materi-view')">
                <i class="fa-solid fa-book-open"></i> Materi Belajar
            </li>
            <li class="sidebar-link" onclick="navigateTo('admin-kelas-mapel-view')">
                <i class="fa-solid fa-school"></i> Kelas & Mapel
            </li>
            <li class="sidebar-link" onclick="navigateTo('admin-mentor-view')">
                <i class="fa-solid fa-chalkboard-user"></i> Kelola Mentor
            </li>
            <li class="sidebar-link" onclick="navigateTo('admin-jadwal-pengumuman-view')">
                <i class="fa-solid fa-calendar-alt"></i> Jadwal & Info
            </li>
            <li class="sidebar-link" onclick="navigateTo('admin-bank-soal-view')">
                <i class="fa-solid fa-file-invoice"></i> Bank Soal
            </li>
            <li class="sidebar-link" onclick="navigateTo('admin-siswa-view')">
                <i class="fa-solid fa-users"></i> Monitoring Siswa
            </li>
        `;
        navigateTo("admin-dashboard-view");
    } else {
        sidebarMenu.innerHTML = `
            <li class="sidebar-link active" onclick="navigateTo('siswa-dashboard-view')">
                <i class="fa-solid fa-house"></i> Dashboard
            </li>
            <li class="sidebar-link" onclick="navigateTo('siswa-materi-view')">
                <i class="fa-solid fa-book-open"></i> Materi Belajar
            </li>
            <li class="sidebar-link" onclick="navigateTo('siswa-latihan-view')">
                <i class="fa-solid fa-pen-to-square"></i> Latihan Soal
            </li>
            <li class="sidebar-link" onclick="navigateTo('siswa-tryout-view')">
                <i class="fa-solid fa-trophy"></i> Try Out
            </li>
            <li class="sidebar-link" onclick="navigateTo('siswa-absensi-view')">
                <i class="fa-solid fa-fingerprint"></i> Absensi Siswa
            </li>
            <li class="sidebar-link" onclick="navigateTo('siswa-chat-view')">
                <i class="fa-solid fa-comments"></i> Chat Mentor
            </li>
            <li class="sidebar-link" onclick="navigateTo('siswa-profile-view')">
                <i class="fa-solid fa-user-gear"></i> Profil Saya
            </li>
        `;
        navigateTo("siswa-dashboard-view");
    }
}


// ====================================================
//         4. ADMIN MODULES
// ====================================================

function updateAdminDashboardStats() {
    document.getElementById("admin-stat-materi").innerText = db.materi.length;
    document.getElementById("admin-stat-siswa").innerText = 1;
    document.getElementById("admin-stat-ujian").innerText = db.questions.length;
    
    // Average Grade
    const totalGrades = db.grades.reduce((sum, g) => sum + g.score, 0);
    const avgScore = db.grades.length ? Math.round(totalGrades / db.grades.length) : 0;
    document.getElementById("admin-stat-nilai").innerText = avgScore;
}

function renderAdminActivityLogs() {
    const list = document.getElementById("admin-activity-logs");
    list.innerHTML = "";
    if (db.activityLogs.length === 0) {
        list.innerHTML = `<tr><td colspan="4" style="text-align:center;">Belum ada riwayat aktivitas terbaru.</td></tr>`;
        return;
    }
    db.activityLogs.forEach(log => {
        list.innerHTML += `
            <tr>
                <td>${log.time}</td>
                <td><strong>${log.name}</strong></td>
                <td><span class="badge badge-primary">${log.activity}</span></td>
                <td>${log.details}</td>
            </tr>
        `;
    });
}

// Materials Manager
function renderAdminMateriTable() {
    const search = document.getElementById("admin-search-materi").value.toLowerCase();
    const tableBody = document.getElementById("admin-materi-table-body");
    tableBody.innerHTML = "";
    
    const filteredMateri = db.materi.filter(m => 
        m.title.toLowerCase().includes(search) || 
        m.subject.toLowerCase().includes(search) || 
        m.className.toLowerCase().includes(search)
    );
    
    if (filteredMateri.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="7" style="text-align:center;">Belum ada materi pembelajaran yang ditambahkan.</td></tr>`;
        return;
    }
    
    filteredMateri.forEach(m => {
        const badgeClass = m.status === "Publish" ? "badge-success" : "badge-warning";
        tableBody.innerHTML += `
            <tr>
                <td><strong>${m.title}</strong></td>
                <td>${m.subject}</td>
                <td>${m.className}</td>
                <td>${m.bab}</td>
                <td>${m.subbab}</td>
                <td><span class="badge ${badgeClass}">${m.status}</span></td>
                <td>
                    <button class="nav-btn" onclick="openMateriModal('${m.id}')" title="Edit" style="background:var(--bg-tertiary); color:var(--primary); font-size:0.9rem; padding: 6px;"><i class="fa-solid fa-edit"></i></button>
                    <button class="nav-btn" onclick="deleteMateri('${m.id}')" title="Hapus" style="background:var(--bg-tertiary); color:var(--danger); font-size:0.9rem; padding: 6px;"><i class="fa-solid fa-trash-can"></i></button>
                </td>
            </tr>
        `;
    });
}

function openMateriModal(materiId = "") {
    const modal = document.getElementById("materi-modal");
    const form = document.getElementById("materi-form");
    const titleEl = document.getElementById("materi-modal-title");
    
    // Populate dropdown options
    const subSelect = document.getElementById("materi-subject");
    const classSelect = document.getElementById("materi-class");
    
    subSelect.innerHTML = db.subjects.map(s => `<option value="${s}">${s}</option>`).join("");
    classSelect.innerHTML = db.classes.map(c => `<option value="${c}">${c}</option>`).join("");
    
    form.reset();
    
    if (materiId) {
        titleEl.innerText = "Edit Materi Pembelajaran";
        const m = db.materi.find(item => item.id === materiId);
        if (m) {
            document.getElementById("materi-id").value = m.id;
            document.getElementById("materi-title").value = m.title;
            document.getElementById("materi-subject").value = m.subject;
            document.getElementById("materi-class").value = m.className;
            document.getElementById("materi-bab").value = m.bab;
            document.getElementById("materi-subbab").value = m.subbab;
            document.getElementById("materi-desc").value = m.desc;
            document.getElementById("materi-content").value = m.content;
            document.getElementById("materi-video").value = m.videoUrl;
            document.getElementById("materi-pdf").value = m.pdfName;
            document.getElementById("materi-status").value = m.status;
        }
    } else {
        titleEl.innerText = "Tambah Materi Pembelajaran";
        document.getElementById("materi-id").value = "";
    }
    
    modal.classList.add("open");
}

function closeMateriModal() {
    document.getElementById("materi-modal").classList.remove("open");
}

function saveMateri(event) {
    event.preventDefault();
    const id = document.getElementById("materi-id").value;
    const title = document.getElementById("materi-title").value.trim();
    const subject = document.getElementById("materi-subject").value;
    const className = document.getElementById("materi-class").value;
    const bab = document.getElementById("materi-bab").value.trim();
    const subbab = document.getElementById("materi-subbab").value.trim();
    const desc = document.getElementById("materi-desc").value.trim();
    const content = document.getElementById("materi-content").value.trim();
    const videoUrl = document.getElementById("materi-video").value;
    const pdfName = document.getElementById("materi-pdf").value.trim();
    const status = document.getElementById("materi-status").value;
    
    if (id) {
        // Edit mode
        const index = db.materi.findIndex(item => item.id === id);
        if (index !== -1) {
            db.materi[index] = { id, title, subject, className, bab, subbab, desc, content, videoUrl, pdfName, status };
            logActivity(currentUser.name, "Edit Materi", `Judul: ${title}`);
            showToast("Materi pembelajaran berhasil diperbarui!", "success");
        }
    } else {
        // Add mode
        const newId = "mat-" + Date.now();
        db.materi.push({ id: newId, title, subject, className, bab, subbab, desc, content, videoUrl, pdfName, status });
        logActivity(currentUser.name, "Tambah Materi", `Judul: ${title}`);
        showToast("Materi baru berhasil ditambahkan!", "success");
    }
    
    saveDatabase();
    closeMateriModal();
    renderAdminMateriTable();
}

function deleteMateri(id) {
    Swal.fire({
        title: 'Hapus Materi?',
        text: "Materi ini akan dihapus secara permanen dari sistem.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ya, Hapus!',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.isConfirmed) {
            const materiObj = db.materi.find(item => item.id === id);
            const title = materiObj ? materiObj.title : "";
            
            db.materi = db.materi.filter(item => item.id !== id);
            logActivity(currentUser.name, "Hapus Materi", `Judul: ${title}`);
            saveDatabase();
            renderAdminMateriTable();
            showToast("Materi berhasil dihapus.", "success");
        }
    });
}

// Classes and Subjects managers
function renderKelasMapelTables() {
    // Classes
    const cTable = document.getElementById("admin-kelas-table-body");
    cTable.innerHTML = "";
    db.classes.forEach(c => {
        cTable.innerHTML += `
            <tr>
                <td><strong>${c}</strong></td>
                <td>
                    <button class="nav-btn" onclick="deleteClass('${c}')" style="background:var(--bg-tertiary); color:var(--danger); font-size:0.9rem; padding: 6px;"><i class="fa-solid fa-trash-can"></i></button>
                </td>
            </tr>
        `;
    });
    
    // Subjects
    const sTable = document.getElementById("admin-subject-table-body");
    sTable.innerHTML = "";
    db.subjects.forEach(s => {
        sTable.innerHTML += `
            <tr>
                <td><strong>${s}</strong></td>
                <td>
                    <button class="nav-btn" onclick="deleteSubject('${s}')" style="background:var(--bg-tertiary); color:var(--danger); font-size:0.9rem; padding: 6px;"><i class="fa-solid fa-trash-can"></i></button>
                </td>
            </tr>
        `;
    });
}

function addClassPrompt() {
    Swal.fire({
        title: 'Tambah Kelas Baru',
        input: 'text',
        inputPlaceholder: 'Contoh: Kelas 12 MIPA',
        showCancelButton: true,
        confirmButtonText: 'Simpan',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.value) {
            const className = result.value.trim();
            if (className && !db.classes.includes(className)) {
                db.classes.push(className);
                logActivity(currentUser.name, "Tambah Kelas", className);
                saveDatabase();
                renderKelasMapelTables();
                showToast(`Kelas ${className} berhasil dibuat.`, "success");
            } else {
                showToast("Nama kelas tidak valid atau sudah ada.", "warning");
            }
        }
    });
}

function deleteClass(cName) {
    Swal.fire({
        title: 'Hapus Kelas?',
        text: `Semua penanda kelas ${cName} akan dilepas.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Hapus!',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.isConfirmed) {
            db.classes = db.classes.filter(c => c !== cName);
            logActivity(currentUser.name, "Hapus Kelas", cName);
            saveDatabase();
            renderKelasMapelTables();
            showToast("Kelas berhasil dihapus.", "success");
        }
    });
}

function addSubjectPrompt() {
    Swal.fire({
        title: 'Tambah Pelajaran Baru',
        input: 'text',
        inputPlaceholder: 'Contoh: Sejarah Indonesia',
        showCancelButton: true,
        confirmButtonText: 'Simpan',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.value) {
            const sName = result.value.trim();
            if (sName && !db.subjects.includes(sName)) {
                db.subjects.push(sName);
                logActivity(currentUser.name, "Tambah Pelajaran", sName);
                saveDatabase();
                renderKelasMapelTables();
                showToast(`Pelajaran ${sName} berhasil dibuat.`, "success");
            } else {
                showToast("Nama pelajaran tidak valid atau sudah ada.", "warning");
            }
        }
    });
}

function deleteSubject(sName) {
    Swal.fire({
        title: 'Hapus Pelajaran?',
        text: `Pelajaran ${sName} akan dihapus secara permanen.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Hapus!',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.isConfirmed) {
            db.subjects = db.subjects.filter(s => s !== sName);
            logActivity(currentUser.name, "Hapus Pelajaran", sName);
            saveDatabase();
            renderKelasMapelTables();
            showToast("Pelajaran berhasil dihapus.", "success");
        }
    });
}

// Schedules & Announcements Manager
function renderJadwalPengumumanTables() {
    // Schedule
    const schBody = document.getElementById("admin-schedule-table-body");
    schBody.innerHTML = "";
    db.schedules.forEach(s => {
        schBody.innerHTML += `
            <tr>
                <td>${s.dayTime}</td>
                <td><strong>${s.subject}</strong></td>
                <td>${s.room}</td>
                <td>
                    <button class="nav-btn" onclick="deleteSchedule('${s.id}')" style="background:var(--bg-tertiary); color:var(--danger); font-size:0.9rem; padding: 6px;"><i class="fa-solid fa-trash-can"></i></button>
                </td>
            </tr>
        `;
    });
    
    // Announcement
    const annBody = document.getElementById("admin-announcement-table-body");
    annBody.innerHTML = "";
    db.announcements.forEach(a => {
        annBody.innerHTML += `
            <tr>
                <td>${a.date}</td>
                <td>${a.content}</td>
                <td>
                    <button class="nav-btn" onclick="deleteAnnouncement('${a.id}')" style="background:var(--bg-tertiary); color:var(--danger); font-size:0.9rem; padding: 6px;"><i class="fa-solid fa-trash-can"></i></button>
                </td>
            </tr>
        `;
    });
}

function openScheduleModal() {
    const modal = document.getElementById("schedule-modal");
    const subSelect = document.getElementById("schedule-subject");
    subSelect.innerHTML = db.subjects.map(s => `<option value="${s}">${s}</option>`).join("");
    document.getElementById("schedule-form").reset();
    modal.classList.add("open");
}

function closeScheduleModal() {
    document.getElementById("schedule-modal").classList.remove("open");
}

function saveSchedule(event) {
    event.preventDefault();
    const dayTime = document.getElementById("schedule-day-time").value.trim();
    const subject = document.getElementById("schedule-subject").value;
    const room = document.getElementById("schedule-room").value.trim();
    
    const newSch = {
        id: "sch-" + Date.now(),
        dayTime,
        subject,
        room
    };
    db.schedules.push(newSch);
    logActivity(currentUser.name, "Tambah Jadwal", `${subject} (${dayTime})`);
    saveDatabase();
    closeScheduleModal();
    renderJadwalPengumumanTables();
    showToast("Jadwal kelas berhasil ditambahkan!", "success");
}

function deleteSchedule(id) {
    Swal.fire({
        title: 'Hapus Jadwal?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Hapus!',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.isConfirmed) {
            db.schedules = db.schedules.filter(s => s.id !== id);
            saveDatabase();
            renderJadwalPengumumanTables();
            showToast("Jadwal kelas berhasil dihapus.", "success");
        }
    });
}

function openAnnouncementModal() {
    document.getElementById("announcement-form").reset();
    document.getElementById("announcement-modal").classList.add("open");
}

function closeAnnouncementModal() {
    document.getElementById("announcement-modal").classList.remove("open");
}

function saveAnnouncement(event) {
    event.preventDefault();
    const content = document.getElementById("announce-content").value.trim();
    const today = new Date().toISOString().split('T')[0];
    
    const newAnn = {
        id: "ann-" + Date.now(),
        date: today,
        content
    };
    db.announcements.unshift(newAnn);
    logActivity(currentUser.name, "Tambah Pengumuman", content.substring(0, 30) + "...");
    saveDatabase();
    closeAnnouncementModal();
    renderJadwalPengumumanTables();
    showToast("Pengumuman berhasil dipublikasikan!", "success");
}

function deleteAnnouncement(id) {
    Swal.fire({
        title: 'Hapus Pengumuman?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Hapus!',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.isConfirmed) {
            db.announcements = db.announcements.filter(a => a.id !== id);
            saveDatabase();
            renderJadwalPengumumanTables();
            showToast("Pengumuman berhasil dihapus.", "success");
        }
    });
}

// Question Bank CRUD
function renderQuestionsTable() {
    const tableBody = document.getElementById("admin-questions-table-body");
    tableBody.innerHTML = "";
    
    if (db.questions.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center;">Belum ada soal ujian di bank soal.</td></tr>`;
        return;
    }
    
    db.questions.forEach(q => {
        const catBadge = q.category === "TryOut" ? "badge-warning" : "badge-success";
        tableBody.innerHTML += `
            <tr>
                <td><span class="badge ${catBadge}">${q.category}</span></td>
                <td><strong>${q.subject}</strong></td>
                <td style="max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${q.text}</td>
                <td>${q.type}</td>
                <td><strong>${q.answer}</strong></td>
                <td>
                    <button class="nav-btn" onclick="deleteQuestion('${q.id}')" style="background:var(--bg-tertiary); color:var(--danger); font-size:0.9rem; padding: 6px;"><i class="fa-solid fa-trash-can"></i></button>
                </td>
            </tr>
        `;
    });
}

function handleQuestionCategoryChange() {
    const cat = document.getElementById("q-category").value;
    const subSelect = document.getElementById("q-subject");
    subSelect.innerHTML = "";
    
    if (cat === "Latihan") {
        subSelect.innerHTML = db.subjects.map(s => `<option value="${s}">${s}</option>`).join("");
    } else {
        subSelect.innerHTML = db.tryouts.map(t => `<option value="${t.name}">${t.name}</option>`).join("");
    }
}

function toggleQuestionOptions() {
    const type = document.getElementById("q-type").value;
    const optWrapper = document.getElementById("q-options-wrapper");
    const ansSelect = document.getElementById("q-answer-select");
    const ansText = document.getElementById("q-answer-text");
    
    ansSelect.innerHTML = "";
    
    if (type === "PG") {
        optWrapper.style.display = "block";
        ansSelect.style.display = "block";
        ansText.style.display = "none";
        ansSelect.innerHTML = `
            <option value="A">Pilihan A</option>
            <option value="B">Pilihan B</option>
            <option value="C">Pilihan C</option>
            <option value="D">Pilihan D</option>
        `;
        document.querySelectorAll(".q-opt-field").forEach(f => f.setAttribute("required", "true"));
    } else if (type === "BS") {
        optWrapper.style.display = "none";
        ansSelect.style.display = "block";
        ansText.style.display = "none";
        ansSelect.innerHTML = `
            <option value="A">Benar (A)</option>
            <option value="B">Salah (B)</option>
        `;
        document.querySelectorAll(".q-opt-field").forEach(f => f.removeAttribute("required"));
    } else {
        optWrapper.style.display = "none";
        ansSelect.style.display = "none";
        ansText.style.display = "block";
        document.querySelectorAll(".q-opt-field").forEach(f => f.removeAttribute("required"));
    }
}

function openQuestionModal() {
    document.getElementById("question-form").reset();
    handleQuestionCategoryChange();
    toggleQuestionOptions();
    document.getElementById("question-modal").classList.add("open");
}

function closeQuestionModal() {
    document.getElementById("question-modal").classList.remove("open");
}

function saveQuestion(event) {
    event.preventDefault();
    const category = document.getElementById("q-category").value;
    const subject = document.getElementById("q-subject").value;
    const type = document.getElementById("q-type").value;
    const text = document.getElementById("q-text").value.trim();
    const explanation = document.getElementById("q-explanation").value.trim();
    
    let options = [];
    let answer = "";
    
    if (type === "PG") {
        options = [
            document.getElementById("q-opt-a").value.trim(),
            document.getElementById("q-opt-b").value.trim(),
            document.getElementById("q-opt-c").value.trim(),
            document.getElementById("q-opt-d").value.trim()
        ];
        answer = document.getElementById("q-answer-select").value;
    } else if (type === "BS") {
        options = ["Benar", "Salah"];
        answer = document.getElementById("q-answer-select").value;
    } else {
        options = [];
        answer = document.getElementById("q-answer-text").value.trim();
    }
    
    const newQ = {
        id: "q-" + Date.now(),
        category,
        subject,
        type,
        text,
        options,
        answer,
        explanation
    };
    
    db.questions.push(newQ);
    logActivity(currentUser.name, "Tambah Soal", `Mapel/Ujian: ${subject}`);
    saveDatabase();
    closeQuestionModal();
    renderQuestionsTable();
    showToast("Soal ujian berhasil ditambahkan ke Bank Soal!", "success");
}

function deleteQuestion(id) {
    Swal.fire({
        title: 'Hapus Soal?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Hapus!',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.isConfirmed) {
            db.questions = db.questions.filter(q => q.id !== id);
            saveDatabase();
            renderQuestionsTable();
            showToast("Soal ujian berhasil dihapus.", "success");
        }
    });
}

// Student Statistics View
function renderAdminSiswaTables() {
    // Grades Table
    const gradesBody = document.getElementById("admin-grades-table-body");
    gradesBody.innerHTML = "";
    if (db.grades.length === 0) {
        gradesBody.innerHTML = `<tr><td colspan="4" style="text-align:center;">Belum ada riwayat nilai latihan siswa.</td></tr>`;
    } else {
        db.grades.forEach(g => {
            gradesBody.innerHTML += `
                <tr>
                    <td><strong>${db.profile.name}</strong></td>
                    <td>${g.quizType}</td>
                    <td><strong>${g.score}</strong></td>
                    <td>${g.date}</td>
                </tr>
            `;
        });
    }
    
    // Attendance Table
    const attBody = document.getElementById("admin-attendance-table-body");
    attBody.innerHTML = "";
    if (db.attendance.length === 0) {
        attBody.innerHTML = `<tr><td colspan="4" style="text-align:center;">Belum ada riwayat absensi siswa.</td></tr>`;
    } else {
        db.attendance.forEach(a => {
            attBody.innerHTML += `
                <tr>
                    <td><strong>${db.profile.name}</strong></td>
                    <td><span class="badge badge-success">${a.checkIn}</span></td>
                    <td><span class="badge ${a.checkOut !== '-' ? 'badge-info' : 'badge-danger'}">${a.checkOut}</span></td>
                    <td>${a.date}</td>
                </tr>
            `;
        });
    }
}

function renderAdminMentorTable() {
    const tbody = document.getElementById("admin-mentor-table-body");
    tbody.innerHTML = "";
    
    if (!db.mentors || db.mentors.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; color:var(--text-muted); padding:20px;">Belum ada mentor aktif. Silakan tambahkan mentor baru.</td></tr>`;
        return;
    }
    
    db.mentors.forEach(m => {
        tbody.innerHTML += `
            <tr>
                <td><div class="chat-channel-avatar" style="margin:0 auto; width:36px; height:36px; font-size:0.9rem; display:flex; align-items:center; justify-content:center; border-radius:50%; background:var(--primary-glow); color:var(--primary); font-weight:700;">${m.initials}</div></td>
                <td style="font-weight:600; color:var(--text-primary);">${m.name}</td>
                <td><span class="badge badge-info" style="background:var(--primary-glow); color:var(--primary); border:1px solid var(--primary); padding:4px 8px; border-radius:4px; font-size:0.75rem;">${m.subject}</span></td>
                <td>
                    <div style="display:flex; gap:10px; justify-content:center;">
                        <button class="btn btn-primary btn-xs btn-secondary" style="padding:4px 8px;" onclick="editMentor('${m.id}')">
                            <i class="fa-solid fa-edit"></i> Edit
                        </button>
                        <button class="btn btn-danger btn-xs" style="padding:4px 8px; background:var(--danger); border-color:var(--danger);" onclick="deleteMentor('${m.id}')">
                            <i class="fa-solid fa-trash"></i> Hapus
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });
}

function openAddMentorModal() {
    Swal.fire({
        title: 'Tambah Mentor Baru',
        html:
            '<input id="swal-mentor-name" class="swal2-input" placeholder="Nama Mentor">' +
            '<input id="swal-mentor-subject" class="swal2-input" placeholder="Mata Pelajaran (misal: Matematika)">',
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Simpan',
        cancelButtonText: 'Batal',
        preConfirm: () => {
            const name = document.getElementById('swal-mentor-name').value.trim();
            const subject = document.getElementById('swal-mentor-subject').value.trim();
            if (!name || !subject) {
                Swal.showValidationMessage('Harap lengkapi semua kolom!');
            }
            return { name: name, subject: subject };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const newMentor = {
                id: "men-" + Date.now(),
                name: result.value.name,
                subject: result.value.subject,
                initials: result.value.name.split(" ").map(w => w[0]).join("").toUpperCase().substring(0, 2)
            };
            if (!db.mentors) db.mentors = [];
            db.mentors.push(newMentor);
            saveDatabase();
            renderAdminMentorTable();
            showToast("Mentor berhasil ditambahkan!", "success");
        }
    });
}

function editMentor(id) {
    const mentor = db.mentors.find(m => m.id === id);
    if (!mentor) return;
    
    Swal.fire({
        title: 'Edit Data Mentor',
        html:
            `<input id="swal-mentor-name" class="swal2-input" placeholder="Nama Mentor" value="${mentor.name}">` +
            `<input id="swal-mentor-subject" class="swal2-input" placeholder="Mata Pelajaran" value="${mentor.subject}">`,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Simpan Perubahan',
        cancelButtonText: 'Batal',
        preConfirm: () => {
            const name = document.getElementById('swal-mentor-name').value.trim();
            const subject = document.getElementById('swal-mentor-subject').value.trim();
            if (!name || !subject) {
                Swal.showValidationMessage('Harap lengkapi semua kolom!');
            }
            return { name: name, subject: subject };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            mentor.name = result.value.name;
            mentor.subject = result.value.subject;
            mentor.initials = result.value.name.split(" ").map(w => w[0]).join("").toUpperCase().substring(0, 2);
            saveDatabase();
            renderAdminMentorTable();
            showToast("Data mentor berhasil diperbarui!", "success");
        }
    });
}

function deleteMentor(id) {
    Swal.fire({
        title: 'Hapus Mentor?',
        text: "Semua obrolan terkait dengan mentor ini juga akan hilang.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ef4444',
        confirmButtonText: 'Ya, Hapus!',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.isConfirmed) {
            db.mentors = db.mentors.filter(m => m.id !== id);
            db.chats = db.chats.filter(c => c.sender !== id && c.receiver !== id);
            saveDatabase();
            renderAdminMentorTable();
            showToast("Mentor berhasil dihapus.", "info");
        }
    });
}


// ====================================================
//        5. SISWA DASHBOARD MODULES
// ====================================================

function renderStudentDashboard() {
    // Targets Checklist
    const targetList = document.getElementById("siswa-target-list");
    targetList.innerHTML = "";
    if (db.profile.targets.length === 0) {
        targetList.innerHTML = `<p style="text-align:center; color:var(--text-muted); font-size:0.85rem;">Belum ada target belajar. Tambahkan target di atas.</p>`;
    } else {
        db.profile.targets.forEach(t => {
            const completedClass = t.checked ? "completed" : "";
            const checkedIcon = t.checked ? `<i class="fa-solid fa-check"></i>` : "";
            const checkedClass = t.checked ? "checked" : "";
            targetList.innerHTML += `
                <div class="target-item ${completedClass}">
                    <div class="checkbox-custom ${checkedClass}" onclick="toggleTargetCheck('${t.id}')">
                        ${checkedIcon}
                    </div>
                    <span class="target-text">${t.text}</span>
                    <button onclick="deleteTarget('${t.id}')" style="margin-left:auto; color:var(--text-muted); font-size:0.8rem;"><i class="fa-regular fa-trash-can"></i></button>
                </div>
            `;
        });
    }
    
    // Schedule
    const schList = document.getElementById("siswa-schedule-list");
    schList.innerHTML = "";
    if (db.schedules.length === 0) {
        schList.innerHTML = `<tr><td colspan="3" style="text-align:center;">Tidak ada jadwal belajar minggu ini.</td></tr>`;
    } else {
        db.schedules.forEach(s => {
            schList.innerHTML += `
                <tr>
                    <td><strong>${s.dayTime}</strong></td>
                    <td>${s.subject}</td>
                    <td><span class="badge badge-primary">${s.room}</span></td>
                </tr>
            `;
        });
    }
    
    // Announcements
    const annList = document.getElementById("siswa-announcement-list");
    annList.innerHTML = "";
    if (db.announcements.length === 0) {
        annList.innerHTML = `<p style="text-align:center; color:var(--text-muted); font-size:0.85rem;">Tidak ada pengumuman terbaru.</p>`;
    } else {
        db.announcements.forEach(a => {
            annList.innerHTML += `
                <div class="glass-panel" style="padding:15px; border-radius: var(--radius-sm);">
                    <div style="font-size:0.75rem; color:var(--text-muted); font-weight:600; margin-bottom:4px;">
                        <i class="fa-regular fa-calendar-check"></i> ${a.date}
                    </div>
                    <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.4;">${a.content}</p>
                </div>
            `;
        });
    }
    
    // Calendar
    renderCalendar();
}

function addTargetPrompt() {
    Swal.fire({
        title: 'Tambah Target Belajar',
        input: 'text',
        inputPlaceholder: 'Tulis target belajarmu...',
        showCancelButton: true,
        confirmButtonText: 'Simpan',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.value) {
            const targetText = result.value.trim();
            if (targetText) {
                db.profile.targets.push({
                    id: "tar-" + Date.now(),
                    text: targetText,
                    checked: false
                });
                saveDatabase();
                renderStudentDashboard();
                showToast("Target belajar baru berhasil ditambahkan!", "success");
            }
        }
    });
}

function toggleTargetCheck(id) {
    const target = db.profile.targets.find(t => t.id === id);
    if (target) {
        target.checked = !target.checked;
        saveDatabase();
        renderStudentDashboard();
        showToast("Target belajar diperbarui.", "success");
    }
}

function deleteTarget(id) {
    db.profile.targets = db.profile.targets.filter(t => t.id !== id);
    saveDatabase();
    renderStudentDashboard();
    showToast("Target berhasil dihapus.", "success");
}

// Student Calendar
let currentCalendarDate = new Date();
function renderCalendar() {
    const container = document.getElementById("calendar-days-container");
    const monthYear = document.getElementById("calendar-month-year");
    if (!container) return;
    
    container.innerHTML = "";
    
    const year = currentCalendarDate.getFullYear();
    const month = currentCalendarDate.getMonth();
    
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    monthYear.innerText = `${months[month]} ${year}`;
    
    // Header labels
    const daysLabels = ["M", "S", "S", "R", "K", "J", "S"];
    daysLabels.forEach(label => {
        container.innerHTML += `<div class="calendar-day-label">${label}</div>`;
    });
    
    // Empty offsets
    for (let i = 0; i < firstDay; i++) {
        container.innerHTML += `<div></div>`;
    }
    
    const today = new Date();
    for (let d = 1; d <= totalDays; d++) {
        let classList = "calendar-day";
        if (today.getDate() === d && today.getMonth() === month && today.getFullYear() === year) {
            classList += " today";
        }
        
        // Add events dummy (e.g. schedules or exams)
        if (d % 8 === 0) classList += " event";
        
        container.innerHTML += `<div class="${classList}">${d}</div>`;
    }
}

function changeMonth(direction) {
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() + direction);
    renderCalendar();
}

// Siswa Materi Filters & Viewer
function populateSiswaMateriFilters() {
    const subFilter = document.getElementById("siswa-filter-subject");
    const classFilter = document.getElementById("siswa-filter-class");
    
    subFilter.innerHTML = `<option value="">Semua Pelajaran</option>` + db.subjects.map(s => `<option value="${s}">${s}</option>`).join("");
    classFilter.innerHTML = `<option value="">Semua Kelas</option>` + db.classes.map(c => `<option value="${c}">${c}</option>`).join("");
}

function renderSiswaMateriList() {
    const search = document.getElementById("siswa-search-materi").value.toLowerCase();
    const filterSub = document.getElementById("siswa-filter-subject").value;
    const filterClass = document.getElementById("siswa-filter-class").value;
    const container = document.getElementById("siswa-materi-list-container");
    
    container.innerHTML = "";
    
    const activeMaterials = db.materi.filter(m => m.status === "Publish");
    
    const filtered = activeMaterials.filter(m => {
        const matchesSearch = m.title.toLowerCase().includes(search) || m.desc.toLowerCase().includes(search);
        const matchesSub = filterSub ? m.subject === filterSub : true;
        const matchesClass = filterClass ? m.className === filterClass : true;
        return matchesSearch && matchesSub && matchesClass;
    });
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state glass-panel" style="grid-column: 1 / -1;">
                <div class="empty-state-icon"><i class="fa-regular fa-face-frown"></i></div>
                <h3>Belum ada materi yang dipublikasikan.</h3>
                <p>Silakan tunggu guru/admin mengunggah materi pembelajaran baru.</p>
            </div>
        `;
        return;
    }
    
    filtered.forEach(m => {
        const isFav = db.profile.favorites.includes(m.id);
        const heartClass = isFav ? "fa-solid fa-heart active" : "fa-regular fa-heart";
        const isCompleted = db.profile.completedMateri.includes(m.id);
        const checkIcon = isCompleted ? `<span class="badge badge-success"><i class="fa-solid fa-check"></i> Selesai</span>` : "";
        
        container.innerHTML += `
            <div class="materi-card glass-panel">
                <div>
                    <div class="materi-card-header">
                        <span class="materi-card-tag">${m.subject} • ${m.className}</span>
                        <i class="${heartClass} materi-favorite-btn" onclick="toggleFavorite('${m.id}', event)"></i>
                    </div>
                    <h3 class="materi-card-title">${m.title}</h3>
                    <p class="materi-card-desc">${m.desc}</p>
                </div>
                <div class="materi-card-meta">
                    <span><i class="fa-regular fa-folder-open"></i> ${m.bab}</span>
                    <button onclick="readMateri('${m.id}')" style="color:var(--primary); font-weight:700;">Baca <i class="fa-solid fa-chevron-right" style="font-size:0.75rem;"></i></button>
                </div>
                <div style="margin-top: 10px;">
                    ${checkIcon}
                </div>
            </div>
        `;
    });
}

function toggleFavorite(id, event) {
    if (event) event.stopPropagation();
    const index = db.profile.favorites.indexOf(id);
    if (index === -1) {
        db.profile.favorites.push(id);
        showToast("Ditambahkan ke favorit.", "success");
    } else {
        db.profile.favorites.splice(index, 1);
        showToast("Dihapus dari favorit.", "info");
    }
    saveDatabase();
    renderSiswaMateriList();
}

let activeReaderMateriId = "";

function readMateri(id) {
    activeReaderMateriId = id;
    const m = db.materi.find(item => item.id === id);
    if (!m) return;
    
    navigateTo("siswa-materi-reader-view");
    
    document.getElementById("reader-meta-tag").innerText = `${m.subject} • ${m.className}`;
    document.getElementById("reader-title").innerText = m.title;
    document.getElementById("reader-hierarchy").innerText = `${m.bab} • ${m.subbab}`;
    document.getElementById("reader-description").innerText = m.desc;
    document.getElementById("reader-content-body").innerHTML = m.content;
    
    // Video section
    const videoWrapper = document.getElementById("reader-video-wrapper");
    if (m.videoUrl) {
        videoWrapper.style.display = "block";
        if (m.videoUrl.includes("youtube.com") || m.videoUrl.includes("youtu.be")) {
            videoWrapper.innerHTML = `<iframe src="${m.videoUrl}" allowfullscreen></iframe>`;
        } else {
            videoWrapper.innerHTML = `<video src="${m.videoUrl}" controls></video>`;
        }
    } else {
        videoWrapper.style.display = "none";
        videoWrapper.innerHTML = "";
    }
    
    // PDF document attachment
    const pdfAttachment = document.getElementById("reader-pdf-attachment");
    if (m.pdfName) {
        pdfAttachment.innerHTML = `
            <a href="pdf/${m.pdfName}" download class="btn btn-primary" style="width:100%; justify-content:center;">
                <i class="fa-solid fa-download"></i> Unduh ${m.pdfName}
            </a>
        `;
    } else {
        pdfAttachment.innerHTML = `<p style="font-size:0.8rem; color:var(--text-muted); text-align:center;">Tidak ada lampiran PDF.</p>`;
    }
    
    // Update action buttons state
    const isFav = db.profile.favorites.includes(id);
    const favBtn = document.getElementById("reader-favorite-btn");
    favBtn.innerHTML = isFav ? `<i class="fa-solid fa-heart" style="color:#ef4444;"></i> Simpan Favorit` : `<i class="fa-regular fa-heart"></i> Simpan Favorit`;
    
    const isCompleted = db.profile.completedMateri.includes(id);
    const completedBtn = document.getElementById("reader-completed-btn");
    if (isCompleted) {
        completedBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> Selesai`;
        completedBtn.className = "btn btn-secondary";
    } else {
        completedBtn.innerHTML = `<i class="fa-regular fa-circle-check"></i> Tandai Selesai`;
        completedBtn.className = "btn btn-primary";
    }
    
    logActivity(currentUser.name, "Membaca Materi", m.title);
}

function toggleMateriReaderFavorite() {
    toggleFavorite(activeReaderMateriId);
    const isFav = db.profile.favorites.includes(activeReaderMateriId);
    const favBtn = document.getElementById("reader-favorite-btn");
    favBtn.innerHTML = isFav ? `<i class="fa-solid fa-heart" style="color:#ef4444;"></i> Simpan Favorit` : `<i class="fa-regular fa-heart"></i> Simpan Favorit`;
}

function toggleMateriReaderCompleted() {
    const id = activeReaderMateriId;
    const index = db.profile.completedMateri.indexOf(id);
    const completedBtn = document.getElementById("reader-completed-btn");
    
    if (index === -1) {
        db.profile.completedMateri.push(id);
        completedBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> Selesai`;
        completedBtn.className = "btn btn-secondary";
        showToast("Materi ditandai selesai!", "success");
        logActivity(currentUser.name, "Menyelesaikan Materi", db.materi.find(item => item.id === id).title);
    } else {
        db.profile.completedMateri.splice(index, 1);
        completedBtn.innerHTML = `<i class="fa-regular fa-circle-check"></i> Tandai Selesai`;
        completedBtn.className = "btn btn-primary";
        showToast("Penanda selesai dilepas.", "info");
    }
    saveDatabase();
}


// ====================================================
//         6. QUIZ & TRYOUT ENGINES
// ====================================================

// Interactive Quiz System
let activeQuizQuestions = [];
let activeQuizTimer = null;
let activeQuizSeconds = 0;
let quizAnswers = {};

function initSiswaLatihanView() {
    document.getElementById("active-quiz-panel").style.display = "none";
    document.getElementById("quiz-result-panel").style.display = "none";
    
    const container = document.getElementById("latihan-subject-selection-container");
    container.style.display = "grid";
    container.innerHTML = "";
    
    // Group Latihan quizzes by subjects
    const subjectsWithQuizzes = db.questions
        .filter(q => q.category === "Latihan")
        .reduce((list, q) => {
            if (!list.includes(q.subject)) list.push(q.subject);
            return list;
        }, []);
        
    if (subjectsWithQuizzes.length === 0) {
        container.innerHTML = `
            <div class="empty-state glass-panel" style="grid-column: 1 / -1;">
                <div class="empty-state-icon"><i class="fa-regular fa-face-frown"></i></div>
                <h3>Belum ada kuis latihan soal.</h3>
                <p>Pengurus bimbingan belum membuat latihan soal untuk mapel Anda.</p>
            </div>
        `;
        return;
    }
    
    subjectsWithQuizzes.forEach(sub => {
        const count = db.questions.filter(q => q.category === "Latihan" && q.subject === sub).length;
        container.innerHTML += `
            <div class="materi-card glass-panel" style="text-align:center; padding:30px;">
                <div style="font-size: 2.5rem; color:var(--primary); margin-bottom:15px;"><i class="fa-solid fa-pen-nib"></i></div>
                <h3 class="materi-card-title">${sub}</h3>
                <p class="materi-card-desc">Latihan Soal Mandiri (${count} Soal)</p>
                <button class="btn btn-primary" style="width:100%; margin-top:15px;" onclick="startQuiz('${sub}')">
                    <i class="fa-solid fa-play"></i> Mulai Kuis
                </button>
            </div>
        `;
    });
}

function startQuiz(subject) {
    activeQuizQuestions = db.questions.filter(q => q.category === "Latihan" && q.subject === subject);
    if (activeQuizQuestions.length === 0) return;
    
    document.getElementById("latihan-subject-selection-container").style.display = "none";
    document.getElementById("active-quiz-panel").style.display = "block";
    document.getElementById("quiz-panel-title").innerText = `Latihan Soal - ${subject}`;
    
    quizAnswers = {};
    
    // Set timer: 10 minutes (600 seconds)
    activeQuizSeconds = 600;
    updateQuizTimerDisplay();
    
    clearInterval(activeQuizTimer);
    activeQuizTimer = setInterval(() => {
        activeQuizSeconds--;
        updateQuizTimerDisplay();
        if (activeQuizSeconds <= 0) {
            clearInterval(activeQuizTimer);
            submitQuiz(true);
        }
    }, 1000);
    
    // Render Questions
    const container = document.getElementById("quiz-questions-container");
    container.innerHTML = "";
    
    activeQuizQuestions.forEach((q, index) => {
        let questionHtml = `
            <div class="question-card glass-panel" id="quiz-qc-${q.id}">
                <div class="question-number">Nomor ${index + 1}</div>
                <div class="question-text">${q.text}</div>
        `;
        
        if (q.type === "PG") {
            questionHtml += `<div class="options-list">`;
            const letters = ["A", "B", "C", "D"];
            q.options.forEach((opt, oIdx) => {
                questionHtml += `
                    <div class="option-item" id="opt-quiz-${q.id}-${letters[oIdx]}" onclick="selectQuizOption('${q.id}', '${letters[oIdx]}')">
                        <div class="option-letter">${letters[oIdx]}</div>
                        <div class="option-text">${opt}</div>
                    </div>
                `;
            });
            questionHtml += `</div>`;
        } else if (q.type === "BS") {
            questionHtml += `<div class="options-list">`;
            const letters = ["A", "B"];
            q.options.forEach((opt, oIdx) => {
                questionHtml += `
                    <div class="option-item" id="opt-quiz-${q.id}-${letters[oIdx]}" onclick="selectQuizOption('${q.id}', '${letters[oIdx]}')">
                        <div class="option-letter">${letters[oIdx]}</div>
                        <div class="option-text">${opt}</div>
                    </div>
                `;
            });
            questionHtml += `</div>`;
        } else {
            // Fill-in
            questionHtml += `
                <div class="fill-input-group">
                    <input type="text" class="form-input" placeholder="Tuliskan jawaban singkat Anda di sini..." oninput="inputQuizText('${q.id}', this.value)">
                </div>
            `;
        }
        
        questionHtml += `</div>`;
        container.innerHTML += questionHtml;
    });
}

function updateQuizTimerDisplay() {
    const m = Math.floor(activeQuizSeconds / 60);
    const s = activeQuizSeconds % 60;
    document.getElementById("quiz-timer-countdown").innerText = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function selectQuizOption(qId, val) {
    quizAnswers[qId] = val;
    // UI update
    const letters = ["A", "B", "C", "D"];
    letters.forEach(l => {
        const el = document.getElementById(`opt-quiz-${qId}-${l}`);
        if (el) {
            if (l === val) {
                el.classList.add("selected");
            } else {
                el.classList.remove("selected");
            }
        }
    });
}

function inputQuizText(qId, val) {
    quizAnswers[qId] = val.trim();
}

function exitQuizAlert() {
    Swal.fire({
        title: 'Batalkan Kuis?',
        text: "Progres kuis latihan ini tidak akan disimpan.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ya, Batal!',
        cancelButtonText: 'Lanjut Mengerjakan'
    }).then((result) => {
        if (result.isConfirmed) {
            clearInterval(activeQuizTimer);
            initSiswaLatihanView();
        }
    });
}

function submitQuiz(force = false) {
    if (!force) {
        // Double check answers
        const unansweredCount = activeQuizQuestions.filter(q => !quizAnswers[q.id]).length;
        let warningText = "Anda akan mengumpulkan lembar latihan.";
        if (unansweredCount > 0) {
            warningText = `Masih ada ${unansweredCount} soal belum dijawab. Yakin ingin mengumpulkan?`;
        }
        
        Swal.fire({
            title: 'Kumpulkan Latihan?',
            text: warningText,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Kumpulkan!',
            cancelButtonText: 'Batal'
        }).then((result) => {
            if (result.isConfirmed) {
                calculateQuizResult();
            }
        });
    } else {
        Swal.fire("Waktu Habis!", "Jawaban kuis terkumpul otomatis.", "info");
        calculateQuizResult();
    }
}

function calculateQuizResult() {
    clearInterval(activeQuizTimer);
    
    let correct = 0;
    activeQuizQuestions.forEach(q => {
        const ans = quizAnswers[q.id];
        if (q.type === "IS") {
            if (ans && ans.toLowerCase() === q.answer.toLowerCase()) correct++;
        } else {
            if (ans === q.answer) correct++;
        }
    });
    
    const total = activeQuizQuestions.length;
    const score = total > 0 ? Math.round((correct / total) * 100) : 0;
    const wrong = total - correct;
    
    // Save to Database grades
    const quizSub = activeQuizQuestions[0].subject;
    const newGrade = {
        id: "gr-" + Date.now(),
        quizType: `Latihan (${quizSub})`,
        score,
        date: new Date().toISOString().split('T')[0]
    };
    db.grades.push(newGrade);
    
    // Trigger confetti if score is 100
    if (score === 100) {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
        showToast("Luar Biasa! Sempurna!", "success");
    }
    
    logActivity(currentUser.name, "Menyelesaikan Kuis", `${quizSub} (Skor: ${score})`);
    saveDatabase();
    
    // Update Result Panel
    document.getElementById("active-quiz-panel").style.display = "none";
    document.getElementById("quiz-result-panel").style.display = "block";
    document.getElementById("quiz-final-score").innerText = score;
    document.getElementById("quiz-correct-count").innerText = correct;
    document.getElementById("quiz-wrong-count").innerText = wrong;
    document.getElementById("quiz-score-percent").innerText = `${score}%`;
    
    // Build explanations
    const discList = document.getElementById("quiz-discussion-list");
    discList.innerHTML = `<h3>Pembahasan Latihan Soal</h3>`;
    
    activeQuizQuestions.forEach((q, index) => {
        const uAns = quizAnswers[q.id] || "Tidak Dijawab";
        let isCorrect = false;
        
        if (q.type === "IS") {
            isCorrect = uAns.toLowerCase() === q.answer.toLowerCase();
        } else {
            isCorrect = uAns === q.answer;
        }
        
        const ansColor = isCorrect ? "var(--success)" : "var(--danger)";
        const ansText = q.type === "PG" ? q.options[q.answer.charCodeAt(0) - 65] || q.answer : q.answer;
        
        discList.innerHTML += `
            <div class="question-card glass-panel" style="border-left: 5px solid ${ansColor}; margin-top: 15px;">
                <div class="question-number">Pembahasan Soal ${index + 1}</div>
                <div class="question-text" style="font-size:1rem; margin-bottom:10px;">${q.text}</div>
                <div style="font-size:0.85rem; margin-bottom:10px;">
                    <p>Jawaban Anda: <strong style="color:${ansColor};">${uAns}</strong></p>
                    <p>Kunci Jawaban: <strong style="color:var(--success);">${q.answer} (${ansText})</strong></p>
                </div>
                <div style="background:var(--bg-tertiary); padding:15px; border-radius:var(--radius-sm); font-size:0.85rem;">
                    <strong>Penjelasan:</strong>
                    <p style="margin-top:5px; color:var(--text-secondary);">${q.explanation}</p>
                </div>
            </div>
        `;
    });
}

function showQuizPembahasan() {
    document.getElementById("quiz-discussion-list").scrollIntoView({ behavior: 'smooth' });
}


// --- Try Out Akbar Engine ---
let activeToQuestions = [];
let activeToTimer = null;
let activeToSeconds = 0;
let toAnswers = {};
let activeToObj = null;

function initSiswaTryoutView() {
    document.getElementById("active-tryout-panel").style.display = "none";
    const frontPanel = document.getElementById("tryout-front-panel");
    frontPanel.style.display = "grid";
    
    // Render tryout table
    const tableBody = document.getElementById("siswa-tryout-table-body");
    tableBody.innerHTML = "";
    
    if (db.tryouts.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="4" style="text-align:center;">Belum ada jadwal Try Out yang aktif.</td></tr>`;
    } else {
        db.tryouts.forEach(t => {
            tableBody.innerHTML += `
                <tr>
                    <td><strong>${t.name}</strong></td>
                    <td><i class="fa-regular fa-clock"></i> ${t.duration} Menit</td>
                    <td>${t.questionsCount} Soal</td>
                    <td>
                        <button class="btn btn-primary" onclick="startTryout('${t.id}')">Ikuti Ujian</button>
                    </td>
                </tr>
            `;
        });
    }
    
    // Render leaderboard
    renderLeaderboard();
}

function renderLeaderboard() {
    const container = document.getElementById("siswa-leaderboard-ranking");
    container.innerHTML = "";
    
    // Sort leaderboard desc
    const sorted = db.leaderboard.sort((a, b) => b.score - a.score);
    sorted.forEach((item, index) => {
        const rank = index + 1;
        let rankClass = `ranking-rank-${rank}`;
        container.innerHTML += `
            <div class="ranking-row glass-panel">
                <div style="display:flex; align-items:center; gap: 10px;">
                    <span class="ranking-rank ${rankClass}">${rank}</span>
                    <strong style="font-size:0.9rem;">${item.name}</strong>
                </div>
                <span class="badge badge-primary">${item.score}</span>
            </div>
        `;
    });
}

// Fisher-Yates Question Shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startTryout(id) {
    activeToObj = db.tryouts.find(t => t.id === id);
    if (!activeToObj) return;
    
    const allQuestions = db.questions.filter(q => q.category === "TryOut" && q.subject === activeToObj.name);
    if (allQuestions.length === 0) {
        showToast("Bank Soal Try Out masih kosong. Hubungi admin.", "warning");
        return;
    }
    
    // Shuffle and slice questions
    activeToQuestions = shuffleArray(JSON.parse(JSON.stringify(allQuestions))).slice(0, activeToObj.questionsCount);
    toAnswers = {};
    
    document.getElementById("tryout-front-panel").style.display = "none";
    document.getElementById("active-tryout-panel").style.display = "block";
    document.getElementById("tryout-panel-title").innerText = `Try Out Akbar - ${activeToObj.name}`;
    
    activeToSeconds = activeToObj.duration * 60;
    updateTryoutTimerDisplay();
    
    clearInterval(activeToTimer);
    activeToTimer = setInterval(() => {
        activeToSeconds--;
        updateTryoutTimerDisplay();
        if (activeToSeconds <= 0) {
            clearInterval(activeToTimer);
            submitTryout(true);
        }
    }, 1000);
    
    // Render shuffled questions
    const container = document.getElementById("tryout-questions-container");
    container.innerHTML = "";
    
    activeToQuestions.forEach((q, index) => {
        let questionHtml = `
            <div class="question-card glass-panel" id="to-qc-${q.id}">
                <div class="question-number">Nomor ${index + 1}</div>
                <div class="question-text">${q.text}</div>
        `;
        
        if (q.type === "PG") {
            questionHtml += `<div class="options-list">`;
            const letters = ["A", "B", "C", "D"];
            q.options.forEach((opt, oIdx) => {
                questionHtml += `
                    <div class="option-item" id="opt-to-${q.id}-${letters[oIdx]}" onclick="selectTryoutOption('${q.id}', '${letters[oIdx]}')">
                        <div class="option-letter">${letters[oIdx]}</div>
                        <div class="option-text">${opt}</div>
                    </div>
                `;
            });
            questionHtml += `</div>`;
        } else if (q.type === "BS") {
            questionHtml += `<div class="options-list">`;
            const letters = ["A", "B"];
            q.options.forEach((opt, oIdx) => {
                questionHtml += `
                    <div class="option-item" id="opt-to-${q.id}-${letters[oIdx]}" onclick="selectTryoutOption('${q.id}', '${letters[oIdx]}')">
                        <div class="option-letter">${letters[oIdx]}</div>
                        <div class="option-text">${opt}</div>
                    </div>
                `;
            });
            questionHtml += `</div>`;
        } else {
            questionHtml += `
                <div class="fill-input-group">
                    <input type="text" class="form-input" placeholder="Tuliskan jawaban singkat Anda..." oninput="inputTryoutText('${q.id}', this.value)">
                </div>
            `;
        }
        
        questionHtml += `</div>`;
        container.innerHTML += questionHtml;
    });
}

function updateTryoutTimerDisplay() {
    const m = Math.floor(activeToSeconds / 60);
    const s = activeToSeconds % 60;
    document.getElementById("tryout-timer-countdown").innerText = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function selectTryoutOption(qId, val) {
    toAnswers[qId] = val;
    const letters = ["A", "B", "C", "D"];
    letters.forEach(l => {
        const el = document.getElementById(`opt-to-${qId}-${l}`);
        if (el) {
            if (l === val) {
                el.classList.add("selected");
            } else {
                el.classList.remove("selected");
            }
        }
    });
}

function inputTryoutText(qId, val) {
    toAnswers[qId] = val.trim();
}

function exitTryoutAlert() {
    Swal.fire({
        title: 'Keluar Try Out?',
        text: "Seluruh progres Try Out ini akan hilang dan dianggap gugur.",
        icon: 'danger',
        showCancelButton: true,
        confirmButtonText: 'Ya, Keluar!',
        cancelButtonText: 'Kembali Ujian'
    }).then((result) => {
        if (result.isConfirmed) {
            clearInterval(activeToTimer);
            initSiswaTryoutView();
        }
    });
}

function submitTryout(force = false) {
    if (!force) {
        const unansweredCount = activeToQuestions.filter(q => !toAnswers[q.id]).length;
        let warningText = "Anda akan mengumpulkan ujian Try Out.";
        if (unansweredCount > 0) {
            warningText = `Masih ada ${unansweredCount} soal belum dijawab. Tetap kumpulkan?`;
        }
        
        Swal.fire({
            title: 'Kumpulkan Ujian?',
            text: warningText,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Kumpulkan!',
            cancelButtonText: 'Batal'
        }).then((result) => {
            if (result.isConfirmed) {
                calculateTryoutResult();
            }
        });
    } else {
        Swal.fire("Waktu Ujian Habis!", "Lembar jawaban Try Out dikumpulkan otomatis.", "info");
        calculateTryoutResult();
    }
}

function calculateTryoutResult() {
    clearInterval(activeToTimer);
    
    let correct = 0;
    activeToQuestions.forEach(q => {
        const ans = toAnswers[q.id];
        if (q.type === "IS") {
            if (ans && ans.toLowerCase() === q.answer.toLowerCase()) correct++;
        } else {
            if (ans === q.answer) correct++;
        }
    });
    
    const total = activeToQuestions.length;
    const score = total > 0 ? Math.round((correct / total) * 100) : 0;
    
    // Save grade
    db.grades.push({
        id: "gr-" + Date.now(),
        quizType: `Try Out (${activeToObj.name})`,
        score,
        date: new Date().toISOString().split('T')[0]
    });
    
    // Update Leaderboard
    const studentLboardIndex = db.leaderboard.findIndex(i => i.name === db.profile.name);
    if (studentLboardIndex !== -1) {
        if (score > db.leaderboard[studentLboardIndex].score) {
            db.leaderboard[studentLboardIndex].score = score;
        }
    } else {
        db.leaderboard.push({ name: db.profile.name, score });
    }
    
    // Confetti on 100
    if (score === 100) {
        confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.5 }
        });
    }
    
    logActivity(currentUser.name, "Menyelesaikan Try Out", `${activeToObj.name} (Skor: ${score})`);
    saveDatabase();
    
    Swal.fire({
        title: 'Try Out Selesai!',
        text: `Anda memperoleh nilai: ${score} dari ${total} soal.`,
        icon: 'success',
        confirmButtonText: 'Tutup'
    }).then(() => {
        initSiswaTryoutView();
    });
}


// ====================================================
//         7. ATTENDANCE (ABSENSI) MODULES
// ====================================================

function initSiswaAbsensiView() {
    // Current time clock
    function updateClock() {
        const now = new Date();
        const clockEl = document.getElementById("digital-clock");
        const dateEl = document.getElementById("attendance-today-date");
        if (clockEl) {
            clockEl.innerText = now.toTimeString().split(' ')[0];
        }
        if (dateEl) {
            const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
            const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
            dateEl.innerText = `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
        }
    }
    updateClock();
    setInterval(updateClock, 1000);
    
    renderAttendanceUI();
}

function renderAttendanceUI() {
    const today = new Date().toISOString().split('T')[0];
    const todaysLog = db.attendance.find(a => a.date === today);
    
    const checkinBtn = document.getElementById("attendance-checkin-btn");
    const checkoutBtn = document.getElementById("attendance-checkout-btn");
    const statusText = document.getElementById("attendance-status-text");
    
    if (todaysLog) {
        if (todaysLog.checkOut !== "-") {
            checkinBtn.disabled = true;
            checkoutBtn.disabled = true;
            statusText.innerHTML = `Status: <span class="badge badge-success">Sudah Check-Out</span>`;
        } else {
            checkinBtn.disabled = true;
            checkoutBtn.disabled = false;
            statusText.innerHTML = `Status: <span class="badge badge-info">Aktif Belajar (Check-in pukul ${todaysLog.checkIn})</span>`;
        }
    } else {
        checkinBtn.disabled = false;
        checkoutBtn.disabled = true;
        statusText.innerHTML = `Status: <span class="badge badge-warning">Belum Presensi</span>`;
    }
    
    // History Table
    const table = document.getElementById("siswa-attendance-history-body");
    table.innerHTML = "";
    if (db.attendance.length === 0) {
        table.innerHTML = `<tr><td colspan="4" style="text-align:center;">Belum ada riwayat presensi.</td></tr>`;
    } else {
        db.attendance.forEach(a => {
            const statusBadge = a.checkOut !== "-" ? `<span class="badge badge-success">Selesai</span>` : `<span class="badge badge-warning">Belum Checkout</span>`;
            table.innerHTML += `
                <tr>
                    <td><strong>${a.date}</strong></td>
                    <td>${a.checkIn}</td>
                    <td>${a.checkOut}</td>
                    <td>${statusBadge}</td>
                </tr>
            `;
        });
    }
}

function handleAttendance(action) {
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    const timeStr = String(now.getHours()).padStart(2, '0') + ":" + String(now.getMinutes()).padStart(2, '0');
    
    if (action === 'checkin') {
        db.attendance.unshift({
            date: today,
            checkIn: timeStr,
            checkOut: "-"
        });
        logActivity(currentUser.name, "Presensi Masuk", `Check-in pukul ${timeStr}`);
        showToast("Berhasil melakukan presensi masuk!", "success");
    } else {
        const todaysLog = db.attendance.find(a => a.date === today);
        if (todaysLog) {
            todaysLog.checkOut = timeStr;
            logActivity(currentUser.name, "Presensi Keluar", `Check-out pukul ${timeStr}`);
            showToast("Berhasil melakukan presensi keluar!", "success");
        }
    }
    saveDatabase();
    renderAttendanceUI();
}


// ====================================================
//         8. CHAT CLIENT SIMULATOR
// ====================================================

let activeMentorId = "";

function initSiswaChatView() {
    const sidebar = document.getElementById("chat-channel-list");
    sidebar.innerHTML = "";
    
    if (!db.mentors || db.mentors.length === 0) {
        sidebar.innerHTML = `<div style="padding:15px; text-align:center; color:var(--text-muted); font-size:0.8rem;">Belum ada mentor aktif.</div>`;
        document.getElementById("active-chat-avatar").innerText = "?";
        document.getElementById("active-chat-name").innerText = "Tidak ada mentor aktif";
        document.getElementById("chat-messages-container").innerHTML = `<div style="padding:40px; text-align:center; color:var(--text-muted); font-size:0.85rem;">Hubungi admin untuk menambahkan mentor baru di panel Kelola Mentor.</div>`;
        return;
    }
    
    // Pick active mentor
    const isValidActive = db.mentors.some(m => m.id === activeMentorId);
    if (!isValidActive) {
        activeMentorId = db.mentors[0].id;
    }
    
    db.mentors.forEach(m => {
        const activeClass = m.id === activeMentorId ? "active" : "";
        sidebar.innerHTML += `
            <div class="chat-channel-item ${activeClass}" onclick="switchChatMentor('${m.id}')">
                <div class="chat-channel-avatar">${m.initials}</div>
                <div class="chat-channel-details">
                    <div class="chat-channel-name">${m.name}</div>
                    <div class="chat-channel-status" style="font-size:0.7rem; color:var(--text-muted);">${m.subject}</div>
                </div>
            </div>
        `;
    });
    
    updateChatPanel();
}

function switchChatMentor(id) {
    activeMentorId = id;
    initSiswaChatView();
}

function updateChatPanel() {
    if (!db.mentors || db.mentors.length === 0) return;
    const activeMentor = db.mentors.find(m => m.id === activeMentorId);
    if (!activeMentor) return;
    
    document.getElementById("active-chat-avatar").innerText = activeMentor.initials;
    document.getElementById("active-chat-name").innerText = `${activeMentor.name} (Tentor ${activeMentor.subject})`;
    
    // Filter messages for current mentor channel (stored in local database)
    const container = document.getElementById("chat-messages-container");
    container.innerHTML = "";
    
    const relevantChats = db.chats.filter(c => 
        (c.sender === "siswa" && c.receiver === activeMentorId) ||
        (c.sender === activeMentorId && c.receiver === "siswa")
    );
    
    if (relevantChats.length === 0) {
        container.innerHTML = `<div style="padding:40px 20px; text-align:center; color:var(--text-muted); font-size:0.85rem;">
            Belum ada percakapan. Mulailah menyapa ${activeMentor.name}!
        </div>`;
    } else {
        relevantChats.forEach(msg => {
            const senderClass = msg.sender === "siswa" ? "student" : "teacher";
            container.innerHTML += `
                <div class="chat-bubble ${senderClass}">
                    <div>${msg.text}</div>
                    <div class="chat-bubble-time">${msg.time}</div>
                </div>
            `;
        });
    }
    
    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
}

function handleChatKeyPress(event) {
    if (event.key === "Enter") {
        sendChatMessage();
    }
}

function sendChatMessage() {
    const input = document.getElementById("chat-message-input");
    const text = input.value.trim();
    if (!text || !db.mentors || db.mentors.length === 0) return;
    
    const now = new Date();
    const timeStr = String(now.getHours()).padStart(2, '0') + ":" + String(now.getMinutes()).padStart(2, '0');
    
    // Add student message
    db.chats.push({
        sender: "siswa",
        receiver: activeMentorId,
        text,
        time: timeStr
    });
    
    input.value = "";
    updateChatPanel();
    saveDatabase();
    
    // Simulate Mentor automatic response
    setTimeout(() => {
        const activeMentor = db.mentors.find(m => m.id === activeMentorId);
        if (!activeMentor) return;
        
        let reply = `Halo! Terima kasih atas pertanyaannya terkait ${activeMentor.subject}. Kakak akan segera membantumu ya!`;
        const lowerText = text.toLowerCase();
        
        if (lowerText.includes("halo") || lowerText.includes("permisi")) {
            reply = `Halo! Saya ${activeMentor.name}, mentor ${activeMentor.subject} Anda. Ada materi atau kuis yang ingin didiskusikan hari ini?`;
        } else if (lowerText.includes("tanya") || lowerText.includes("soal") || lowerText.includes("susah")) {
            reply = "Tentu! Silakan tulis detail soal atau materi bab mana yang membingungkan agar Kakak bisa bantu coret-coret dan jelaskan.";
        } else if (lowerText.includes("try out") || lowerText.includes("tryout") || lowerText.includes("utbk")) {
            reply = "Untuk kuis Try Out, silakan klik menu Try Out di sidebar kiri. Kerjakan dengan teliti ya!";
        }
        
        db.chats.push({
            sender: activeMentorId,
            receiver: "siswa",
            text: reply,
            time: timeStr
        });
        updateChatPanel();
        saveDatabase();
    }, 1500);
}


// ====================================================
//         9. PROFILE MANAGER
// ====================================================

function initSiswaProfileView() {
    document.getElementById("profile-avatar-img").src = db.profile.avatar;
    document.getElementById("profile-full-name").innerText = db.profile.name;
    document.getElementById("profile-tag-class").innerText = `${db.profile.className} • ${db.profile.school}`;
    
    document.getElementById("profile-name").value = db.profile.name;
    document.getElementById("profile-school").value = db.profile.school;
    document.getElementById("profile-email").value = db.profile.email;
    document.getElementById("profile-phone").value = db.profile.phone;
    
    // Class selector options
    const classSel = document.getElementById("profile-class");
    classSel.innerHTML = db.classes.map(c => `<option value="${c}">${c}</option>`).join("");
    classSel.value = db.profile.className;
}

function previewAvatar(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            db.profile.avatar = e.target.result;
            document.getElementById("profile-avatar-img").src = e.target.result;
            document.getElementById("nav-avatar").src = e.target.result;
            saveDatabase();
            showToast("Foto profil diperbarui!", "success");
        };
        reader.readAsDataURL(file);
    }
}

function saveProfile(event) {
    event.preventDefault();
    db.profile.name = document.getElementById("profile-name").value.trim();
    db.profile.className = document.getElementById("profile-class").value;
    db.profile.school = document.getElementById("profile-school").value.trim();
    db.profile.email = document.getElementById("profile-email").value.trim();
    db.profile.phone = document.getElementById("profile-phone").value.trim();
    
    currentUser.name = db.profile.name;
    
    saveDatabase();
    initSiswaProfileView();
    
    // Update navbar indicators
    document.getElementById("nav-user-name").innerText = currentUser.name;
    document.getElementById("nav-user-role").innerText = db.profile.className;
    
    showToast("Profil kredensial berhasil disimpan!", "success");
}


// Initialize Application State on Page Load
initDatabase();
initTheme();
