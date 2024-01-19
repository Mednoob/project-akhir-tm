import TWFRI from "./components/TextWithFloatRightImage";
import CLIR from "./components/ContentLeftImageRight";
import TTIB from "./components/TextTopImageBottom";
import MidText from "./components/MidText";

export const ethnics: Ethnic[] = [
    {
        name: "Suku Aceh",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <MidText>
                        Suku Aceh merupakan salah satu suku yang mendiami Provinsi Aceh. Letak geografis Aceh sangat strategis, yaitu berada di sepanjang Selat Malaka dan dikelilingi dua teluk (Teluk Benggala dan Teluk Persia).
                    </MidText>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <MidText>
                        Asal-usul suku Aceh merupakan gabungan dari berbagai bangsa. Aceh merupakan singkatan dari Arab, China, Eropa, dan Hindia. Pendapat tersebut tersebut berdasarkan karakteristik morfologi wajah orang dewasa Aceh berdasarkan pada keturunan Arab, China, Eropa, dan Hindia.
                    </MidText>
                )
            },
            {
                name: "Adat",
                content: (
                    <div className="w-full h-full flex flex-col justify-center items-center p-10 gap-10">
                        <p className="text-xl">Asal-usul suku Aceh merupakan gabungan dari berbagai bangsa. Aceh merupakan singkatan dari Arab, China, Eropa, dan Hindia. Pendapat tersebut tersebut berdasarkan karakteristik morfologi wajah orang dewasa Aceh berdasarkan pada keturunan Arab, China, Eropa, dan Hindia.</p>
                        <div className="w-full flex justify-evenly">
                            <div className="h-44 flex flex-col items-center gap-1">
                                <img src="/rumoh-aceh.png" className="h-full"/>
                                <p className="text-xs text-gray-600 italic">Rumoh Aceh</p>
                            </div>
                            <div className="h-44 flex flex-col items-center gap-1">
                                <img src="/saman.png" className="h-full"/>
                                <p className="text-xs text-gray-600 italic">Tari Saman</p>
                            </div>
                        </div>
                    </div>
                )
            }
        ]
    },
    {
        name: "Suku Gayo",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <MidText>
                        Suku Gayo menjadi salah satu kelompok etnis di Pulau Sumatera yang turut mewarnai keragaman masyarakat di Indonesia. Suku Gayo adalah penduduk asli yang berasal dari Dataran Tinggi Gayo di Provinsi Aceh bagian Tengah.
                    </MidText>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <MidText>
                        Suku Gayo termasuk ke dalam golongan ras Proto Melayu yang berasal dari India. Masyarakat setempat percaya bahwa nama Gayo berasal dari kata pegayon yang berarti sumber air jernih tempat ikan suci dan kepiting. Salah satu versi menyebut asal-usul Suku Gayo berhubungan dengan Kerajaan Linge yang berdiri sekitar tahun 416 Hijriyah atau 1025 Masehi.
                    </MidText>
                )
            },
            {
                name: "Adat",
                content: (
                    <div className="w-full h-full flex justify-center items-center p-10 gap-10">
                        <div className="flex flex-col items-center w-full gap-3">
                            <p className="text-xl">Ciri khas Suku Gayo dapat diamati dari cara hidup serta hasil budaya yang masih dapat diamati hingga saat ini. Masyarakat Gayo dalam kesehariannya berkomunikasi menggunakan bahasa Gayo sebagai bahasa daerah. Sebagian besar Suku Gayo memeluk agama Islam, di mana agama ini berpengaruh besar pada tradisi lokal.</p>
                            <ol className="list-decimal text-xl">
                                <li>Rumah adat Suku Gayo berbentuk panggung yang dikenal dengan nama Umah Pitu Ruang yang berarti rumah tujuh ruang.</li>
                                <li>Pakaian adat Gayo untuk laki laki disebut Aman Mayok, sedangkan untuk perempuan disebut Inneun Mayok.</li>
                                <li>Masyarakat Gayo hidup dalam komunitas kecil yang disebut kampong yang dipimpin oleh seorang gecik.</li>
                            </ol>
                        </div>
                        <div className="w-80 flex flex-col items-center gap-1">
                            <img src="/adat-gayo.png" className="w-full"/>
                            <p className="text-xs text-gray-600 italic">Adat Istiadat Gayo.</p>
                        </div>
                    </div>
                )
            }
        ]
    },
    {
        name: "Suku Minangkabau",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <div className="w-full h-full flex justify-center items-center p-10">
                        <p className="text-xl">Suku Minangkabau adalah salah satu suku bangsa yang mendiami Provinsi Sumatera Barat. Suku Minangkabau merupakan suku bangsa terbesar di Sumatera Barat. Suku Minangkabau juga merupakan suku bangsa terbesar kelima di Indonesia.</p>
                    </div>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <div className="w-full h-full flex justify-center items-center p-10">
                        <p className="text-xl">Asal-usul nama Minang bermula dari peristiwa yang terjadi di Sumatera Barat pada masa lalu. Pada masa pemerintahan Kerajaan Pagaruyung, muncul isu mengenai penyerangan Kerajaan Majapahit dari Jawa ke Kerajaan Pagaruyung. Peristiwa ini terjadi di sebuah desa di Kecamatan Sungayang, Tanah Datar, Sumatera Barat. Atas usul kedua belah pihak terjadi adu kerbau. Dimana, kerbau itu mewakili peperangan kedua kerajaan.</p>
                    </div>
                )
            },
            {
                name: "Adat",
                content: (
                    <div className="w-full p-10">
                        <div className="w-80 float-right flex flex-col items-center text-center gap-1 m-8">
                            <img src="/adat-minang.png" className="w-full"/>
                            <p className="text-xs text-gray-600 italic">Sejumlah orang melakukan Tari Piring di depan Rumah Gadang.</p>
                        </div>
                        <p className="w-full text-xl whitespace-pre-line">Suku Minang menggunakan bahasa Minangkabau atau Minang sebagai bahasa sehari-hari.

Ada sejumlah alat musik tradisional di Minangkabau. Instrumen musik tersebut digunakan untuk mengiringi tarian atau upacara adat. Sejumlah alat musik tradisional Minangkabau, yaitu saluang (seruling panjang), talempong (bonang Minang), rabab, aguang, sarunai, maupun pupuik tanduak

Sejumlah tari tradisional di Minangkabau seperti Tari Piring, Tari Lilin, Tari Payung, Tari Rantak, Tari Indang, maupun Tari Pasambahan.
Rumah adat suku Minang adalah Rumah Gadang, rumah adat ini juga disebut sebagai Rumah Godang, Bagonjong, dan Baanjuang.
                        </p>
                    </div>
                )
            }
        ]
    },

    {
        name: "Suku Batak",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <div className="w-full h-full flex justify-center items-center p-10">
                        <p className="text-xl">Suku Batak merupakan suku yang berasal dari Sumatera Utara dari rumpun etnis yang mendiami sebagian besar wilayah di beberapa kabupaten di Sumatera Utara seperti Kabupaten Karo, Dairi, Simalungun, Asahan, dan Tapanuli Utara.</p>
                    </div>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <div className="w-full h-full flex justify-center items-center p-10">
                        <p className="text-xl whitespace-pre-line">Nenek moyang dari Suku Batak merupakan kelompok Proto Melayu atau yang biasa disebut juga sebagai Melayu Tua. Pada mulanya kelompok Proto Melayu berasal dari Asia Selatan. Lalu kemudian mereka bermigrasi ke Indonesia melalui Pulau Sumatera lewat Semenanjung Malaya.
<br /> <br />
Setelah sampai di Pulau Sumatera, kelompok tersebut menetap di sekitar Danau Toba, Sumatera Utara.
                        </p>
                    </div>
                )
            },
            {
                name: "Adat",
                content: (
                    <div className="w-full flex items-center p-10">
                        <p className="w-full text-xl whitespace-pre-line">Rumah adat Suku Batak dinamakan Rumah Bolon.
<br /><br />
Tari Tor-tor merupakan tari khas Sumatera Utara lebih tepatnya tari tradisional dari Suku Batak.
<br /><br />
Salah satu tradisi dari Suku Batak adalah Mangulosi. Mangulosi merupakan acara pemberian kain tenun khas Batak yaitu kain Ulos oleh sosok yang dituakan atau disebut dengan hula-hula.
                        </p>
                        <div className="w-96 flex flex-col items-center text-center gap-1 m-8">
                            <img src="/adat-batak.png" className="w-full"/>
                            <p className="text-xs text-gray-600 italic">Rumah Bolon.</p>
                        </div>
                    </div>
                )
            }
        ]
    },
    {
        name: "Suku Melayu",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <div className="w-full h-full flex justify-center items-center p-10">
                        <p className="text-xl">Suku melayu merupakan salah satu kelompok etnis terbesar di Indonesia.  Umumnya masyarakat suku ini bermukim di Pulau Sumatera,  pesisir pantai Kalimantan di Indonesia.</p>
                    </div>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <div className="w-full h-full flex justify-center items-center p-10">
                        <p className="text-xl whitespace-pre-line">Melayu secara etimologi pada awalnya nama tempat (toponim) yang menyebutkan suatu lokasi di Sumatra. Hingga abad ke-15, istilah Melayu mulai digunakan untuk merujuk pada nama suku.
<br/><br/>
Nama Melayu kemungkinan juga berasal dari penyebutan salah satu sungai di Pulau Sumatera, yaitu Sungai Melayu.
<br/><br/>
Berbagai pendapat menyebutkan jika istilah itu berasal dari kata "melaju" yang awalannya 'me' dan akar kata 'laju' yang menunjukan kuatnya arus pada sungai itu.
</p>
                    </div>
                )
            },
            {
                name: "Tradisi & Adat",
                content: (
                    (
                        <div className="w-full flex items-center p-10">
                            <ol className="w-full flex flex-col gap-3 list-decimal">
                                <li>
                                    <p className="font-bold">Pantun</p>
                                    <p>Pantun adalah cara komunikasi suku Melayu yang sangat khas yang menyampaikan tutur bahasa sopan, halus, dan enak didengar. Pantun merupakan tradisi yang sudah sangat melekat bagi suku Melayu.</p>
                                </li>
                                <li>
                                    <p className="font-bold">Tepung Tawar</p>
                                    <p>Tradisi tepuk tepung tawar adalah suatu upacara adat budaya Melayu peninggalan para Raja-raja terdahulu. Tepuk tepung tawar adalah upacara adat dan juga bentuk persembahan syukur atas tekabulnya suatu keinginan atau usaha.</p>
                                </li>
                                <li>
                                    <p className="font-bold">Tradisi Pernikahan</p>
                                    <p>Bagi mempelai wanita Melayu, sebelum menikah calon pengantin dilarang berpergian kecuali mendapat izin dari orang tuanya. Satu minggu sebelum menikah dilarang keras berpergian dan juga 3 hari sebelum menikah juga dilarang bepergian.</p>
                                </li>
                            </ol>
                            <div className="w-96 flex flex-col items-center text-center m-8 gap-8">
                                <div className="w-full flex flex-col items-center gap-1">
                                    <img src="/selaso-jatuh-kembar.png" className="w-full"/>
                                    <p className="text-xs text-gray-600 italic">Rumah Selaso Jatuh Kembar.</p>
                                </div>
                                <div className="w-full flex flex-col items-center gap-1">
                                    <img src="/pakaian-melayu-riau.png" className="w-full"/>
                                    <p className="text-xs text-gray-600 italic">Pakaian adat pengantin khas Melayu Riau.</p>
                                </div>
                            </div>
                        </div>
                    )
                )
            }
        ]
    },
    {
        name: "Suku Nias",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <div className="w-full h-full flex justify-center items-center p-10">
                        <p className="text-xl">Suku Nias adalah salah satu suku bangsa yang mendiami Pulau Nias yang terletak di sebelah barat Pulau Sumatera.</p>
                    </div>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <div className="w-full h-full flex justify-center items-center p-10">
                        <p className="text-xl">Mengutip buku <i>Mencari Jejak Nenek Moyang Nias Sesungguhnya</i>, dalam kepercayaan suku Nias, mereka percaya bahwa leluhur mereka berasal dari langit dan turun di wilayah tengah pulau yang bernama Gomo.</p>
                    </div>
                )
            },
            {
                name: "Tradisi",
                content: (
                    <div className="w-full flex items-center p-10">
                            <ol className="w-full flex flex-col gap-3 list-decimal">
                                <li>
                                    <p className="font-bold">Tradisi Fahombo</p>
                                    <p>Tradisi Fahombo merupakan salah satu tradisi yang paling terkenal dari suku Nias. Dalam tradisi ini, pemuda harus melompati tumpukan batu setinggi sekitar 2-3 meter.
<br />
Kegiatan ini menunjukkan keberanian, kekuatan dan keterampilan pemuda dalam menghadapi tantangan.
</p>
                                </li>
                                <li>
                                    <p className="font-bold">Tari Fataele</p>
                                    <p>Tari ini merupakan tarian peperangan yang memiliki nuansa mistis. Hal ini menunjukan bahwa kebudayaan suku Nias di masa lampau tidak bisa lepas dari perebutan wilayah.</p>
                                </li>
                                <li>
                                    <p className="font-bold">Tari Maena</p>
                                    <p>Tari ini merupakan tarian yang memiliki gerakan sederhana. Tari ini dilakukan dengan diiringan alat musik tradisional yang bernama maena.</p>
                                </li>
                                <li>
                                    <p className="font-bold">Ya'ahowu Festival</p>
                                    <p>Festival ini merupakan festival yang ditunjukan untuk mengenalkan berbagai kebudayaan dan tradisi suku Nias ke tengah publik.</p>
                                </li>
                            </ol>
                            <div className="w-96 flex flex-col items-center text-center m-8 gap-8">
                                <div className="w-full flex flex-col items-center gap-1">
                                    <img src="/lompat-batu.png" className="w-full"/>
                                    <p className="text-xs text-gray-600 italic">Tradisi Fahombo / Lompat Batu.</p>
                                </div>
                                <div className="w-full flex flex-col items-center gap-1">
                                    <img src="/fataele.png" className="w-full"/>
                                    <p className="text-xs text-gray-600 italic">Tari Fataele.</p>
                                </div>
                            </div>
                        </div>
                )
            }
        ]
    },

    "Suku India",
    "Suku Tionghoa",
    "Suku Arab",

    {
        name: "Suku Mentawai",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <div className="w-full h-full flex justify-center items-center p-10">
                        <p className="text-xl">Suku Mentawai adalah suku asli yang menetap di Kepulauan Mentawai, Pulau Siberut, Sumatera Barat. Suku Mentawai berada di pedalaman.</p>
                    </div>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <div className="w-full h-full flex justify-center items-center p-10">
                        <p className="text-xl">Kepulauan Mentawai memiliki empat pulau utama, yaitu Pagai Utara, Pagai Selatan, Sipora, dan Siberut. Wilayah tersebut memiliki luas sekitar 4.489 Km. Dengan jumlah penghuni sekitar 30 ribuan jiwa. Diyakini, para nenek moyang suku Mentawai telah bermigrasi ke wilayah ini antara 2000-500 SM. Suku Mentawai memiliki kebudayaan yang sangat kuat yang hingga saat ini masih terjaga di tengah arus modernisasi.</p>
                    </div>
                )
            },
            {
                name: "Adat",
                content: (
                    <div className="w-full h-full flex flex-col justify-center items-center p-10 gap-10">
                        <p className="text-xl">Suku Mentawai memiliki agama dan kepercayaan sendiri yang dianut suku asli dan masyarakat Mentawai, yaitu Sabulungan.
<br /><br />
Masyarakat suku Mentawai tinggal bersama dalam rumah adat yang disebut Uma. Rumah adat ini berdiri di atas tanah-tanah suku.
                        </p>
                        <div className="w-full flex justify-evenly">
                            <div className="h-44 flex flex-col items-center gap-1">
                                <img src="/orang-mentawai.png" className="h-full"/>
                                <p className="text-xs text-gray-600 italic">Orang Suku Mentawai.</p>
                            </div>
                            <div className="h-44 flex flex-col items-center gap-1">
                                <img src="/uma.png" className="h-full"/>
                                <p className="text-xs text-gray-600 italic">Rumah Uma.</p>
                            </div>
                        </div>
                    </div>
                )
            }
        ]
    },

    {
        name: "Suku Anak Dalam",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <div className="w-full h-full flex justify-center items-center p-10">
                        <p className="text-xl">Suku Anak Dalam adalah sekelompok masyarakat etnis yang tinggal di pedalaman hutan Sumatra, tepatnya di wilayah Jambi.</p>
                    </div>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <div className="w-full h-full flex justify-center items-center p-10">
                        <p className="text-xl">Menurut sejarah, kisah suku Anak Dalam diawali sejak masa Kerajaan Jambi di tahun 1624.
<br/><br/>
Pada saat itu, terdapat pertikaian antara Kerajaan Jambi dan Kesultanan Palembang. Pertikaian itu memicu adanya pertempuran yang terjadi di hutan rimba Air Hitam pada tahun 1629.
<br/><br/>
Nah, masyarakat yang tersisa dari pertempuran ini pun tetap hidup di hutan rimba dan terbagi menjadi dua kelompok. Kelompok ini tetap disebut dengan suku Anak Dalam dengan ciri fisik, bahasa, hingga kebiasaan yang berbeda.</p>
                    </div>
                )
            },
            {
                name: "Tradisi",
                content: (
                    <div className="w-full h-full flex flex-col justify-center items-center p-10 gap-10">
                        <p className="text-xl">Masyarakat suku Anak Dalam menerapkan sistem kekerabatan matrilineal. Bagi anak laki-laki yang telah menikah, mereka dianjurkan untuk tinggal dengan keluarga pihak perempuan.</p>
                        <div className="h-44 flex flex-col items-center gap-1">
                            <img src="/anak-dalam.png" className="h-full"/>
                            <p className="text-xs text-gray-600 italic">Orang-orang Suku Anak Dalam.</p>
                        </div>
                    </div>
                )
            }
        ]
    },
    {
        name: "Suku Kerinci",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <div className="w-full h-full flex justify-center items-center p-10">
                        <p className="text-xl">Suku Kerinci adalah suku bangsa atau kelompok etnik pribumi Sumatra yang mendiami wilayah Dataran Tinggi Kerinci dan sekitarnya.</p>
                    </div>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <div className="w-full h-full flex flex-col justify-center items-center p-10 gap-10">
                        <p className="text-xl">Nenek moyang Suku Kerinci diperkirakan berasal dari para penutur Austronesia awal yang bermigrasi sejak 3500 tahun yang lalu.</p>
                        <div className="h-44 flex flex-col items-center gap-1">
                            <img src="/kerinci.png" className="h-full"/>
                            <p className="text-xs text-gray-600 italic">Orang Kerinci.</p>
                        </div>
                    </div>
                )
            }
        ]
    },

    {
        name: "Suku Sakai",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <div className="w-full flex justify-center items-center p-10">
                        <p className="text-xl">Suku Sakai merupakan salah satu etnis Indonesia yang tinggal di pedalaman Kepulauan Riau. 
<br/><br/>
Ada beberapa wilayah yang umum ditinggali oleh masyarakat suku Sakai, di antaranya Kandis, Balai Pungut, Minas, Kota Kapur, Sungai Siak, Duri, serta hulu Sungai Pait.
<br/><br/>
Masyarakat suku Sakai termasuk kelompok yang nomaden. Mereka hidup di sebuah pondok yang dapat dibongkar.</p>
                    </div>
                )
            },
            {
                name: "Adat & Tradisi",
                content: (
                    <div className="w-full h-full flex flex-col justify-center items-center p-10 gap-10">
                        <p className="text-xl">Masyarakat suku Sakai memiliki kebiasaan yang membuatnya menjadi tradisi turun-temurun hingga kini. Salah satu kebiasaan suku Sakai adalah hidup dengan berpindah-pindah tempat.
<br/><br/>
Adapun salah satu bentuk jejak yang ditinggalkan adalah benda yang digunakan untuk mencari makanan
                        </p>
                        <div className="w-full flex justify-evenly">
                            <div className="h-44 flex flex-col items-center gap-1">
                                <img src="/orang-sakai.png" className="h-full"/>
                                <p className="text-xs text-gray-600 italic">Orang Suku Sakai.</p>
                            </div>
                            <div className="h-44 flex flex-col items-center gap-1">
                                <img src="/rumah-sakai.png" className="h-full"/>
                                <p className="text-xs text-gray-600 italic">Rumah Adat Suku Sakai.</p>
                            </div>
                        </div>
                    </div>
                )
            }
        ]
    },
    {
        name: "Suku Talang Mamak",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <div className="w-full flex justify-center items-center p-10">
                        <p className="text-xl">Suku Talang Mamak adalah salah satu suku Melayu yang mendiami wilayah Riau sejak zaman dahulu kala.</p>
                    </div>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <div className="w-full flex justify-center items-center p-10">
                        <p className="text-xl">Mereka memiliki latar belakang sejarah yang kaya dan terjaga dengan baik. Suku Talang Mamak tergolong melayu tua (proto melayu) yang merupakan suku asli Indragiri. Mereka juga menyebut dirinya “Suku Tuha”. Sebutan tersebut bermakna suku pertama datang dan lebih berhak terhadap sumber daya di Indragiri Hulu.</p>
                    </div>
                )
            },
            {
                name: "Adat & Tradisi",
                content: (
                    <div className="w-full h-full flex flex-col justify-center items-center p-10 gap-10">
                            <p className="text-xl">
                                Masyarakat adat Talang Mamak yakin akan adanya Tuhan dan Nabi Muhammad atau juga mereka menyebut “islam langkah lama” dan sebagian kecil Katolik, khusunsya penduduk Siambul dan Talang Lakat. Mereka menyebut dirinya sendiri sebagai orang “langkah lama”, yang artinya orang adat. Mereka membedakan diri dengan suku Melayu berdasarkan agama. Jika seorang Talang Mamak telah memeluk islam, identitasnya berubah menjadi melayu.
                            </p>
                            <div className="w-full flex justify-evenly">
                                <div className="h-44 flex flex-col items-center gap-1">
                                    <img src="/rentak-bulian.png" className="h-full"/>
                                    <p className="text-xs text-gray-600 italic">Tari Rentak Bulian.</p>
                                </div>
                                <div className="h-44 flex flex-col items-center gap-1">
                                    <img src="/talang-mamak.png" className="h-full"/>
                                    <p className="text-xs text-gray-600 italic">Orang Suku Talang Mamak.</p>
                                </div>
                            </div>
                        </div>
                )
            }
        ]
    },

    {
        name: "Suku Laut",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <div className="w-full flex justify-center items-center p-10">
                        <p className="text-xl">Suku Laut (Sea Nomads) atau Suku Sampan, sering juga disebut Orang Laut, merupakan suku yang tinggal di wilayah perairan Kepulauan Riau.</p>
                    </div>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <div className="w-full flex justify-center items-center p-10">
                        <p className="text-xl">Suku Laut mulai menghuni wilayah Melayu-Lingga pada tahun 2500-1500 Sebelum Masehi sebagai bangsa Melayu Tua (Proto Melayu), menyebar ke sebagian besar wilayah Sumatera melalui Semenanjung Malaka.
<br/><br/>
Secara historis, Orang Laut dulunya adalah perompak, tetapi berperan penting dalam Kerajaan Sriwijaya, Kesultanan Malaka dan Kesultanan Johor.
<br/><br/>
Mereka berperan penting dalam kejayaan Kerajaan Sriwijaya, Kesultanan Malaka, dan Kesultanan Johor.
                        </p>
                    </div>
                )
            },
            {
                name: "Adat & Tradisi",
                content: (
                    <div className="w-full flex items-center p-10">
                        <p className="w-full">
                        Meski memiliki rumah permanen di daratan, orang laut hidup berpindah dari satu wilayah laut ke wilayah laut lainnya tergantung pada musim. Mereka hidup berpindah pindah, menggunakan sampan yang sekaligus merupakan tempat tinggal mereka ketika di laut.
<br/><br/>
Secara umum tak ada penyebutan khusus mengenai rumah adat Suku Laut, namun terdapat istilah sampan yang merupakan simbol sebuah kesatuan keluarga.
                        </p>
                        <div className="w-96 flex flex-col items-center text-center m-8 gap-8">
                            <div className="w-full flex flex-col items-center gap-1">
                                <img src="/orang-laut.png" className="w-full"/>
                                <p className="text-xs text-gray-600 italic">Orang Suku Laut.</p>
                            </div>
                            <div className="w-full flex flex-col items-center gap-1">
                                <img src="/pernikahan-laut.png" className="w-full"/>
                                <p className="text-xs text-gray-600 italic">Tradisi Pernikahan Suku Laut.</p>
                            </div>
                        </div>
                    </div>
                )
            }
        ]
    },

    {
        name: "Suku Ogan",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <MidText>
                        Suku Ogan adalah salah satu dan dua suku bangsa yang mayoritas bermukim di Provinsi Sumatera Selatan.
                    </MidText>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <MidText>
                        Asal-usul. Nenek moyang dari masyarakat suku Ogan diperkirakan berasal dari masyarakat yang menghuni Gunung Dempo, yang terletak di dataran tinggi Basemah.
                    </MidText>
                )
            },
            {
                name: "Tradisi",
                content: (
                    <TTIB images={[
                        {
                            src: "/pernikahan-ogan-1.png",
                            caption: "Pernikahan Suku Ogan (1)"
                        },
                        {
                            src: "/pernikahan-ogan-2.png",
                            caption: "Pernikahan Suku Ogan (2)"
                        }
                    ]}>
                        Masyarakat Suku Ogan yang mendiami Sumatra Selatan memiliki tradisi seputar pernikahan warisan leluhur. 
                    </TTIB>
                )
            }
        ]
    },
    {
        name: "Suku Kayuagung",
        sections: [
            {
                name: "Informasi Umum",
                content: <MidText>Suku Kayuagung atau Komering Kayuagung adalah suku asli Indonesia yang berasal dari kabupaten Ogan Komering Ilir, provinsi Sumatera Selatan.</MidText>
            },
            {
                name: "Sejarah",
                content: <MidText>Terbentuknya masyarakat Komering Kayuagung karena percampuran antar suku asli Sumatera Selatan yang mendiami sepanjang sungai Komering bagian hilir (suku Komering) dengan suku Lampung Abung/marga Abung (Abung Bunga Mayang) yang datang dari Lampung.</MidText>
            },
            {
                name: "Adat & Tradisi",
                content: (
                    <TTIB images={[
                        {
                            src: "/mabang-handak.png",
                            caption: "Tradisi Mabang Handak."
                        },
                        {
                            src: "/rumah-bengkulah.png",
                            caption: "Rumah Bengkulah."
                        }
                    ]}>
                        Budaya dan Adat istiadat suku Kayu Agung masih terjaga sampai sekarang, seperti adat Lamaran dan Tari Penguton Kayuagung.
                    </TTIB>
                )
            }
        ]
    },
    {
        name: "Suku Tumi",
        sections: [
            {
                name: "Informasi Umum",
                content: <MidText>Suku Tumi (Lampung: Jeghema Tumi) adalah suku purba yang diyakini merupakan nenek moyang dari orang Lampung saat ini.</MidText>
            },
            {
                name: "Sejarah",
                content: <MidText>Orang Tumi kemungkinan berasal dari India Selatan yang datang ke Nusantara beberapa abad Sebelum Masehi yang lalu. Suku Tumi dahulu bermukim di daerah lereng gunung Pesagi dan Danau Ranau.</MidText>
            },
            {
                name: "Adat & Tradisi",
                content: <CLIR images={[
                    {
                        src: "/hujung-langit.png",
                        caption: "Prasasti Hujung Langit"
                    }
                ]}>
                    <p>
                    Masyarakat Suku Tumi masih menganut kepercayaan animisme/dinamisme sebelum kedatangan agama Hindu dari India sejak abad ke-1 Masehi.
<br/><br/>
Terdapat sebuah pohon bernama Belasa Kepampang yang sangat disucikan oleh suku Tumi di Sekala Brak. Pohon ini memiliki dua cabang, yaitu cabang nangka dan cabang sebukau. Keduanya mengandung getah dengan fungsi yang berbeda meskipun berasal dari pohon yang sama.
                    </p>
                </CLIR>
            }
        ]
    },

    {
        name: "Suku Rejang",
        sections: [
            {
                name: "Informasi Umum",
                content: <MidText>Suku Rejang merupakan salah satu suku tertua di Sumatera yang mendiami sebagian wilayah Provinsi Bengkulu saat ini.</MidText>
            },
            {
                name: "Sejarah",
                content: <MidText>Asal-usul suku Rejang diyakini berasal dari Rhe Jang Hyang, yaitu seorang leluhur suku Rejang yang berasal dari Mongolia. Rhe Jang Hiang dipercaya singgah dan menetap di wilayah Bengkulu pada tahun 2090 sebelum masehi (SM).</MidText>
            },
            {
                name: "Adat & Tradisi",
                content: <CLIR images={[
                    {
                        src: "/umeak-potong-jang.png",
                        caption: "Rumah Umeak Potong Jang."
                    },
                    {
                        src: "/pakaian-rejang.png",
                        caption: "Pakaian Adat Rejang."
                    }
                ]}>
                    <p>
                    Hingga saat ini, belum ada catatan yang lengkap terkait kepercayaan asli masyarakat Suku Rejang. Namun di masa modern ini, agama Suku Rejang mayoritas, dan hampir semuanya memeluk agama Islam.
<br/><br/>
Suatu suku yang memiliki aksara, biasanya juga memiliki bahasa. Hal itu pula yang terjadi pada masyarakat Suku Rejang, yang menjadikan Bahasa Rejang sebagai bahasa keseharian mereka.
                    </p>
                </CLIR>
            }
        ]
    },
    {
        name: "Suku Pekal",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <MidText>
                        Suku Pekal atau Pikal adalah suku bangsa atau kelompok etnik yang mendiami daerah Kabupaten Bengkulu Utara di Provinsi Bengkulu, dan juga wilayah sekitar Kabupaten Mukomuko yang berada dekat perbatasan Jambi dan Sumatera Barat. Populasi suku Pekal pada sensus tahun 2000 yakni sebesar 30.000 orang.
                    </MidText>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <MidText>
                        Suku bangsa Pekal berkaitan dengan mitologi suku bangsa lainnya yang dominan terdapat di wilayah perbatasan suku bangsa Pekal. Mitologi ini berkaitan dengan mitologi suku Rejang dan hikayat Raja Inderapura dari Minangkabau. Mitologi suku Rejang sendiri memiliki pertalian erat dengan hikayat-hikayat kerajaan Pagaruyung di Minangkabau.
                    </MidText>
                )
            },
            {
                name: "Budaya",
                content: (
                    <TWFRI image={{ src: "orang-rejang.png", caption: "Orang-orang Suku Rejang." }}>
                        <p>
                            Tradisi dan budaya Pekal ini banyak dipengaruhi oleh dua budaya lain seperti dari budaya Minangkabau dan budaya Rejang dengan sedikit pengaruh/unsur dari Melayu Pesisir Bengkulu. Sepertinya mereka sangat mudah menyerap tradisi dan budaya dari luar, dan menerimanya menjadi bagian dari budaya mereka sendiri. Saat ini sangat susah mencari akar budaya dari suku Pekal, Karena sebagian besar mereka ambil dari tradisi dan budaya dari luar mereka.
                        </p>
                        <br/>
                        <p>
                            Suku Pekal adalah pemeluk Islam secara mayoritas. Beberapa acara adat dan seni budaya mereka juga terlihat unsur Islami. Walaupun mereka telah memeluk Islam, tetapi beberapa kepercayaan terhadap hal-hal animisme dan dinamisme masih terlihat dalam kehidupan masyarakat suku Pekal. Mereka mempercayai hal-hal gaib dan tempat-tempat keramat yang konon dapat mempengaruhi kehidupan dan kesehatan mereka.
                        </p>
                        <br/>
                        <p>
                            Rumah adat masyarakat suku Pekal itu sendiri tidak berbeda dengan rumah adat dengan suku lainnya yang ada di Bengkulu, yaitu rumah panggung. Sedangkan untuk senjata suku Pekal yaitu keris, tombak, dan parang. Baik yang dianggap sebagai benda keramat dan juga digunakan sebagai senjata untuk berburu hewan serta digunakan dalam kegiatan-kegiatan yang lainnya. Makanan khas dari Suku Pekal itu sambal unjang. Sambal unjang adalah makanan yang dimasak dalam bambu dan isinya ikan dicampur dengan rempah-rempah. Ikan itu dihancurkan bersamaan dengan bumbu-bumbu dan diletakkan di atas api dan di atasnya ditutup dengan daun pisang. Hampir sama dengan cara memasak lemang ataupun memasak ikan pais, tetapi yang membedakannya ikan pais menggunakan daun pisang kalau sambal unjang menggunakan bambu.
                        </p>
                        <br/>
                    </TWFRI>
                )
            }
        ]
    },
    {
        name: "Suku Lampung",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <MidText>
                        Suku Lampung adalah suku bangsa pribumi yang berasal dari Provinsi Lampung yang berada pada bagian ujung selatan pulau Sumatra. Pada awal mulanya, suku Lampung berdiam di tengkuk Gunung Pesagi. Wilayah suku Lampung selain di provinsi Lampung juga tersebar di wilayah lainnya seperti: di sebagian provinsi Sumatera Selatan tepatnya di sekitar Danau Ranau, Kabupaten Ogan Komering Ulu Selatan yang juga berdekatan bahkan berbatasan dengan provinsi Lampung.
                        <br/><br/>
                        Suku Lampung juga tersebar di desa-desa di perbatasan antara Bengkulu dan Lampung, tersebar di desa Merpas, Nasal, Kaur di Bengkulu serta dapat juga ditemukan komunitas masyarakat Lampung di provinsi Banten tepatnya di desa Cikoneng kecamatan Anyar, kabupaten Serang. Tidak hanya itu, suku Lampung juga tersebar di wilayah perantauan terutama di perkotaan besar seperti wilayah Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi), Kota Palembang, Kota Cilegon, Kota Serang, kota Tangerang Selatan, Kota Bengkulu, Kota Bandung, dan juga di kota/wilayah lainnya.
                    </MidText>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <div className="w-full flex justify-center p-10">
                        <p className="text-md">
                            Sebagaimana asal-usul masyarakat Suku Bangsa Indonesia yang lain. Suku Bangsa Lampung merupakan bagian dari bangsa Austronesia yang leluhurnya diperkirakan berasal dari kepulauan Formosa yang bermigrasi ke Kepulauan Filipina, Sumatra Bagian Pesisir Utara, Sulawesi, Kalimantan dan kemudian berakhir di Selatan Sumatera. Dalam studi bahasa yang pernah dilakukan, Etnis Lampung memiliki akar kesamaan bahasa dengan masyarakat tradisional Puyuma di kepulauan Formosa.
                            <br/><br/>
                            Beberapa catatan sejarah dari Tiongkok menuliskan, bahwa pada abad ke VII masyarakat telah membicarakan suatu wilayah di daerah Selatan (Namphang) dimana terdapat kerajaan yang disebut To-Lang Po-Hwang, To berarti orang dan Lang-Po-Hwang adalah Lampung. Hal ini menunjukan bukti bahwa telah datang ke negeri Tiongkok, utusan dari masyarakat lemah Lampung pada abad ke VII.
                            <br/><br/>
                            Dalam kronik Taiping Huanyu Ji yang ditulis oleh Yue-Shi dari abad ke X, lebih jelas lagi disebutkan nama-nama negeri di kawasan Nan-hai (Laut Selatan), antara lain dua buah negeri yang disebutkan berurutan: To-lang dan Po-hwang. Negeri To-lang hanya disebut satu kali. Tetapi negeri Po-hwang cukup banyak disebut, sebab negeri ini telah mengirim utusan ke negeri Tiongkok pada tahun 442, 449, 451, 459, 464 dan 466.
                            <br/><br/>
                            Prof. Gabriel Ferrand, pada tulisannya dalam majalah ilmiah Journal Asiatique, Paris, 1918, hal. 477, berpendapat bahwa kedua nama itu mungkin hanya satu nama: To-lang-po-hwang, lalu negeri itu dilokasikan Ferrand di daerah Tulangbawang, Lampung. Prof. Dr. Raden Mas Ngabehi Poerbatjaraka, dalam bukunya Riwajat Indonesia I,Jajasan Pembangunan, Djakarta, 1952, hal. 25, menyetujui kemungkinan adanya kerajaan Tulangbawang, meskipun anggapan itu semata-mata karena menyatukan dua toponimi dalam kronik Tiongkok.
                            <br/><br/>
                        </p>
                    </div>
                )
            },
            {
                name: "Adat & Tradisi",
                content: (
                    <TWFRI image={{ src: "/pakaian-lampung.png", caption: "Pakaian Adat Lampung." }}>
                        <p>
                            Masyarakat Adat Lampung terdiri atas dua sistem Pemerintahan Adat yakni Masyarakat Komunitas Adat Budaya Lampung Saibatin (Peminggir/Pesisir) dan Masyarakat Komunitas Budaya Lampung Penyimbang (Pepadun/Pedalaman). Dengan penjelasan sebagai berikut:
                        </p>
                        <br/>
                        <p className="font-bold text-lg">Masyarakat Komunitas Adat dan Budaya Lampung Saibatin</p>
                        <p>
                            Masyarakat Komunitas Adat Budaya Saibatin dari dahulu hingga saat ini dinamakan Masyarakat Adat Lampung Peminggir (Pesisir). Karena sebagian besar berdomisili di sepanjang pantai timur, selatan dan barat lampung. Beberapa kepaksian serta kemargaan yang menggunakan sistem pemerintahan adat Saibatin antara lain: Bandar Lima Way Lima, Bandar Enom Semaka, untuk di Kerajaan Adat Paksi Pak Sekala Brak Kepaksian Pernong, Kepaksian Nyerupa, Paksi Buay Belunguh, Paksi Buay Bejalan Diway, Marga dari pada empat Kepaksian tersebut adalah Marga Ulu Krui, Marga Way Sindi, Marga Tenumbang, Marga Pugung Tampak, Marga Pugung Malaya, Marga Pidada, Marga Pasakh Krui, Marga Ngakhas, Marga Ngambukh, Marga La'ai, Marga Bengkunat, Marga Belimbing, Marga Bandakh, Marga Pulau Pisang, Pembesar Adat Jamma Balak Suku Marga Kabupaten Tanggamus, Pembesar Adat Jamma Balak Suku Marga Kabupaten Pringsewu, Pesumbaian 17 Pesawaran, Saibatin Marga Way Handak Lampung Selatan, Marga Balak, Marga Lunik, Marga Bumi Waras, Melinting Tiyuh Pitu, Marga Lima Way Handak, Enom Belas Marga Krui, Telu Marga Ranau dan Cikoneng Pak Pekon.
                        </p>
                    </TWFRI>
                )
            }
        ]
    },

    {
        name: "Suku Betawi",
        sections: [
            {
                name: "Informasi Umum",
                content: <MidText>Suku Betawi (Betawi: Orang Betawi) adalah salah satu suku bangsa di Indonesia yang memiliki kekerabatan etnis dengan Melayu, Sunda, dan Jawa. Umumnya, Orang Betawi mendiami wilayah Jakarta dan daerah sekitarnya. Kemunculan Betawi pertama kali pada abad ke-18 sebagai suatu komunitas dari beberapa etnis yang menetap di Batavia.</MidText>
            },
            {
                name: "Sejarah",
                content: (
                    <div className="w-full flex justify-center p-10">
                        <p className="text-sm">
                            Sejarah penduduk asli Jakarta (dahulu bernama Sunda Kalapa) diawali pada masa zaman batu yang menurut sejarawan Sagiman MD sudah ada sejak zaman neolitikum. Arkeolog Uka Tjandarasasmita dalam monografinya "<i>Jakarta Raya dan Sekitarnya Dari Zaman Prasejarah Hingga Kerajaan Pajajaran</i>" (1977) secara arkeologis telah memberikan bukti-bukti yang kuat dan ilmiah tentang sejarah penghuni Jakarta dan sekitarnya dari masa sebelum Tarumanagara pada abad ke-5. Dikemukakan bahwa paling tidak sejak zaman neolitikum atau batu baru (3.500–3.000 tahun yang lalu) daerah Jakarta dan sekitarnya di mana terdapat aliran-aliran sungai besar seperti Ciliwung, Cisadane, Bekasi, dan Citarum pada tempat-tempat tertentu sudah didiami oleh masyarakat manusia yang menyebar hampir di seluruh wilayah Jakarta. Dari alat-alat yang ditemukan di situs-situs itu, seperti kapak, beliung, pahat, pacul yang sudah halus dan memakai gagang dari kayu, disimpulkan bahwa masyarakat manusia itu sudah mengenal pertanian (mungkin semacam perladangan) dan peternakan. Bahkan juga mungkin telah mengenal struktur organisasi kemasyarakatan yang teratur.
                            <br/><br/>
                            Sementara Yahya Andi Saputra, seorang alumni Fakultas Sejarah Universitas Indonesia, berpendapat bahwa penduduk asli Jakarta adalah penduduk Nusa Jawa. Menurutnya, dahulu kala penduduk di Nusa Jawa merupakan satu kesatuan budaya, bahasa, kesenian, dan adat kepercayaan mereka sama. Ia menyebutkan berbagai sebab yang kemudian menjadikan mereka sebagai suku bangsa sendiri-sendiri.
                            <br/>
                            <ul className="list-disc">
                                <li>Pertama, munculnya kerajaan-kerajaan pada zaman sejarah.</li>
                                <li>Kedua, kedatangan dan pengaruh penduduk dari luar.</li>
                                <li>Terakhir, perkembangan kemajuan ekonomi daerah masing-masing.</li>
                            </ul>
                            <br/>
                            Dahulu, penduduk asli Jakarta berbahasa Sunda Kuno. Jadi, penduduk asli Jakarta telah berdiam di Jakarta dan sekitarnya sejak zaman dahulu dan bersuku Sunda.
                        </p>
                    </div>
                )
            },
            {
                name: "Seni & Budaya",
                content: (
                    <TWFRI image={{ src: "/budaya-betawi.png", caption: "Kebudayaan Betawi" }}>
                        <p>Seni dan Budaya asli Penduduk Jakarta atau Betawi dapat dilihat dari temuan arkeologis, semisal giwang-giwang yang ditemukan dalam penggalian di Babelan, Kabupaten Bekasi yang berasal dari abad ke-11 masehi. Selain itu budaya Betawi juga terjadi dari proses campuran budaya antara suku asli dengan dari beragam etnis pendatang atau yang biasa dikenal dengan istilah Mestizo. Sejak zaman dahulu, wilayah bekas kerajaan Salakanagara atau kemudian dikenal dengan "Kalapa" (sekarang Jakarta) merupakan wilayah yang menarik pendatang dari dalam dan luar Nusantara, Percampuran budaya juga datang pada masa Kepemimpinan Raja Pajajaran, Prabu Surawisesa di mana Prabu Surawisesa mengadakan perjanjian dengan Portugal dan dari hasil percampuran budaya antara Penduduk asli dan Portugal inilah lahir Keroncong Tugu.</p>
                        <br/>
                        <p>Suku-suku yang mendiami Jakarta sekarang antara lain, Suku Betawi, Jawa, Sunda, Melayu, Minang, Batak, Bugis, dan lainnya. Selain dari penduduk Nusantara, budaya Betawi juga banyak menyerap dari budaya luar, seperti budaya Arab, Tiongkok, Belanda, dan Portugis.</p>
                        <br/>
                        <p>Suku Betawi sebagai penduduk asli Jakarta agak tersingkirkan oleh penduduk pendatang. Mereka keluar dari Jakarta dan pindah ke wilayah-wilayah yang ada di provinsi Jawa Barat dan provinsi Banten. Budaya Betawi pun tersingkirkan oleh budaya lain baik dari Indonesia maupun budaya barat. Untuk melestarikan budaya Betawi, didirikanlah cagar budaya di Situ Babakan.</p>
                    </TWFRI>
                )
            }
        ]
    },
    {
        name: "Suku Sunda",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <div className="w-full p-10">
                        <p>Suku Sunda (Sunda: Urang Sunda) adalah suku bangsa yang berasal dari bagian barat Pulau Jawa, Indonesia, dengan istilah Tatar Pasundan yang mencakup sebagian besar wilayah administrasi Provinsi Jawa Barat, Banten, Jakarta dan sebagian wilayah barat Jawa Tengah. Populasi Suku Sunda secara signifikan juga dapat ditemukan di wilayah provinsi lain di Indonesia, dan di luar negeri seperti di Taiwan, Arab Saudi, Malaysia, Singapura, Eropa, Jepang, Korea Selatan, Hongkong (Tiongkok) dan negara-negara lainnya sebagai tempat bagi para diaspora Sunda.</p>
                        <br />
                        <p>Jati diri yang mempersatukan orang Sunda adalah bahasa dan budayanya. Orang Sunda dikenal memiliki sifat optimistis, ramah, sopan, riang, dan bersahaja. Orang Portugis mencatat dalam Suma Oriental bahwa orang Sunda bersifat jujur dan pemberani. Orang Sunda juga adalah suku bangsa pertama yang melakukan hubungan diplomatik secara sejajar dengan bangsa lain. Sang Hyang Surawisesa atau Raja Samian adalah raja pertama di Nusantara yang melakukan hubungan diplomatik dengan bangsa lain pada abad ke-15 dengan orang Portugis di Malaka. Hasil dari diplomasinya dituangkan dalam Prasasti Perjanjian Sunda-Portugal.</p>
                        <br />
                        <p>Di samping prestasi dalam bidang politik (khususnya pada awal masa kemerdekaan Indonesia) dan ekonomi, prestasi yang cukup membanggakan adalah pada bidang budaya yaitu banyaknya penyanyi, musisi, aktor, dan aktris dari etnis Sunda yang memiliki prestasi di tingkat nasional, maupun internasional.</p>
                    </div>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <MidText>
                        Sejarah suku sunda adalah suku bangsa yang umumnya mendiami pulau Jawa bagian barat. Pada tahun 1998, suku Sunda berjumlah kurang lebih 33 juta jiwa,[1] dengan kebanyakan dari mereka mendiami Provinsi Jawa Barat dan Banten serta sekitar 3 juta jiwa mendiami di provinsi lain. Diantara mereka, masyarakat Sunda yang mendiami perkotaan mencapai 34,51%.
                        <br/><br/>
                        Sebagai suatu suku bangsa yang cukup besar, Sunda merupakan cikal-bakal berdirinya beberapa peradaban di Nusantara, dimulai dengan berdirinya kerajaan tertua di Nusantara, yakni Salakanagara dan Tarumanegara sampai ke Galuh, Pakuan Pajajaran, dan Sumedang Larang.
                    </MidText>
                )
            },
            {
                name: "Etos Budaya",
                content: (
                    <div className="w-full p-10 overflow-auto">
                        <p>
                            Kebudayaan Sunda termasuk salah satu kebudayaan tertua di Nusantara. Kebudayaan Sunda yang ideal kemudian sering kali dikaitkan sebagai kebudayaan masa Kerajaan Sunda. Ada beberapa ajaran dalam budaya Sunda tentang jalan menuju keutamaan hidup. Etos dan watak Sunda itu diantaranya adalah:
                        </p>
                        <br />
                        <ol className="list-decimal">
                            <li><b>Cageur</b>, artinya adalah sehat, yang mana sehat secara jasmani serta rohani, sehat dalam berpikir, sehat dan mempunyai pendirian, sehat secara moral, sehat dalam bekerja dan bertutur kata.</li>
                            <li><b>Bageur</b>, artinya adalah baik, baik terhadap sesama, banyak memberikan bantuan berupa pikiran, moral yang baik maupun materi, tidak pelit terhadap sesama, tidak emosianal hatinya, penolong serta ikhlas menjalankan dan mengamalkan tidak hanya dibaca atau diucapkan saja.</li>
                            <li><b>Bener</b> artinya benar atau tidak bohong, tidak asal-asalan dalam melaksanakan pekerjaan, amanat, lurus dalam menjalankan agama, memimpin dengan baik, serta tidak merusak alam.</li>
                            <li><b>Singer</b>, artinya adalah mawas diri, teliti dalam bekerja, mendahulukan orang lain sebelum diri sendiri, menghargai pendapat orang lain, penuh kasih sayang, tidak marah saat dikritik namun diterima dengan lapang dada.</li>
                            <li><b>Pinter</b>, artinya cerdas, mengerti ilmu agama sampai ke dasar, bisa menyesuaikan diri dengan sesamanya, bisa menyelesaikan masalah dengan bijaksana, serta tidak berprasangka buruk terhadap orang lain.</li>
                        </ol>
                        <br />
                        <p>
                            Kebudayaan Sunda juga merupakan salah satu kebudayaan yang menjadi sumber kekayaan bagi bangsa Indonesia yang dalam perkembangannya perlu dilestarikan. Sistem kepercayaan spiritual tradisional Sunda adalah Sunda Wiwitan yang mengajarkan keselarasan hidup dengan alam. Kini, hampir sebagian besar masyarakat Sunda beragama Islam, tetapi ada beberapa yang tidak beragama Islam, walaupun berbeda namun pada dasarnya seluruh kehidupan ditujukan untuk kebaikan di alam semesta.
                        </p>
                    </div>
                )
            },
            {
                name: "Nilai-nilai Budaya",
                content: (
                    <MidText>
                        Kebudayaan Sunda memiliki ciri khas tertentu yang membedakannya dari kebudayaan–kebudayaan lain. Secara umum masyarakat Sunda, dikenal sebagai masyarakat yang lembut, religius, dan sangat spiritual. Kecenderungan ini tampak sebagaimana dalam pameo <i>silih asih, silih asah dan silih asuh</i>; saling mengasihi (mengutamakan sifat welas asih), saling menyempurnakan atau memperbaiki diri (melalui pendidikan dan berbagi ilmu), dan saling melindungi (saling menjaga keselamatan). Selain itu Sunda juga memiliki sejumlah nilai-nilai lain seperti kesopanan, rendah hati terhadap sesama, hormat kepada yang lebih tua, dan menyayangi kepada yang lebih kecil. Pada kebudayaan Sunda keseimbangan magis dipertahankan dengan cara melakukan upacara-upacara adat sedangkan keseimbangan sosial masyarakat Sunda melakukan gotong-royong untuk mempertahankannya.
                    </MidText>
                )
            },
            {
                name: "Kesenian",
                content: (
                    <CLIR images={[
                        {
                            src: "/samba-sunda.png",
                            caption: "Samba Sunda adalah grup musik etnik Sunda yang populer di Eropa."
                        },
                        {
                            src: "/sunda.png",
                            caption: "Kesenian Sunda"
                        }
                    ]}>
                        <p>Budaya Sunda memiliki banyak kesenian, diantaranya adalah kesenian sisingaan, tarian khas Sunda, wayang golek, permainan anak-anak, dan alat musik serta kesenian musik tradisional Sunda yang bisanya dimainkan pada pagelaran kesenian.</p>
                        <br/><br/>
                        <p>Sisingaan adalah kesenian khas Sunda yang menampilkan 2–4 boneka singa yang diusung oleh para pemainnya sambil menari. Sisingaan sering digunakan dalam acara tertentu, seperti pada acara khitanan. Wayang golek adalah boneka kayu yang dimainkan berdasarkan karakter tertentu dalam suatu cerita pewayangan. Wayang dimainkan oleh seorang dalang yang menguasai berbagai karakter maupun suara tokoh yang di mainkan. Jaipongan adalah pengembangan dan akar dari tarian klasik. Tarian Ketuk Tilu, sesuai dengan namanya Tarian ketuk tilu berasal dari nama sebuah instrumen atau alat musik tradisional yang disebut ketuk sejumlah 3 buah.</p>
                        <br/><br/>
                        <p>Alat musik khas sunda yaitu, angklung, degung, rampak kendang, suling, kacapi, goong, calung, tarawangsa, toleat, tarompét adalah instrumen musik yang terbuat dari bambu yang unik enak didengar. Angklung juga sudah menjadi salah satu warisan kebudayaan Indonesia. Rampak kendang adalah beberapa kendang (instrumen musik tradisional Sunda) yang dimainkan bersama secara serentak. Seni Reak (kuda lumping) adalah sebuah pertunjukan yang terdiri dari empat alat musik ritmis yang berbentuk seperti drum yang terbuat dari kayu dan alas yang di pukul terbuat dari kulit sapi, yang di sebut dog-dog yang ukurannya beragam yaitu Tilingtit (ukuran kecil), Tung (lebih besar dari Tilingtit), Brung (lebih besar dari Tung), Badoblag (lebih besar dari Brung).</p>
                        <br/><br/>
                        <p>Ditambah oleh 1 alat musik ritmis bernama bedug yang dipikul dua orang dan ditambah lagi oleh satu alat musik melodis berupa Tarompet yang terbuat dari kayu yang melantunkan musik sunda sampai dangdut yang terkadang di temani seorang sinden. Seni reak ini menampilkan atraksi transendensi dunia metafisika ke dalam dunia profan yang disebut (kaul atau jadi, hari jadi) dan atraksi dari Bangbarogan. Bangbarongan adalah sebuah kostum yang digunakan oleh orang yang sedang kaul, terbuat dari kayu yang berbentuk kepala besar bertaring dan berwarna merah ditambah karung goni untuk menutupi tubuh sang pemakai. Asal kesenian ini mulanya berasal dari daerah Rancakalong, Kabupaten Sumedang, hingga sampai saat ini kesenian tersebut mulai menyebar di daerah Sumedang lain nya, hingga ke beberapa daerah di Bandung Timur.</p>
                    </CLIR>
                )
            }
        ]
    },
    {
        name: "Suku Jawa",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <MidText>
                        Suku Jawa adalah suku bangsa Austronesia terbesar di Indonesia yang berasal dari Jawa Tengah, Jawa Timur, dan Daerah Istimewa Yogyakarta. Pada tahun 2010, setidaknya 40,22% penduduk Indonesia merupakan etnis Jawa. Selain itu, suku Jawa ada pula yang berada di negara Kaledonia Baru dan Suriname, karena pada masa kolonial Belanda suku ini dibawa ke sana sebagai pekerja. Saat ini, suku Jawa di Suriname menjadi salah satu minoritas di sana dan dikenal sebagai Jawa Suriname. Ada juga sejumlah besar suku Jawa di sebagian besar provinsi di Indonesia, Malaysia, Singapura, Arab Saudi, dan Belanda.
                        <br/><br/>
                        Mayoritas orang Jawa adalah umat Islam, dengan beberapa minoritas yaitu Kristen, Kejawen, Hindu, dan Buddha. Meskipun demikian, peradaban orang Jawa telah dipengaruhi oleh lebih dari seribu tahun interaksi antara budaya Kejawen dan Hindu-Buddha, dan pengaruh ini masih terlihat dalam sejarah, budaya, tradisi, dan bentuk kesenian Jawa. Dengan populasi global yang cukup besar, suku Jawa menjadi kelompok etnis terbesar keempat di antara umat Islam di seluruh dunia, setelah bangsa Arab, Bengali, dan Punjab. Suku Jawa memiliki beberapa sub-suku, yakni Banyumasan, Cirebon, Osing, Samin, Tengger, Jawa Merauke, dan Jawa Suriname.
                    </MidText>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <div className="w-full p-8">
                        <p>Seperti kebanyakan kelompok etnis Indonesia yang lain, termasuk masyarakat Sunda, masyarakat Jawa merupakan bangsa Austronesia yang leluhurnya diperkirakan berasal dari Taiwan dan bermigrasi melalui Filipina untuk mencapai pulau Jawa antara tahun 1500 SM hingga 1000 SM. Namun, menurut studi genetik yang terbaru, masyarakat Jawa bersama dengan masyarakat Sunda dan Bali memiliki rasio penanda genetik yang hampir sama antara genetik bangsa Austronesia dan Austroasiatik.</p>
                        <br/>
                        <p>Masyarakat Jawa adalah perpaduan antara orang Austroasiatik berbaur / interbreeding dengan orang Austronesia yang datang kemudian. Setelah interaksi yang cukup lama dengan orang Austronesia masyarakat awal yang mendiami Pulau Jawa mulai mengadopsi bahasa Austronesia sebagai bahasa utama, sehingga mereka memiliki sekitar 20–30% gen Austronesia dan 50-60% gen Austroasiatik.</p>
                        <br/>
                        <p>Perpaduan genetik masyarakat di Jawa juga sangat kompleks, baik itu masyarakat pesisir maupun di daerah pegunungan. Bentuk wajah masyarakat Jawa juga dominan dipengaruhi oleh Orang Austroasiatik (Seperti Orang Kamboja dan Vietnam bagian selatan).</p>
                        <br/>
                        <p>Kemungkinan mengapa masyarakat yang mendiami pulau Jawa awal mula mulai mengadopsi Bahasa Austronesia adalah menyesuaikan diri di dalam globalisasi, perdagangan maupun pertukaran budaya dan teknologi di masanya, yang kemungkinan para penutur Bahasa Austronesia mempunyai pengaruh yang sangat besar pada masa itu.</p>
                    </div>
                )
            },
            {
                name: "Budaya",
                content: (
                    <TWFRI image={{ src: "wayang.png", caption: "Budaya Wayang" }}>
                        <p>Budaya Jawa adalah budaya yang berasal dari Jawa dan dianut oleh masyarakat Jawa khususnya di Jawa Tengah, DIY, dan Jawa Timur. Budaya Jawa mengutamakan keseimbangan, keselarasan, dan keserasian dalam kehidupan sehari-hari. Budaya Jawa menjunjung tinggi kesopanan dan kesederhanaan. Budaya Jawa selain terdapat di Jawa Tengah, DIY, dan Jawa Timur terdapat juga di daerah perantauan orang Jawa yaitu di Jakarta, Sumatra, dan Suriname. Pengaruh budaya Jawa juga tersebar di luar Jawa, contohnya wayang kulit, keris, batik, dan gamelan. Di Malaysia dan Filipina dikenal istilah keris karena pengaruh Majapahit. LSM Kampung Halaman dari Yogyakarta yang menggunakan wayang remaja adalah LSM Asia pertama yang menerima penghargaan seni dari AS tahun 2011. Gamelan Jawa menjadi mata kuliah di Universitas Victoria Wellington, Selandia Baru. Gamelan Jawa rutin digelar di AS dan Eropa atas permintaan warga AS dan Eropa. Sastra Jawa Nagarakretagama menjadi satu-satunya karya sastra Indonesia yang diakui UNESCO sebagai Memori Dunia. Menurut Guru Besar Arkeologi Asia Tenggara, Universitas Nasional Singapura, John N. Miksic, jangkauan kekuasaan Majapahit bahkan meliputi Sumatra dan Singapura bahkan Thailand Selatan yang dibuktikan dengan pengaruh kebudayaan, corak bangunan, candi, patung, dan seni. Budaya Jawa termasuk unik karena bahasa Jawa mempunyai tingkat tutur yakni ngoko, madya, dan krama.</p>
                    </TWFRI>
                )
            }
        ]
    },

    "Suku Jepang",
    "Suku Korea",

    {
        name: "Suku Cirebon",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <div className="w-full p-10">
                        <p>Suku Cirebon adalah kelompok etnis keurunan jawa cirebonan (rumpun jawa banyumasan) yang tersebar di sekitar wilayah Kabupaten Cirebon dan Kota Cirebon. Menggunakan istilah Wong sebagai penanda keturunan jawa, dan Selain itu suku Cirebon juga dapat ditemui di sebagian Kabupaten Majalengka (sebelah utara atau biasa disebut sebagai Wilayah "Pakaleran"), sebagian Kabupaten Subang sebelah utara mulai dari Blanakan, Pamanukan, hingga Pusakanagara dan sebagian Pesisir utara Kabupaten Karawang mulai dari Pesisir Pedes hingga Pesisir Cilamaya di Provinsi Jawa Barat dan di sekitar Kec. Losari di Kabupaten Brebes, provinsi Jawa Tengah.</p>
                        <br/><br/>
                        <p>Selain itu, Suku Cirebon tersebar di banyak provinsi-provinsi di Indonesia. Pada sensus penduduk 2010 Suku Cirebon berjumlah 1.877.514 jiwa, dengan 961.406 laki-laki dan 916.108 perempuan. Rasionya yaitu sekitar 0,79% dari jumlah penduduk seluruh Indonesia pada tahun 2010 dari semua suku di Indonesia. Provinsi terbanyak yang terdapat suku Cirebon adalah Provinsi Jawa Barat (1.812.842 jiwa), Banten (41.645 jiwa), dan Lampung (8.406 jiwa). Sebanyak 1.425.272 jiwa (75,91%) bermukim di perkotaan dan 452.242 jiwa (25,09%) bermukim di pedesaan. Masyarakat Suku Cirebon memeluk agama Islam. Bahasa yang dituturkan oleh orang Cirebon adalah Bahasa Jawa mayoritas digunakan dalam percakapan sehari hari yang juga ada gabungan sedikit atau beberapa bahasa yakni dari Sunda, Arab dan China yang mereka sebut sebagai Bahasa Cirebonan atau Bahasa Jawa Dialek Cirebon. Mereka juga memiliki dialek Bahasa Sunda tersendiri yang jarang dituturkan yang disebut Bahasa Sunda Cirebon.</p>
                    </div>
                )
            },
            {
                name: "Kebudayaan",
                content: (
                    <TWFRI image={{
                        src: "/topeng-cirebon.png",
                        caption: "Tari Topeng Cirebon"
                    }}>
                        <p className="font-bold text-lg">Hubungan dengan Kebudayaan Sunda</p>
                        <p>Hubungan dengan Suku atau Kebudayaan Sunda ditandai dengan adanya Keraton Cirebon sebagai sebuah bentuk eksistensi adanya Suku Cirebon, di mana pendiri Keraton Cirebon yaitu Raden Walangsungsang dan Nyai rara santang serta Pangeran Surya yang merupakan Kuwu di Kaliwedi masih keturunan Kerajaan Pajajaran yang merupakan Kerajaan Sunda namun dalam perkembangan selanjutnya Keraton Cirebon yang merupakan lambang eksistensi keberadaan Suku Cirebon memilih jalannya sendiri yang kebanyakan bercorak islam.</p>
                        <br/>
                        <p className="font-bold text-lg">Hubungan dengan Kebudayaan Jawa</p>
                        <p>Dalam kaitannya dengan Kebudayaan Jawa, keberadaan Bahasa Cirebon selalu dikaitkan dengan Bahasa Jawa dikarenakan adanya Tata Bahasa Cirebon yang mirip dengan Tata Bahasa Jawa, serta adanya beberapa kata dalam bahasa cirebon yang juga memiliki arti sama dalam Bahasa Jawa.</p>
                        <br/>
                        <q className="italic">
                            Isun arep lunga sing umah
                        </q>
                        <br /><br/>
                        <p>Kalimat dalam bahasa cirebon di atas berarti "saya mau pergi dari rumah" di mana jika dialihkan dalam bahasa jawa kata ini menjadi "aku arep lungo saka omah" sehingga didapatkan kata yang hampir serupa akan tetapi ragam kalimat dalam bahasa cirebon tidak hanya terbatas dari serapan Bahasa Jawa, perhatikan ragam dialek dari bahasa cirebon berikut:</p>
                        <br/>
                        <q className="italic">
                            ari khaul mulae bakda magrib mah punten, isun beli bisa teka, ana janji sih karo adhine
                        </q>
                        <br/><br/>
                        <p>
                            Dalam kalimat di atas ditemukan kata "ari" yang merupakan serapan dari bahasa sunda dan kata "bakda" yang merupakan serapan dari bahasa arab. di mana jika dialihkan ke dalam bahasa sunda baku ataupun jawa baku akan ditemukan ragam kosakata yang berbeda dengan kalimat di atas.
                        </p>
                    </TWFRI>
                )
            },
            {
                name: "Kontroversi",
                content: (
                    <div className="w-full p-10 overflow-auto">
                        <p className="font-bold text-lg">Sempat ada pengakuan sebagai suku bangsa/etnis tersendiri</p>
                        <p>Pada mulanya keberadaan Etnis atau Orang Cirebon selalu dikaitkan dengan keberadaan Suku Sunda dan Jawa, tetapi kemudian eksistensinya mengarah pada pembentukan budaya tersendiri, mulai dari ragam batik pesisir yang tidak terlalu mengikuti pakem keraton jawa atau biasa disebut batik pedalaman hingga timbulnya tradisi-tradisi bercorak islam sesuai dengan dibangunnya keraton cirebon pada abad ke 15 yang berlandaskan islam 100%. eksistensi dari keberadaan suku atau orang cirebon yang menyebut dirinya bukan suku sunda ataupun suku jawa akhirnya mendapat jawaban dari sensus penduduk tahun 2010 di mana pada sensus penduduk tersebut tersedia kolom khusus bagi Suku bangsa Cirebon, hal ini berarti keberadaan suku bangsa cirebon telah diakui secara nasional sebagai sebuah suku tersendiri, menurut Erna Tresna Prihatin.</p>
                        <br/>
                        <p className="font-bold text-lg">Suku Cirebon sebagai etnisitas tersendiri</p>
                        <q>Indikator itu (Suku Bangsa Cirebon) dilihat dari bahasa daerah yang digunakan warga Cirebon tidak sama seperti bahasa Jawa atau Sunda. Masyarakat Cirebon juga punya identitas khusus yang membuat mereka merasa sebagai suku bangsa sendiri. Penunjuk lainnya yang mencirikan seseorang sebagai suku bangsa Cirebon adalah dari nama-namanya yang tidak seperti orang Jawa ataupun Sunda. Namun, belum ada penelitian lebih lanjut yang bisa menjelaskan tentang karakteristik identik tentang suku bangsa Cirebon. Untuk menelusuri kesukuan seseorang, hal itu bisa dilakukan dengan garis keturunan ayah kandungnya. Selain itu, jika orang itu sudah merasa memiliki jiwa dan spirit daerah itu (daerah suku bangsa cirebon) maka dia berhak merasa sebagai suku yang dimaksud.</q>
                    </div>
                )
            }
        ]
    },

    {
        name: "Suku Baduy",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <div className="w-full overflow-auto p-10">
                        <p>Baduy atau Kanekes adalah salah satu desa di wilayah Kabupaten Lebak, Banten. Di dalamnya terdapat suku Baduy atau urang Kanekes yang merupakan sekelompok masyarakat yang memegang teguh kearifan lokal. Populasinya kurang lebih 26.000 jiwa dan terbagi menjadi dua wilayah, yaitu Baduy Luar dan Baduy Dalam.</p>
                        <br/>
                        <p>Suku Baduy merupakan suku pedalaman Indonesia yang berada di Banten, Indonesia.</p>
                        <br/>
                        <p>Banyak sekali berbagai fakta unik mengenai Suku Baduy yang menarik termasuk kehidupan mereka di dalam hutan yang menolak perkembangan teknologi dan sulit terdokumentasikan.</p>
                        <br/>
                        <p>Mungkin lo sering melihat Suku Baduy berjalan kaki dari desa sampai kota besar tanpa alas kaki dengan pakaian sederhana berwarna putih atau hitam dan ikat kepala sebagai warisan nenek moyang. Budaya penuh sederhana inilah yang jadi salah satu kearifan lokal yang mereka lestarikan hingga saat ini di tengah kehidupan kota yang kian berubah.</p>
                        <br/>
                        <p>Baru-baru ini, Suku Baduy menolak adanya internet di wilayah mereka dan meminta untuk penghapusan jaringan internet karena bisa mengakibatkan merosotnya moral generasi yang bisa mengakses berbagai aplikasi dan konten yang bertentangan dengan adat.</p>
                    </div>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <div className="w-full overflow-auto p-10">
                        <p>Sejarah Suku Baduy merupakan suku yang berasal dari provinsi Banten, Indonesia. dilansir dari CNN Indonesia, orang Baduy menyebut dirinya Urang Kanekes atau Orang Kanekes . Kata “Baduy” merupakan sebutan dari peneliti Belanda yang mengacu pada kesamaan Suku Baduy dengan kelompok Arab Badawi yang suka berimigrasi atau pindah-pindah tempat.</p>
                        <br/>
                        <p>Suku Baduy ini bermukmin di kaki pegunungan Kendeng di Desa Kanekes, Kecamatan Leuwidamar, Kabupaten Lebak. Sekitar 40 km dari Rangkasbitung, pusat kota di Lebak, Banten.</p>
                        <br/>
                        <p>Dilaporkan dari Detikedu, asal-usul Suku Baduy dikaitkan dengan Nabi Adam sebagai nenek moyang pertama mereka dan yakin Suku Baduy memiliki tugas bertapa yang bertujuan untuk menjaga keharmonisan dunia.</p>
                        <br/>
                        <p>Selain itu, Suku Baduy juga dikaitkan dengan keberadaan Kerajaan Pajajaran pada abad ke 11-12 Masehi.</p>
                        <br/>
                        <p>Saat itu diperkirakan Kerajaan Pajajaran yang dipimpin Raja Prabu Bramaiya Maisatandraman atau Prabu Siliwangi, mulai menguasai daerah Banten, Bogor, Priangan, hingga Cirebon.</p>
                        <br/>
                        <p>Pada abad ke 15, masuklah agama Islam yang dibawa saudagar-saudagar Gujarat dan Sunan Gunung Jati, salah satu Walisongo dari Cirebon. </p>
                        <br/>
                        <p>Masuknya agama Islam ini membuat Kerajaan Pajajaran semakin merosot. Dan mengakibatkan banyaknya rakyat meninggalkan kerajaan dan masuk ke hutan belantara arah Selatan.</p>
                        <br/>
                        <p>Keturunan mereka hingga saat ini menempati kampung Cibeo dengan ciri-ciri memakai baju sangsang putih hasil jahitan tangan, ikat kepala putih, dan sarung biru tua tenunan sendiri. Mereka dikenal dengan julukan Orang Suku Baduy Dalam, mereka lebih tertutup dari Suku Baduy Luar.</p>
                        <br/>
                        <p>Suku Baduy Dalam merupakan suku yang masih memegang prinsip hukum adat dan kuat menjalankan kearifan lokal mereka.</p>
                        <br/>
                        <p>Sedangkan Suku Baduy Luar, memiliki ciri khas pada pakaian yang serba hitam dan ikat kepala biru tua serta sukunya sudah memulai budaya modern seperti naik kendaraan dan pendidikan.</p>
                    </div>
                )
            },
            {
                name: "Adat Istiadat",
                content: (
                    <TWFRI image={{
                        src: "/baduy.png",
                        caption: "Orang-orang Suku Baduy."
                    }}>
                        <p>Adat istiadat orang Baduy Suku Baduy terbagi menjadi dua bagian, suku Baduy dalam dan suku Baduy luar.</p>
                        <br/>
                        <p>Adapun perbedaannya adalah, suku Baduy dalam masih memegang teguh adat dan aturan dengan baik. Sementara suku Baduy luar sudah terpengaruh oleh budaya luar, seperti menggunakan sabun mandi, alat elektronik, dan mengizinkan orang luar menginap. Perbedaan lain juga bisa terlihat dari pakaian mereka. Suku Baduy dalam sehari-hari menggunakan baju berwarna putih yang melambangkan kesucian. Sedangkan pakaian suku Baduy luar adalah serba hitam. Suku Baduy dalam diketahui tinggal di tiga kampung, yaitu Kampung Cikeusik, Cikertawana, dan Cibeo, yang dipimpin oleh ketua adat disebut Pu'un. Suku Baduy luar tinggal di 50 kampung berbeda di kawasan Pegunungan Kendeng. Mereka berbicara menggunakan bahasa Sunda dialek Baduy.</p>
                    </TWFRI>
                )
            }
        ]
    },
    {
        name: "Suku Banten",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <MidText>
                        Suku Banten atau Suku Sunda Banten adalah orang berbahasa Sunda yang mendiami bekas daerah kekuasaan Kesultanan Banten di luar Parahyangan, Cirebon, dan Jakarta. Menurut Sensus Penduduk tahun 2010 oleh Badan Pusat Statistik (BPS) Indonesia, populasi suku Banten mewakili 2,1% dari penduduk Indonesia, atau sekitar 4.657.000 jiwa lebih. Orang Banten umumnya bertutur menggunakan sebuah dialek dari bahasa Sunda yang disebut sebagai bahasa Sunda Banten.
                    </MidText>
                )
            },
            {
                name: "Sejarah / Asal Usul",
                content: (
                    <MidText>
                        Asal usul suku Banten erat kaitannya dengan sejarah berdirinya Kesultanan Banten, Suku Banten bersama Urang Kanekes (Badui) pada dasarnya adalah sub-etnik dari Suku Sunda yang mendiami bekas wilayah Kesultanan Banten (wilayah Karesidenan Banten setelah Kesultanan Banten dihapuskan dan dianeksasi oleh pemerintah Hindia Belanda). Hanya saja setelah dibentuknya Provinsi Banten, kemudian sebagian orang (terutama orang luar negeri) menerjemahkan Bantenese sebagai kesatuan etnik dengan budaya dan bahasa tersendiri, Budaya dan Bahasa Sunda Banten.
                    </MidText>
                )
            },
            {
                name: "Kebudayaan",
                content: (
                    <TTIB images={[
                        {
                            src: "/adat-banten.png",
                            caption: "Tradisi & Budaya Suku Banten"
                        }
                    ]}>
                        Tanah Banten kaya akan adat dan budaya, salah satu yang dominan adalah adat dan budaya suku Banten yang menjadi mayoritas di Provinsi Banten.
                    </TTIB>
                )
            }
        ]
    },

    {
        name: "Suku Madura",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <MidText>
                        Suku Madura merupakan salah satu etnis dengan populasi besar di Indonesia, jumlahnya sekitar 7.179.356 juta jiwa (sensus 2010). Mereka berasal dari Pulau Madura dan pulau-pulau sekitarnya (Pulau Puteran, Pulau Gili Iyang, Pulau Sapudi, Pulau Gili Raja, Pulau Giligenting, Pulau Raas, dan lain-lain). Suku Madura adalah suku perantau yang banyak tersebar di beberapa wilayah-wilayah Indonesia. Selain di Indonesia, beberapa orang Madura perantauan juga dapat ditemui di negara tetangga yaitu Malaysia dan Singapura.
                    </MidText>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <MidText>
                        Seperti Gili Raja, Sapudi, dan Raas. Selain itu, orang Madura tinggal di bagian timur Jawa Timur biasanya disebut wilayah Tapal Kuda, dari Pasuruan sampai utara Banyuwangi. Orang Madura yang berada di Situbondo, Bondowoso, sebelah timur Probolinggo, Lumajang utara, dan utara Jember, jumlahnya paling banyak dan jarang yang bisa berbahasa Jawa, juga Surabaya utara, serta sebagian Malang. Ada juga yang menetap di Bawean, di negeri jiran Malaysia, Timor Leste, Brunei Darussalam misalnya juga ada, ada yang menjadi penduduk tetap (sudah dapat IC/ surat tinggal selamanya.), Bahkan ada juga di negara bagian Timur Tengah.
                    </MidText>
                )
            },
            {
                name: "Budaya Sosial",
                content: (
                    <CLIR images={[
                        {
                            src: "/madura.png",
                            caption: "Budaya Suku Madura"
                        }
                    ]}>
                        <p>Harga diri, juga paling penting dalam kehidupan orang Madura, mereka memiliki sebuah peribahasa lebbi bagus pote tollang, atembang pote mata . Artinya, lebih baik mati (putih tulang) daripada malu (putih mata). Sifatnya seperti ini melahirkan tradisi carok pada masyarakat Madura, tetapi tradisi lambat laun melemah seiring dengan terdidiknya kaum muda di pelosok desa, dahulu mereka memakai kekuatan emosional dan tenaga saja, tetapi kini mereka lebih arif dalam menyikapi berbagai persoalan yang ada.</p>
                        <br/><br/>
                        <p>Ada perbedaan antara Madura Timur (Sumenep dan Pamekasan) dengan Madura Barat (Sampang dan Bangkalan). Orang Madura Timur dikenal lebih halus baik dari sikap, bahasa, dan tatakrama dibandingkan orang Madura Barat. Orang Madura Barat lebih banyak merantau daripada Madura Timur. Hal ini, disebabkan Madura Barat lebih gersang daripada Madura Timur yang dikenal lebih subur.</p>
                    </CLIR>
                )
            }
        ]
    },

    {
        name: "Suku Dayak",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <div className="w-full overflow-auto p-10">
                        <p>Suku Dayak adalah suku bangsa atau kelompok etnik yang mendiami pedalaman Pulau Kalimantan. Kata "daya" serumpun dengan misalnya kata "raya" dalam nama "Toraya" yang berarti "orang (di) atas, orang hulu".</p>
                        <br/><br/>
                        <p>Berdasarkan bukti-bukti arkeologis yang ditemukan di Gua Niah (Sarawak) dan Gua Babi (Kalimantan Selatan), penghuni pertama Kalimantan memiliki ciri-ciri Austro-Melanesia, dengan proporsi tulang kerangka yang lebih besar dibandingkan dengan penghuni Kalimantan masa kini yang mendiami Pulau Kalimantan (Brunei Darussalam, Malaysia yang terdiri dari Sabah dan Sarawak, serta Indonesia yang terdiri dari Kalimantan Barat, Kalimantan Timur, Kalimantan Tengah, Kalimantan Utara, dan Kalimantan Selatan). Ada 3 suku pokok atau 5 suku asli Kalimantan yaitu Melayu, Dayak, Banjar, Kutai, dan Tidung</p>
                        <br/><br/>
                        <p>Menurut sensus Badan Pusat Statistik Republik Indonesia tahun 2010, suku bangsa yang terdapat di Kalimantan Indonesia dikelompokkan menjadi 3 suku pokok yaitu: suku Dayak Indonesia (268 sub etnik/sub suku di Indonesia), Suku Banjar, Suku Melayu, dan kelompok suku asal Kalimantan lainnya. Dahulu, budaya masyarakat Dayak adalah budaya maritim atau bahari. Hampir semua nama sebutan orang Dayak mempunyai arti sebagai sesuatu yang berhubungan dengan "perhuluan" atau sungai, terutama pada nama-nama rumpun dan nama kekeluargaannya.</p>
                        <br/><br/>
                        <p>Ada yang membagi orang Dayak dalam enam rumpun antara lain: rumpun Klemantan alias Kalimantan, rumpun Iban, rumpun Apokayan yaitu Dayak Kayan, Kenyah dan Bahau, rumpun Murut, rumpun Ot Danum-Ngaju dan rumpun Punan. Namun secara ilmiah, para linguis melihat 5 kelompok bahasa yang dituturkan di pulau Kalimantan dan masing-masing memiliki kerabat di luar pulau Kalimantan:</p>
                    </div>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <div className="w-full overflow-auto p-10">
                        <p>Sejarah Penggambaran pria suku Dayak Long Wai/Long We dengan pakaian perang lengkap di Longwai, Kutai Barat, Kalimantan Timur pada ca. 1879-1880 oleh Carl Bock ketika melakukan ekspedisi dari Kutai ke Kota Banjarmasin.</p>
                        <br/>
                        <p>Secara umum kebanyakan penduduk kepulauan Nusantara adalah penutur bahasa Austronesia. Saat ini teori dominan adalah yang dikemukakan linguis seperti Peter Bellwood dan Blust, yaitu bahwa tempat asal bahasa Austronesia adalah Taiwan. Sekitar 4 000 tahun lalu, sekelompok orang Austronesia mulai bermigrasi ke Filipina. Kira-kira 500 tahun kemudian, ada kelompok yang mulai bermigrasi ke selatan menuju kepulauan Indonesia sekarang, dan ke timur menuju Pasifik.</p>
                        <br/>
                        <p>Namun orang Austronesia ini bukan penghuni pertama pulau Borneo. Antara 60.000 dan 70.000 tahun lalu, waktu permukaan laut 120 atau 150 meter lebih rendah dari sekarang dan kepulauan Indonesia berupa daratan (para geolog menyebut daratan ini "Sunda"), manusia sempat bermigrasi dari benua Asia menuju ke selatan dan sempat mencapai benua Australia yang saat itu tidak terlalu jauh dari daratan Asia.</p>
                        <br/>
                        <p>Dari pegunungan itulah berasal sungai-sungai besar seluruh Kalimantan. Diperkirakan, dalam rentang waktu yang lama, mereka harus menyebar menelusuri sungai-sungai hingga ke hilir dan kemudian mendiami pesisir pulau Kalimantan. Tetek Tahtum menceritakan migrasi suku Dayak Ngaju dari daerah perhuluan sungai-sungai menuju daerah hilir sungai-sungai.</p>
                        <br/>
                        <p>Di daerah selatan Kalimantan Suku Dayak pernah membangun sebuah kerajaan. Dalam tradisi lisan Dayak di daerah itu sering disebut Nansarunai Usak Jawa, yakni kerajaan Nansarunai dari Dayak Maanyan yang dihancurkan oleh Majapahit, yang diperkirakan terjadi antara tahun 1309-1389. Kejadian tersebut mengakibatkan suku Dayak Maanyan terdesak dan terpencar, sebagian masuk daerah pedalaman ke wilayah suku Dayak Lawangan. Arus besar berikutnya terjadi pada saat pengaruh Islam yang berasal dari kerajaan Demak bersama masuknya para pedagang Melayu (sekitar tahun 1520).</p>
                        <br/>
                        <p>Sebagian besar suku Dayak di wilayah selatan dan timur kalimantan yang memeluk Islam keluar dari suku Dayak dan tidak lagi mengakui dirinya sebagai orang Dayak karena adanya pengaruh budaya, bahasa, adat bahkan DNA/genetika yang sangat kuat dari para pendatang karena adanya akumulasi. Hal ini membuat perbauran/akulturasi suatu suku sehingga membentuk budaya baru yang kemudian menjadi suku yang mandiri/melahirkan etnis tersendiri. Walau begitu, orang Dayak yang hanya memeluk Islam tetap teguh dengan Dayaknya mereka tetap lah Dayak tetapi disebut sebagai orang Senganan/Dayak Senganan (kecuali orang-orang Dayak yang berakulturasi yang akhirnya melahirkan kebudayaan/suku baru yang bukan bagian dari Dayak lagi) tetapi biar begitu asal-usul mereka ya tetaplah Dayak. Contoh saja suku Dayak yang memeluk Islam lalu membentuk budaya baru seperti Banjar dan Kutai, mereka lebih senang jika menyebut dirinya sebagai atau orang Banjar dan Orang Kutai. Sedangkan orang Dayak yang menolak agama Islam & tetap teguh dengan agama lama kembali menyusuri sungai, masuk ke pedalaman, bermukim di daerah-daerah Kayu Tangi, Amuntai, Margasari, Batang Amandit, Batang Labuan Amas dan Batang Balangan. Sebagian lagi terus terdesak masuk rimba. Orang Dayak pemeluk Islam kebanyakan berada di Kalimantan Selatan dan sebagian Kotawaringin, salah seorang pimpinan Banjar Hindu yang terkenal adalah Lambung Mangkurat menurut orang Dayak adalah seorang Dayak (Ma’anyan atau Ot Danum). Di Kalimantan Timur, orang Suku Tonyoy-Benuaq yang memeluk Agama Islam menyebut dirinya sebagai Suku Kutai. Tidak hanya dari Nusantara, bangsa-bangsa lain juga berdatangan ke Kalimantan. Bangsa Tionghoa tercatat mulai datang ke Kalimantan pada masa Dinasti Ming yang tercatat dalam buku 323 Sejarah Dinasti Ming (1368-1643). Dari manuskrip berhuruf hanzi disebutkan bahwa kota yang pertama dikunjungi adalah Banjarmasin dan disebutkan bahwa seorang pangeran yang berdarah Biaju menjadi pengganti Sultan Hidayatullah I . Kunjungan tersebut pada masa Sultan Hidayatullah I dan penggantinya yaitu Sultan Mustain Billah. Hikayat Banjar memberitakan kunjungan tetapi tidak menetap oleh pedagang jung bangsa Tionghoa dan Eropa (disebut Walanda) di Kalimantan Selatan telah terjadi pada masa Kerajaan Banjar Hindu (abad XIV). Pedagang Tionghoa mulai menetap di kota Banjarmasin pada suatu tempat dekat pantai pada tahun 1736.</p>
                        <br/>
                        <p>Kedatangan bangsa Tionghoa di selatan Kalimantan tidak mengakibatkan perpindahan penduduk Dayak dan tidak memiliki pengaruh langsung karena mereka hanya berdagang, terutama dengan kerajaan Banjar di Banjarmasin. Mereka tidak langsung berniaga dengan orang Dayak. Peninggalan bangsa Tionghoa masih disimpan oleh sebagian suku Dayak seperti piring malawen, belanga (guci) dan peralatan keramik. Tidak hanya itu, sebagian dari mereka juga ada bangsa Eropa.</p>
                        <br/>
                        <p>Sejak awal abad V bangsa Tionghoa telah sampai di Kalimantan. Pada abad XV Kaisar Yongle mengirim sebuah angkatan perang besar ke selatan (termasuk Nusantara) di bawah pimpinan Cheng Ho, dan kembali ke Tiongkok pada tahun 1407, setelah sebelumnya singgah ke Jawa, Kalimantan, Malaka, Manila dan Solok. Pada tahun 1750, Sultan Mempawah menerima orang-orang Tionghoa (dari Brunei) yang sedang mencari emas. Orang-orang Tionghoa tersebut membawa juga barang dagangan di antaranya candu, sutera, barang pecah belah seperti piring, cangkir, mangkuk dan guci.</p>
                    </div>
                )
            },
            {
                name: "Tradisi",
                content: (
                    <CLIR images={[
                        {
                            src: "/naik-dango.png",
                            caption: "Tradisi Dayak Naik Dango"
                        }
                    ]}>
                        <p>Dilansir dari berbagai sumber, suku Dayak memiliki berbagai tradisi unik yang masih dijaga hingga saat ini. Beberapa di antaranya meliputi:</p>
                        <br/>
                        <ol className="list-decimal flex flex-col items-center gap-5">
                            <li>
                                <p className="font-bold text-lg">Tradisi Kuping Panjang</p>
                                <p>Di Kalimantan Timur, perempuan Dayak memiliki tradisi unik memanjangkan telinga mereka. Keyakinan di balik tradisi ini adalah bahwa telinga yang panjang membuat perempuan terlihat semakin cantik.</p>
                                <br/>
                                <p>Selain untuk aspek kecantikan, memanjangkan telinga juga memiliki nilai simbolis dalam menunjukkan status kebangsawanan dan melatih kesabaran.</p>
                                <br/>
                                <p>Proses memanjangkan telinga melibatkan penggunaan logam sebagai pemberat yang ditempatkan di bawah telinga atau digunakan untuk anting-anting.</p>
                                <br/>
                                <p>Perempuan Dayak diperbolehkan memanjangkan telinga hingga dada, sementara laki-laki bisa memanjangkan telinga hingga bawah dagu.</p>
                            </li>
                            <li>
                                <p className="font-bold text-lg">Tradisi Tato</p>
                                <p>Tato atau rajah adalah simbol kekuatan, hubungan dengan Tuhan, dan perjalanan kehidupan bagi suku Dayak. Tradisi tato ini masih dilakukan baik oleh laki-laki maupun perempuan Dayak.</p>
                                <br/>
                                <p>Proses pembuatan tato terkenal karena masih menggunakan peralatan sederhana, di mana orang yang akan ditato akan menggigit kain sebagai pereda sakit, dan tubuhnya akan dipahat menggunakan alat tradisional.</p>
                                <br/>
                                <p>Setiap gambar tato memiliki makna khusus, misalnya tato bunga terong menandakan kedewasaan bagi laki-laki, sementara perempuan mendapatkan tato Tedak Kassa di kaki untuk menandakan kedewasaan mereka.</p>
                                <br/>
                                <p>Dalam konteks sejarah, dikatakan bahwa suku Dayak Iban menggunakan tato ini selama peperangan untuk membedakan antara teman dan musuh.</p>
                            </li>
                            <li>
                                <p className="font-bold text-lg">Tradisi Tiwah</p>
                                <p>Tiwah adalah upacara pemakaman masyarakat Dayak Ngaju yang melibatkan pembakaran tulang belulang kerabat yang telah meninggal.</p>
                                <br/>
                                <p>Tradisi ini dilakukan sesuai dengan kepercayaan Kaharingan dan dipercaya membantu arwah orang yang meninggal untuk menuju dunia akhirat atau disebut juga dengan nama Lewu Tatau.</p>
                                <br/>
                                <p>Selama pelaksanaan Tiwah, keluarga yang ditinggalkan akan menari dan bernyanyi sambil mengelilingi jenazah.</p>
                                <br/>
                                <p>Proses pembakaran tulang belulang jenazah dilakukan secara simbolis, sehingga tidak semua tulang jenazah ikut dibakar dalam upacara Tiwah.</p>
                            </li>
                            <li>
                                <p className="font-bold text-lg">Tradisi Ngayau</p>
                                <p>Tradisi berburu kepala ini, yang pernah ada tetapi sekarang sudah dihentikan, melibatkan pemburuan kepala musuh oleh beberapa rumpun Dayak, seperti Ngaju, Iban, dan Kenyah.</p>
                                <br/>
                                <p>Tradisi ini penuh dendam turun-temurun sebab anak akan memburu keluarga pembunuh ayah mereka dan membawa kepala musuh ke rumah. Ngayau juga menjadi syarat agar pemuda Dayak bisa menikahi gadis yang mereka pilih.</p>
                                <br/>
                                <p>Pemuda Dayak diwajibkan untuk berpartisipasi dalam tradisi berburu kepala sebagai cara untuk membuktikan kemampuannya dalam memuliakan keluarganya dan meraih gelar Bujang Berani.</p>
                                <br/>
                                <p>Larangan terhadap tradisi ini dihasilkan dari musyawarah Tumbang Anoi pada tahun 1874, yang bertujuan menghindari perselisihan di antara suku Dayak.</p>
                            </li>
                        </ol>
                    </CLIR>
                )
            }
        ]
    },

    {
        name: "Suku Banjar",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <div className="w-full overflow-auto p-10">
                        <p>Suku Banjar adalah suatu kelompok etnis yang berasal dari wilayah Banjar di Provinsi Kalimantan Selatan. Suku Banjar merupakan penutur Bahasa Banjar (dengan berbagai macam dialeknya), dan terikat dalam persamaan sejarah atau latar belakang serta kebudayaan. Suku Banjar merupakan salah satu etnis pribumi asli Kalimantan di Indonesia yang mana berbagai elemen kebudayaannya secara resmi diakui oleh pemerintah republik Indonesia dan dianggap sebagai salah satu komponen penting warisan kebudayaan nasional.</p>
                        <br/>
                        <p>Dikarenakan faktor historis pengislaman pribumi Kalimantan, mayoritas masyarakat etnis Banjar pada umumnya kini merupakan pemeluk agama Islam (Muslim), masyarakat Dayak ini menunjukkan karakteristik yang agak berbeda dari kebanyakan Dayak di wilayah pedalaman Kalimantan; yang mana masyarakat etnis Banjar cenderung memiliki gaya hidup dan norma-norma yang berbasis Islami. Etnis Banjar juga terkenal akan kemampuannya dalam bidang perniagaan, pada masa kini populasi diaspora Banjar dapat ditemui pula secara global atau di seluruh belahan dunia; termasuk diantaranya dalam cakupan wilayah Asia Tenggara maupun hingga ke Timur Tengah (terutama di Arab Saudi).</p>
                        <br/>
                        <p>Suku Banjar atau biasa disebut Urang Banjar, berasal dari wilayah Kalimantan Selatan. Sebagian dari mereka juga berada di Kalimantan Tengah dan sebagian di Kalimantan Timur.</p>
                        <br/>
                        <p>Populasi suku Banjar dalam jumlah besar juga dapat ditemui di wilayah Riau, Jambi, Sumatera Utara, dan Semenanjung Malaysia. Hal ini terjadi karena banyaknya migrasi orang Banjar ke Kepulauan Melayu pada abad ke-19.</p>
                        <br/>
                        <p>Berdasarkan sensus penduduk tahun 2010, orang suku Banjar berjumlah 4,1 juta jiwa. Sekitar 2,7 juta orang Banjar tinggal di Kalimantan Selatan, 1 juta orang Banjar tinggal di wilayah Kalimantan lainnya, serta 500 ribu orang Banjar lainnya tinggal di luar Kalimantan.</p>
                    </div>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <div className="w-full overflow-auto p-10">
                        <p>Sejak dahulu, orang Banjar mulai menempati beberapa daerah di Kalimantan Tengah dan Kalimantan Timur, terutama kawasan dataran rendah dan hilir dari kawasan arus sungai wilayah tersebut.</p>
                        <br/>
                        <p>Mereka berasal dari daerah Banjar yang merupakan pembauran masyarakat beberapa daerah aliran sungai seperti DAS bahan, DAS Barito, DAS Martapura, dan DAS Tabanio.</p>
                        <br/>
                        <p>Dari sini, suku Banjar bergerak melakukan migrasi secara meluas ke berbagai daerah Nusantara, bahkan hingga ke Madagaskar di Afrika.</p>
                        <br/>
                        <p>Suku Banjar terbentuk dari suku-suku Bukit, Maanyan, Lawangan, dan Ngaju yang banyak juga dipengaruhi oleh Melayu dan Jawa. Maka, dapat ditarik kesimpulan bahwa asal usul suku Banjar berasal dari campuran beberapa suku, meskipun yang dominan adalah suku Dayak.</p>
                        <br/>
                        <p>Suku ini umumnya terbagi lagi menjadi 3 sub suku, yaitu Banjar Pahuluan, Banjar Batang Banyu, dan Banjar Kuala.</p>
                        <br/>
                        <p>Banjar Pahuluan, pada dasarnya adalah penduduk daerah lembah sungai atau cabang sungai Bahan yang berhulu ke pegunungan Meratus. Kelompok ini terdiri dari campuran orang Melayu-Hindu dan orang Dayak Meratus yang bercakap bahasa Melayik.</p>
                        <br/>
                        <p>Lalu, orang Banjar Batang Banyu mendiami lembah sungai Bahan. Mereka adalah campuran orang Pahuluan, orang Melayu-Hindu/Buddha, orang Keling-Gujarat, orang Dayak Maanyan, orang Dayak Lawangan, orang Dayak Bukit, dan orang Jawa-Hindu Majapahit.</p>
                        <br/>
                        <p>Sedangkan orang Banjar Kuala menghuni daerah sekitar Banjarmasin dan Martapura. Kelompok ini merupakan campuran orang Kuin, orang Batang Banyu, orang Dayak Ngaju, orang Kampung Melayu, orang Kampung Bugis-Makassar, orang Kampung Jawa, orang Kampung Arab, dan beberapa orang Cina Parit yang masuk Islam.</p>
                        <br/>
                        <p>Hingga saat ini, proses amalgamasi masih berlangsung di dalam kelompok masyarakat suku Banjar Kuala.</p>
                    </div>
                )
            },
            {
                name: "Kebudayaan",
                content: (
                    <div className="w-full overflow-auto p-10">
                        <p>Umumnya, adat kebudayaan masyarakat Banjar berakar dari suku Dayak Kaharingan. Namun, setelah pengislaman massal, adat Dayak Kaharingan tadi disesuaikan dengan keyakinan baru mereka yaitu Islam.</p>
                        <br/>
                        <p>Ada beberapa ciri khas yang bisa ditemukan dari orang Banjar. Pertama, mereka memiliki keterampilan mengolah area pasang surut. Pasalnya kehidupan suku banjar terutama kelompok Banjar Kuala dan Batang Banyu sangat dekat dengan sungai.</p>
                        <br/>
                        <p>Sebagai sarana transportasi, orang Banjar mengembangkan beragam Jukung atau perahu sesuai fungsinya. Mereka memanfaatkan kondisi geografis Kalimantan Selatan yang memiliki banyak sungai dengan sebaik mungkin.</p>
                        <br/>
                        <p>Sehingga, rata-rata menjadi ahli dalam mengolah lahan pasang surut menjadi kawasan permukiman dan budi daya pertanian.</p>
                        <br/>
                        <p>Lalu, suku Banjar memiliki rumah tradisional mereka sendiri yaitu Rumah Banjar. Ciri-ciri arsitekturnya yaitu memiliki perlambang, penekanan pada atap, ornamen, serta dekoratif dan simetris. Diantara semua jenis rumah Banjar, tipe Bubungan Tinggi adalah yang paling dikenal sebagai identitas suku ini.</p>
                        <br/>
                        <p>Suku banjar juga memiliki tradisi lisan yang dipengaruhi oleh budaya Melayu, Arab, dan Cina. Tradisi lisan Banjar yang menjadi kesenian ini berkembang pada abad ke-18, diantaranya seperti Madihin dan Lamut.</p>
                        <br/>
                        <p>Madihin adalah puisi rakyat anonim bertipe hiburan yang dilisankan atau dituliskan dalam bahasa Banjar dengan bentuk fisik dan mental tertentu, yang disesuaikan dengan khasanah folklor Banjar.</p>
                        <br/>
                        <p>Sedangkan Lamut merupakan tradisi berkisah yang berisi cerita tentang pesan dan nilai-nilai keagamaan, sosial, serta budaya Banjar.</p>
                        <br/>
                        <p>Kebudayaan lainnya adalah seni teater tradisional yang disebut Mamanda. Mamanda hampir mirip dengan Lenong, namun tokoh-tokoh yang dimainkan lebih baku seperti raja, perdana menteri, panglima, permaisuri, dan sebagainya.</p>
                        <br/>
                        <p>Suku Banjar yang berasal dari Kalimantan Selatan ini juga memiliki musik tradisional khas bernama musik Panting. Disebut Panting, karena berbentuk seperti gambus yang memakai senar atau panting.</p>
                        <br/>
                        <p>Umumnya adat kebudayaan Banjar berakar dari ritual keagamaan Kaharingan yang setelah pengislaman massal adat kebudayaan Kaharingan ini disunting untuk disesuaikan dengan keyakinan baru mereka yaitu Islam.</p>
                        <br/>
                        <p>Salah satu contohnya adalah adat baayun anak yang pada zaman dahulu adalah ritual pemberkatan anak penganut Kaharingan dengan dibacakan mantra-mantra Balian, sekarang dalam adat Banjar yang Islam baayun anak tidak lagi menggunakan mantra-mantra Balian akan tetapi dengan pembacaan ayat suci Al-Quran dan salawat kepada Nabi Muhammad SAW.</p>
                    </div>
                )
            }
        ]
    },
    {
        name: "Suku Bugis",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <MidText>
                        Suku Bugis merupakan kelompok etnik yang berasal dari wilayah Sulawesi Selatan. Penciri utama kelompok etnik ini adalah bahasa dan adat-istiadat, sehingga pendatang Melayu dan Minangkabau yang merantau ke Sulawesi sejak abad ke-15 sebagai tenaga administrasi dan pedagang di Kerajaan Gowa dan telah terakulturasi, juga dikategorikan sebagai orang Bugis. Berdasarkan sensus penduduk Indonesia tahun 2000, populasi orang Bugis sebanyak sekitar enam juta jiwa. Kini orang-orang Bugis menyebar pula di berbagai provinsi Indonesia, seperti Sulawesi Tenggara, Sulawesi Tengah, Papua, DKI Jakarta, Kalimantan Timur, Kalimantan Selatan, Jambi, Riau, dan Kepulauan Riau. Disamping itu orang-orang Bugis juga banyak ditemukan di Malaysia dan Singapura yang telah beranak pinak dan keturunannya telah menjadi bagian dari negara tersebut. Karena jiwa perantau dari masyarakat Bugis, maka orang-orang Bugis sangat banyak yang pergi merantau ke mancanegara.
                    </MidText>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <MidText>
                        Bugis adalah suku yang tergolong ke dalam suku-suku Melayu Deutero. Masuk ke Nusantara setelah gelombang migrasi pertama dari daratan Asia tepatnya Yunan. Kata "Bugis" berasal dari kata To Ugi, yang berarti orang Bugis. Penamaan "ugi" merujuk pada raja pertama kerajaan Cina yang terdapat di Pammana, Kabupaten Wajo saat ini, yaitu La Sattumpugi. Ketika rakyat La Sattumpugi menamakan dirinya, maka mereka merujuk pada raja mereka. Mereka menjuluki dirinya sebagai To Ugi atau orang-orang atau pengikut dari La Sattumpugi. La Sattumpugi adalah ayah dari We Cudai dan bersaudara dengan Batara Lattu, ayah dari Sawerigading. Sawerigading sendiri adalah suami dari We Cudai dan melahirkan beberapa anak termasuk La Galigo yang membuat karya sastra terbesar di dunia dengan jumlah kurang lebih 9000 halaman folio. Sawerigading Opunna Ware (Yang dipertuan di Ware) adalah kisah yang tertuang dalam karya sastra I La Galigo dalam tradisi masyarakat Bugis. Kisah Sawerigading juga dikenal dalam tradisi masyarakat Luwuk, Kaili, Gorontalo dan beberapa tradisi lain di Sulawesi seperti Buton.
                    </MidText>
                )
            },
            {
                name: "Kebudayaan",
                content: (
                    <TTIB images={[
                        {
                            src: "/bugis.png",
                            caption: "Suku Bugis"
                        }
                    ]}>
                        Suku Bugis menganggap lontara sebagai sumber tertulis yang berkaitan dengan sejarah, budaya, dan kehidupan sosial masyarakatnya. Orang Bugis menggunakan lontara sebagai alat untuk menyampaikan cara berpikir dan pengalaman masa lalu masyarakatnya. Lontara dijadikan sebagai simbol budaya suku Bugis yang diwariskan dari masyarakat terdahulu ke masyarakat masa berikutnya.
                    </TTIB>
                )
            }
        ]
    },

    {
        name: "Suku Paser",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <MidText>
                        Suku Paser atau Dayak Paser adalah suku bangsa yang tanah asal nenek moyangnya berada di sepanjang pulau tenggara Kalimantan atau Kalimantan atau terletak di bagian Selatan dari provinsi Kalimantan Timur, Indonesia. Orang Dayak Paser diami di beberapa kabupaten dan kota di provinsi Kalimantan Timur maupun provinsi Kalimantan Selatan yakni di Kabupaten Paser , Kabupaten Penajam Paser Utara , dan Kota Balikpapan . Juga ada di Samboja yang kini masuk kabupaten Kutai Kartanegara, Bongan, Resak dan Pringtali yang kini masuk Kabupaten Kutai Barat ( Kalimantan Timur ), serta di Sekayu Baru, Pondok Labu, Sekandis dan Binturung yang sekarang ada di Kecamatan Pamukan utara dan Pamukan Selatan, Kabupaten Kota Baru di provinsi Kalimantan Selatan . Suku Paser sebagian besar beragama Islam berkisar 95 % dan sebagian beragama Kristen , Hindu Kaharingan atau Iden.
                    </MidText>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <div className="w-full overflow-auto p-10">
                        <p>Orang Paser telah mendirikan kerajaan Islam yaitu Kesultanan Paser (Kerajaan Sadurangas) semenjak awal abad ke XVI yakni Tahun 1516 hingga berakhir pada tanggal, 07 April 1906 Suku bangsa Paser memiliki tiga kultur Budaya dasar yakni Budaya Pedalaman, Pesisir dan Budaya Keraton/Kesultanan sehingga termasuk ke dalam suku yang berbudaya Melayu (budaya kesultanan/lingkungan hukum adat Melayu). Suku bangsa Paser memiliki peradaban yang sangat tua bahkan dalam cerita Mitologi (Sempuri) Suku bangsa Paser adalah Salah satu Suku bangsa yang tertua di pulau Kalimantan/Kalimantan dan mereka menyebut peradaban Bansu Tatau Datai Danum yang artinya manusia yang hidup di pesisir pantai, sungai dan danau dari peradaban Bansu Tatau Datai Danum.</p>
                        <br/>
                        <p>Selanjutnya muncul peradaban Benuo Rekan Tatau yang pusatnya terletak di hulu sungai Telake dan sungai Kendilo di Kabupaten Paser , provinsi Kalimantan Timur . Diantara kedua sungai tersebut, terdapat gunung yang disakralkan oleh orang-orang suku bangsa Paser yakni Tunden jamut yang kini lebih dikenal dengan nama Gunung Lumut dalam ritual suku bangsa Paser sering disebut dalam mantra-mantra Besoyong dengan nama "Lumut olo bolum". Sebelum orang-orang luar menempati Pulau yang besar ini dengan Nama Kalimantan atau Borneo, orang Paser jauh berabad-abad yang lalu telah mencetak pulau Kalimantan/Borneo ini dengan nama Pulau Benuo Rekan Tatau yang artinya adalah Negeri yang Luas dan kaya raya kemudian dari peradaban Benuo Rekan Tatau ini Melahirkan Budaya Belian dan membuat anyaman Anjat sehingga pada lambang Kabupaten Paser terdapat gambar anjat.</p>
                    </div>
                )
            },
            {
                name: "Adat & Budaya",
                content: (
                    <TWFRI image={{
                        src: "/pakaian-paser.png",
                        caption: "Pakaian Adat Paser"
                    }}>
                        <p>Salah satu ciri khas budaya yang ada di masyarakat Indonesia adalah pelaksanaan ritual. Humaeni (2016) dalam Widaty dkk. (2021) menjelaskan bahwa ritual dilakukan untuk memecahkan permasalahan kehidupan masyarakat atau tujuan simbolik lainnya. Begitu juga dengan masyarakat di daerah Kalimantan Timur yang masih melaksanakan praktik ritual budaya. Masyarakat suku Paser merupakan salah satu sub suku Dayak yang menetap di wilayah Kota Balikpapan, Kabupaten Paser dan Kabupaten Penajam Paser Utara. Mereka masih melaksanakan berbagai ritual yang berkaitan dengan kehidupan bermasyarakat. Beberapa contoh ritual yang masih dilestarikan oleh suku Paser antara lain:</p>
                        <br/>
                        <ol className="list-decimal flex flex-col items-center gap-5">
                            <li>
                                <p className="font-bold text-lg">Upacara Balian</p>
                                <p>Balian merupakan upacara adat yang bertujuan sebagai sarana media pengobatan tradisional untuk penyakit jasmani maupun rohani yang tidak bisa disembuhkan secara medis. Menurut Helim & Syahriana (2019) dalam Widaty dkk (2023), masyarakat suku Paser mempercayai upacara Balian sebagai bentuk penghormatan, dan kepercayaan serta wujud rasa syukur mereka terhadap roh leluhur. Upacara Balian memiliki tiga tahapan pelaksanaan yaitu persiapan, inti upacara, dan penutupan. Pelaksanaan upacara Balian dipimpin oleh seorang pemelian yang diikuti oleh pelaku upacara yaitu pengugu ramu, balian dadas, pembaca mantra, penyaji sesajen, dan pemain musik. Upacara Balian mengandung makna doa-doa keselamatan agar masyarakat terhindar dari marabahaya.</p>
                            </li>
                            <li>
                                <p className="font-bold text-lg">Nondoi</p>
                                <p>Nondoi merupakan salah satu jenis upacara Balian masyarakat suku Paser yang menjadi festival budaya di Kabupaten Penajam Paser Utara (PPU). Upacara Nondoi merupakan salah satu ritual adat tertua bagi masyarakat suku Paser. Upacara ini pertama kali dilaksanakan oleh Nalau Raja Nondoi, salah satu raja Kasultanan Paser. Nondoi merupakan upacara adat yang bertujuan untuk bersih kampung dari hal-hal negatif yang dapat mengganggu masyarakat.</p>
                            </li>
                            <li>
                                <p className="font-bold text-lg">Mayar Sala</p>
                                <p>Mayar Sala merupakan tradisi masyarakat suku Paser untuk mendamaikan perselisihan atau pertikaian yang terjadi antar warga suku Paser maupun dengan warga di luar suku Paser. Dalam tradisi Mayar Sala, kedua pihak yang bertikai melakukan musyawarah yang dipimpin oleh seorang Mulung dan kepala suku adat (Tuwo Kampoeng). Pelaksanaan tradisi ini diharapkan dapat meredam terjadinya dendam kedua belah pihak yang bertikai melalui perantara roh leluhur.</p>
                            </li>
                            <li>
                                <p className="font-bold text-lg">Tipong Tawar</p>
                                <p>Tipong tawar merupakan mantra yang digunakan dalam ritual pertanian yang dilakukan oleh masyarakat suku Paser. Mantra ini diyakini sebagai media perantara antara keinginan masyarakat yang disampaikan kepada Tuhan. Pembacaan mantra Tipong tawar dilakukan oleh seorang Balian atau dukun ketika masa menanam padi (Nasok Nias) dan panen (Nasok Nias). Mantra Tipong Tawar merupakan bentuk sastra lisan yang menggunakan bahasa Paser. Dalam mantra tersebut mengandung makna harapan dan doa agar usaha pertanian mereka mendapatkan berkah dari Tuhan. Selain itu, ritual ini juga menjadi sarana gotong royong masyarakat dalam kegiatan menanam dan panen padi.</p>
                            </li>
                        </ol>
                    </TWFRI>
                )
            }
        ]
    },
    {
        name: "Suku Kutai",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <div className="w-full overflow-auto p-10">
                        <p>Suku Kutai, atau Urang Kutai (Jawi: كوتاي) adalah salah satu dari rumpun suku dayak yaitu Dayak Lawangan yang mendiami wilayah Kalimantan Timur yang mayoritas saat ini beragama Islam dan hidup di tepi sungai.</p>
                        <br/>
                        <p>Pada awalnya Kutai merupakan nama suatu teritori tempat bermukimnya masyarakat asli Kalimantan. Suku Kutai berdasarkan jenisnya adalah termasuk suku Dayak Islam yang banyak menyerap nilai nilai kebudayaan suku Banjar dan Melayu pesisir yang berada di Kalimantan Timur.</p>
                        <br/>
                        <p>Adat-istiadat lama Suku Kutai memiliki beberapa kesamaan kesamaan dengan adat-istiadat Suku Dayak rumpun Ot Danum (khususnya Tunjung-Benuaq) misalnya; Erau (upacara adat yang paling meriah), belian (upacara tarian penyembuhan penyakit), memang, dan mantra-mantra serta ilmu gaib seperti; parang maya, panah terong, polong, racun gangsa, perakut, peloros, dan lain-lain. Di mana adat-adat tersebut dimiliki oleh Suku Kutai dan Suku Dayak. Bahkan hingga saat ini masih ada Suku Kutai di Desa Kedang Ipil, Kutai Kartanegara yang menganut agama Kaharingan sama halnya dengan Suku Dayak. Selain itu Suku Kutai juga memiliki kedekatan budaya dengan Suku Banjar karena terjadi asimilasi dengan budaya melayu banjar seperti pertunjukan Mamanda, serta budaya Melayu seperti Jepen/Zapin, musik Panting Gambus, budaya bersyair seperti Tarsul, dll.</p>
                    </div>
                )
            },
            {
                name: "Asal Mula",
                content: (
                    <div className="w-full flex flex-col justify-center items-center p-10">
                        <p>Menurut tradisi lisan dari Suku Kutai, Proses perpindahan penduduk dari daratan asia yang kini disebut provinsi Yunan - Cina selatan berlangsung antara tahun 3000-1500 Sebelum Masehi. Mereka terdiri dari kelompok yang mengembara hingga sampai di pulau Kalimantan dengan rute perjalanan melewati Hainan, Taiwan, Filipina kemudian menyeberangi Laut Cina Selatan menuju Kalimantan Timur. Pada saat itu perpindahan penduduk dari pulau satu ke pulau lain tidaklah begitu sulit kerena pada zaman es permukaan laut sangat turun akibat pembekuan es di kutub Utara dan Selatan sehingga dengan hanya menggunakan perahu kecil bercadik yang diberi sayap dari batang bambu mereka dengan mudah menyeberangi selat karimata dan laut cina selatan menuju Kalimantan Timur.</p>
                        <br/>
                        <p>Para imigran dari daratan Cina ini masuk ke Kalimantan Timur dalam waktu yang berbeda, kelompok pertama datang sekitar tahun 3000-1500 Sebelum Masehi termasuk dalam kelompok ras Negrid dan weddid kelompok ini diperkirakan meninggalkan Kalimantan dan sebagiannya punah. Kemudian sekitar tahun 500 sebelum masehi berlangsung lagi arus perpindahan penduduk yang lebih besar dan kelompok inilah yang diperkirakan menjadi cikal bakal penduduk Kutai. Setelah adanya arus perpindahan penduduk dari Yunan terjadilah percampuran penduduk kerena perkawinan.</p>
                    </div>
                )
            },
            {
                name: "Adat Istiadat",
                content: (
                    <TTIB images={[
                        {
                            src: "/orang-kutai.png",
                            caption: "Orang-orang Suku Kutai."
                        }
                    ]}>
                        Adat-istiadat lama Suku Kutai memiliki banyak kesamaan dengan adat-istiadat Suku Dayak rumpun Ot Danum (khususnya Tunjung-Benuaq) misalnya; Erau (upacara adat yang paling meriah), belian (upacara tarian penyembuhan penyakit), memang, dan mantra-mantra serta ilmu gaib seperti; parang maya, panah terong, polong, racun gangsa, perakut, peloros, dan lain-lain. Dimana adat-adat tersebut dimiliki oleh Suku Kutai dan Suku Dayak.
                    </TTIB>
                )
            }
        ]
    },
    {
        name: "Suku Balik",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <div className="w-full overflow-auto p-10">
                        <p>Suku Balik (alias Paser Balik secara suku sakat) adalah kelompok etnis yang mendiami Sepaku di Penajam Paser Utara dan Kota Balikpapan, Kalimantan Timur. Suku Balik dianggap sebagai salah satu sub-suku dari suku Paser, walaupun menurut Sibukdin, kepala adat Balik, suku Balik bukan merupakan bagian dari suku Paser dan merupakan suku yang berbeda.</p>
                        <br/>
                        <p>Nama Kota Balikpapan diambil dari nama suku ini, yakni pada kata "Balik", dan kata "Papan" berasal dari masyarakat suku Balik yang dahulu dikenal sebagai penyuplai papan untuk Kerajaan Kutai Kartanegara. Saat ini, suku Balik merupakan minoritas di Balikpapan dan Penajam Paser Utara. Di Penajam Paser Utara, tepatnya di kecamatan Sepaku, jumlahnya tidak lebih dari 1.000 jiwa atau 200 KK pada tahun 2023, yang tersebar di tiga wilayah, yakni di Bumi Harapan, Sepaku, dan Pemaluan.</p>
                        <br/>
                        <p>Wilayah adat suku Balik juga termasuk kedalam proyek pembangunan IKN Nusantara, yakni pemindahan ibukota negara Indonesia dari Jakarta ke Nusantara. Dalam proyek ini, ratusan rumah warga suku Balik terancam direlokasi akibat proyek penanganan banjir Sungai Sepaku. Sedangkan menurut pengakuan Gubernur Kalimantan Timur, Isran Noor, tidak ada suku asli di kawasan IKN, karena awalnya merupakan hutan alam dan berubah menjadi hutan produksi. Seiring pengembangan itu mulainya datang penduduk yang menempati daerah tersebut termasuk para transmigran.</p>
                    </div>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <div className="w-full overflow-auto p-10">
                        <p>Pada abad ke-18, suku Balik mengabdi kepada Kerajaan Kutai Kartanegara dan Kesultanan Paser. Menurut Sibukdin, “Saat itu, sudah ada batas-batas wilayah yang ditempati suku Balik dengan suku lainnya”. Wilayah suku Balik berbatasan dengan wilayah suku Kutai disebuah tempat bernama Gunung Parung. Kemudian berbatasan dengan suku Paser di Sungai Tunan. Wilayah tersebut pernah merupakan hadiah pernikahan Sultan Paser kepada putrinya yang menikah dengan bangsawan Kutai.</p>
                        <br/>
                        <p>Dahulu suku Balik hidup di hutan, ada lima gua yang menjadi tempat penghidupan bagi mereka, yakni Gua Tembinus, Bekayas, Belatat, Parung, dan Liang Tulus. Di gua-gua itulah, suku Balik mengambil sarang burung walet hitam dan kemudian ditukar dengan beras. Suku Balik juga tidak mengenal sayur-sayuran, seperti wortel, dan sebagainya. Semua sayuran merupakan tanaman liar di hutan. Untuk daging, merupakan hasil berburu kijang (dalam bahasa Balik disebut payau), rusa, atau kelinci.</p>
                        <br/>
                        <p>Pada tahun 1942, ketika itu terjadi pertempuran besar di wilayah adat suku Balik di Balikpapan. Saat itu, suku Balik hidup di pesisir Kota Balikpapan, daerah kekuasaan Kerajaan Kutai Kartanegara dibawah kepemimpinan Sultan Adji Muhammad Sulaiman. Ketika terjadi perang, warga yang ketakutan bersembunyi di pedalaman hutan. Mereka berada di batas terakhir wilayah adat yang kini menjadi kecamatan Sepaku. Pada masa penjajahan Jepang (1940-an) inilah awal mula pemukiman suku Balik di wilayah tersebut, walau ada yang mengklaim lebih awal seperti sejak zaman penjajahan Belanda.</p>
                        <br/>
                        <p>Sekitar tahun 1970-an, Pemerintah Indonesia membuat program transmigrasi dari Pulau Jawa ke wilayah yang jarang penduduknya di luar Jawa, salah satu wilayah tersebut adalah wilayah Sepaku-Semoi. Para transmigran ini kemudian diberi sebidang tanah yang luasnya satu hektar, lengkap dengan legalitas dari pemerintah. Seiring datangnya transmigran, Sepaku juga kedatangan perusahaan hutan tanaman industri dan perkebunan sawit. Tanah-tanah milik suku Balik mulai dijualbelikan. Saat itu, masyarakat suku Balik tidak mengerti tentang pentingnya legalitas tanah. Ladang-ladang yang mereka miliki bisa dijual dengan harga murah, sesuai kebutuhan. Hal inilah yang kemudian mereka lama-kelamaan kehilangan tanahnya.</p>
                    </div>
                )
            },
            {
                name: "Budaya",
                content: (
                    <CLIR images={[
                        {
                            src: "/orang-balik.png",
                            caption: "Orang-orang Suku Balik."
                        }
                    ]}>
                        <ol className="flex flex-col items-center gap-5">
                            <li>
                                <p className="font-bold text-lg">Ritual Belian</p>
                                <p>Ritual belian atau disebut juga belian bawo adalah salah satu ritual adat yang ada pada masyarakat suku Balik, ritual belian ini berbeda dengan ritual belian pada suku Paser. Perbedaan pada ritual belian suku Balik ini adalah adanya ritual potong lidah. Saat ini, ritual ini sudah hampir punah, karena dinilai bertentangan dengan ajaran Islam. Pada prosesi ini, dijelaskan bahwa lidah yang dipotong sebagai pertanda 'orang dari atas' (roh) sudah datang. Tetapi setelah ritual, lidah orang tersebut akan kembali normal.</p>
                            </li>
                            <li>
                                <p className="font-bold text-lg">Tari Ronggeng</p>
                                <p>Tari ronggeng atau ronggeng Balik adalah tarian tradisional yang dipentaskan oleh kaum perempuan suku Balik. Saat ini, sudah banyak ronggeng Balik yang dipentaskan dengan hanya menampilkan tarian dan musik. Tetapi sejatinya, ronggeng Balik tradisional juga ditampilkan oleh penari yang berdendang dengan bahasa daerah suku Balik.</p>
                                <br/>
                                <p>Pada zaman dahulu oleh masyarakat suku Balik, ronggeng digunakan salah satu ritual penyembuhan bagi orang yang terkena penyakit. Orang yang dituakan oleh masyarakat suku Balik kemudian akan memimpin doa dan memberi ramuan obat tradisional. Dengan tujuh penari perempuan ronggeng Balik yang diiringi oleh kendang dan musik gambus. Dahulu, masyarakat suku Balik percaya bahwa rangkaian prosesi itu bisa membantu penyembuhan dengan melibatkan roh leluhur.</p>
                                <br/>
                                <p>Dalam pementasan ronggeng Balik, sang penari juga kerap mengajak penonton untuk menari di atas panggung. Dengan cara selendang yang digunakan penari dikalungkan ke leher penonton kemudian si penonton digiring ke panggung. Tak hanya itu, sang penonton diajak berbalas pantun oleh sang penari.</p>
                            </li>
                        </ol>
                    </CLIR>
                )
            }
        ]
    },

    {
        name: "Suku Bali",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <MidText>
                        Suku Bali adalah suku bangsa mayoritas di pulau Bali, yang menggunakan bahasa Bali dan mengikuti budaya Bali. Menurut hasil Sensus Penduduk Indonesia 2010, ada kurang lebih 3,9 juta orang Bali di Indonesia. Sekitar 3,3 juta orang Bali tinggal di Provinsi Bali dan sisanya terdapat di Nusa Tenggara Barat, Sulawesi Tengah, Lampung, Bengkulu dan daerah penempatan transmigrasi asal Bali lainnya.
                    </MidText>
                )
            },
            {
                name: "Asal Usul",
                content: (
                    <div className="w-full p-10">
                        <p>Asal usul suku Bali terbagi ke dalam tiga periode atau gelombang migrasi:</p>
                        <br />
                        <ol className="list-decimal flex flex-col gap-5">
                            <li>
                                <p className="font-bold text-lg">Gelombang Pertama</p>
                                <p>Terjadi sebagai akibat persebaran penduduk yang terjadi di Nusantara selama zaman prasejarah.</p>
                            </li>
                            <li>
                                <p className="font-bold text-lg">Gelombang Kedua</p>
                                <p>Terjadi secara perlahan selama masa perkembangan agama Hindu di Nusantara.</p>
                            </li>
                            <li>
                                <p className="font-bold text-lg">Gelombang Ketiga</p>
                                <p>Gelombang terakhir yang berasal dari Jawa, ketika Majapahit runtuh pada abad ke-15 —berhubungan dengan Islamisasi yang terjadi di Jawa—sejumlah rakyat Majapahit memilih untuk melestarikan kebudayaannya di Bali, sehingga membentuk sinkretisme antara Kebudayaan Jawa klasik dengan tradisi asli Bali.</p>
                            </li>
                        </ol>
                    </div>
                )
            },
            {
                name: "Adat & Budaya",
                content: (
                    <TWFRI image={{
                        src: "/nyepi.png",
                        caption: "Perayaan Nyepi di Bali."
                    }}>
                        <p>Kebudayaan Bali terkenal akan seni tari , seni pertujukan , dan seni ukir . Miguel Covarrubias mengamati bahwa setiap orang Bali layak disebut sebagai seniman, karena ada berbagai aktivitas seni yang dapat mereka lakukan—terlepas dari kesibukannya sebagai petani, pedagang, kuli, sopir, dan sebagainya—mulai dari menari, bermain musik, melukis, memahat, menyanyi, hingga bermain lakon. Dalam suatu desa yang bobrok sekalipun dapat dijumpai sebuah pura yang indah, pemain gamelan andal, dan bahkan aktor berbakat. Bahkan sesajen yang dibuat wanita Bali memiliki sisi artistik pada jalinan potongan daun kelapa dan susunan buah-buahan yang rapi dan menjulang tinggi. Menurut Covarrubias, seniman Bali adalah perajin amatir, yang melakukan aktivitas seni sebagai wujud persembahan , dan tidak peduli apakah namanya akan dikenang atau tidak. Seniman Bali juga merupakan peniru yang baik, sehingga ada pura yang memperpanjang dengan ukiran menyerupai dewa khas Tionghoa , atau dekorasi relief kendaraan bermotor, yang mereka contoh dari majalah asing.</p>
                        <br/>
                        <p>Gamelan merupakan bentuk seni musik yang penting dalam berbagai acara tradisional masyarakat Bali. Setiap jenis musik disesuaikan dengan acaranya. Musik untuk piodalan (hari jadi) berbeda dengan musik pengiring acara metatah (mengasah gigi), demikian pula pernikahan, ngaben , melasti , dan sebagainya. Gamelan yang beragam ragamnya pun disesuaikan dengan berbagai jenis tari yang ada di Bali. Menurut Spies, seni tari membuat kehidupan masyarakat Bali utuh sekaligus menjadi elemen penting dalam serangkaian upacara adat maupun pribadi yang tidak ada habisnya.</p>
                        <br/>
                        <p>Sama halnya dengan Jawa , suku Bali juga mengenal pertunjukan wayang , namun dengan bentuk wayang yang lebih menyerupai manusia daripada wayang khas Jawa. Suku Bali juga memiliki aspek-aspek unik yang terkait dengan tradisi keagamaan mereka. Kehidupan religius mereka merupakan sinkretisme antara agama Hindu - Buddha dengan tradisi Bali.</p>
                    </TWFRI>
                )
            }
        ]
    },
    {
        name: "Suku Sasak",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <MidText>
                        Sasak adalah suatu kelompok etnis yang mendiami pulau Lombok dan menggunakan bahasa Sasak. Sebagian besar suku Sasak beragama Islam, uniknya pada sebagian kecil masyarakat suku Sasak, terdapat praktik agama Islam yang agak berbeda dengan Islam pada umumnya yakni Islam Wetu Telu, tetapi hanya berjumlah sekitar 1% yang melakukan praktik ibadah seperti itu. Ada pula sedikit warga suku Sasak yang menganut kepercayaan pra-Islam yang disebut dengan nama "Sasak Boda".
                    </MidText>
                )
            },
            {
                name: "Asal Usul Nama",
                content: (
                    <div className="w-full overflow-auto p-10">
                        <p>Kata Sasak berasal dari kata sak sak, artinya satu satu. Kata sak juga dipakai oleh sebagian suku Dayak di pulau Kalimantan untuk mengatakan satu. Orang Sasak terkenal pintar membuat kain dengan cara menenun, dahulu setiap perempuan akan dikatakan dewasa dan siap berumah tangga jika sudah pandai menenun. Menenun dalam bahasa orang Sasak adalah Sèsèk.</p>
                        <br/>
                        <p>Kata sèsèk berasal dari kata sesak,sesek atau saksak. Sèsèk dilakukan dengan cara memasukkan benang satu persatu(sak sak), kemudian benang disesakkan atau dirapatkan hingga sesak dan padat untuk menjadi bentuk kain dengan cara memukul mukulkan alat tenun. Uniknya suara yang terdengar ketika memukul mukul alat tenun itupun terdengar seperti suara sak sak dan hanya dilakukan dua kali saja.</p>
                        <br/>
                        <p>Itulah asal kata sasak yang kemudian diambil sebagai nama suku dipulau Lombok. Menurut Sumber Lisan, mengatakan bahwa dahulu bumi Lombok ditumbuhi hutan belantara, Tim Penyusun Kamus Pusat Pembinaan dan Pengembangan Bahasa: Sasak diartikan buluh bambu atau kayu yang dirakit menjadi satu. Sedangkan dalam Kitab Negarakertagama (Decawanana): Sasak dan Lombok dijelaskan bahwa Lombok Barat disebut Lombok Mirah dan Lombok Timur disebut Sasak Adi.</p>
                        <br/>
                        <p>Suku Sasak yang mula mula mendiami pulau Lombok menggunakan bahasa Sasak sebagai bahasa sehari hari. Bahasa Sasak sangat dekat dengan bahasa suku Samawa (Sumbawa) dan Bali.</p>
                    </div>
                )
            },
            {
                name: "Adat",
                content: (
                    <div className="w-full overflow-auto p-10">
                        <p>Suku sasak memiliki adat istiadat yang cukup unik. Pengaruh Bali dan Melayu sangat terasa dalam adat istiadat suku ini. Pengaruh Bali datang dari Kerajaan Karangasem yang pernah menguasai Pulau Lombok selama kurang lebih 2 abad, sedangkan pengaruh Melayu berasal dari pendakwah Islam di gumi sasak. Adat dan budaya yang berasal dari pengaruh Bali seperti Gendang Beleq, Gamelan Tokol, Perang Topat dan Cakepung atau Cepung. Sementara adat dan budaya yang berasal dari pengaruh Melayu seperti Gambus, Rudat, dan Cilokaq Sasak.</p>
                        <br/>
                        <p>Adat istiadat suku sasak juga dapat disaksikan pada saat saat acara pernikahan mulai dari melakiran gadis sampai nyongkolan. Gadis/dedare sasak apabila mereka mau dinikahkan oleh seorang lelaki/ terune maka yang perempuan harus dilarikan dulu kerumah keluarganya dari pihak laki laki yang dikenal dengan sebutan merariq atau pelarian.</p>
                        <br/>
                        <p>Caranya cukup sederhana, gadis/dedare pujaan tidak memberitahukan kepada kedua orangtuanya jika ingin menikah. Gadis/dedare tersebut itu harus dibawa oleh pihak laki-laki untuk disembunyikan sementara waktu di rumah pihak keluarga dari laki-laki/terune'. Namun jangan lupa aturan, mencuri gadis dan melarikannya (mencuri dalam artian si gadis sudah siap menikah dengan sipencuri) biasanya dilakukan dengan membawa beberapa orang kerabat atau teman dari pihak keluarga laki-laki. Selain sebagai saksi kerabat yang dibawa untuk mencuri gadis itu sekalian sebagai pengiring dalam prosesi itu. Dan gadis itu tidak boleh dibawa langsung ke rumah lelaki, harus dititipkan ke kerabat laki-laki. Tentu menikahi gadis dengan meminta izin kepada orang tuanya (redaq) lebih terhormat daripada mencuri gadis tanpa pemberitahuan terlebih dahulu, tetapi proses seperti ini sudah sangat jarang ditemukan karena kebiasaan orang sasak lebih dominan mencurinya supaya tidak terhambat oleh hal-hal yang tidak diinginkan seperti tidak disetujui orang tua gadis atau keterbatasan kemampuan dalam hal materi karena proses "redaq" biasanya menghabiskan biaya yang lebih besar daripada melarikan gadis (merarik) tanpa izin.</p>
                        <br/>
                        <p>Dalam proses pencurian gadis, setelah sehari menginap pihak kerabat laki-laki mengirim utusan ke pihak keluarga perempuan sebagai pemberitahuan bahwa anak gadisnya dicuri dan kini berada di satu tempat tetapi tempat menyembunyikan gadis itu dirahasiakan, tidak boleh diketahui keluarga perempuan. 'Nyelabar', istilah bahasa setempat untuk pemberitahuan itu, dan dilakukan oleh kerabat pihak lelaki tetapi orang tua pihak lelaki tidak diperbolehkan ikut.</p>
                        <br/>
                        <p>Rombongan 'nyelabar' terdiri lebih dari 5 orang dan wajib mengenakan pakaian adat (dodot). Rombongan tidak boleh langsung datang kekeluarga perempuan. Rombongan terlebih dahulu meminta izin pada Kliang atau tetua adat setempat, sekadar rasa penghormatan kepada kliang, datang pun ada aturan rombongan tidak diperkenankan masuk ke rumah pihak gadis. Mereka duduk bersila dihalaman depan, satu utusan dari rombongan itu yang nantinya sebagai juru bicara menyampaikan pemberitahuan.</p>
                    </div>
                )
            },
            {
                name: "Asal Usul Suku",
                content: (
                    <TTIB images={[
                        {
                            src: "/orang-sasak.png",
                            caption: "Orang-orang Suku Sasak."
                        }
                    ]}>
                        Dilansir dari pemberitaan Kompas.com, terdapat beberapa teori tentang asal usul dari Suku Sasak. Pendapat pertama menyebut bahwa nama Sasak berasal dari kata ‘sah’ yang berarti pergi dan ‘shaka’ yang berarti leluhur. Sehingga Sasak dapat diartikan sebagai pergi ke tanah leluhur. Adapun leluhur suku Suku Sasak dipercaya berasal dari Jawa, dengan melihat kemiripan aksara yang digunakan. Pendapat lain menyebut bahwa nama Sasak berasal dari kata ‘sak-sak’ yang berarti sampan. Hal ini dipercaya terkait dengan kedatangan nenek moyang Suku Sasak ke Pulau Lombok dengan penggunaan sampan.
                    </TTIB>
                )
            }
        ]
    },
    // Batas yang harus gw kerjain
    {
        name: "Suku Sumbawa",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <div className="w-full mx-5 mt-5">
                        <div className="ml-4 float-right flex flex-col items-center gap-1">
                            <img src="http://static.sabda.org/ejemmi/e_JEMMi_suku_sumbawa.jpg" className="w-60" />
                            <p className="text-xs text-gray-600 italic">Tradisi Barapan Kebo.</p>
                        </div>
                        <p>
                            Suku Sumbawa atau Samawa adalah suku bangsa yang mendiami wilayah bagian barat dan tengah pulau Sumbawa (meliputi Kabupaten Sumbawa dan Sumbawa Barat). Suku Sumbawa menyebut diri mereka sendiri sebagai Tau Samawa (terj. bahasa Indonesia: Orang Samawa; Orang Sumbawa) dan menggunakan bahasa Samawa. Sebagian besar suku Sumbawa beragama Islam. Pada masa lalu, Suku Sumbawa pernah membangun kerajaan yang kemudian menjadi Kesultanan Sumbawa sampai tahun 1959 yang kemudian dibubarkan oleh pemerintah pusat dan dibentuklah Pemerintah Daerah tingkat II Kabupaten Sumbawa tanggal 22 Januari 1959.
                        </p>
                        <br />
                        <p>
                            Masyarakat lokal Sumbawa biasanya menggunakan sebutan Tana Samawa untuk pulau Sumbawa dan Tau Samawa untuk orang Sumbawa. Banyak pendapat yang menyebutkan asal mula suku asli dari tau samawa atau suku sumbawa berasal dari Gowa, makassar yang dibuang oleh kerajaan Gowa. Hal ini dapat dilihat dari banyaknya kesamaan tradisi, budaya dan adat istiadat, senjata tradisional, pakaian adat dan lain-lain. Jadi dapat dikatakan suku sumbawa atau tau samawa yang mendiami pulau Sumbawa sebagai penduduk asli adalah pencampuran dari berbagai daerah khususnya di kepulauan sunda kecil.
                        </p>
                    </div>
                )
            },
            {
                name: "Budaya & Tradisi",
                content: null
            }
        ]
    },

    {
        name: "Suku Atoni",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <div className="w-full mx-5 mt-5">
                        <div className="ml-4 float-right flex flex-col items-center gap-1">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/COLLECTIE_TROPENMUSEUM_De_meo_voorvechter_en_priester_van_Oekabiti_in_oorlogskostuum_met_andere_atoni%27s_TMnr_10005969.jpg/330px-COLLECTIE_TROPENMUSEUM_De_meo_voorvechter_en_priester_van_Oekabiti_in_oorlogskostuum_met_andere_atoni%27s_TMnr_10005969.jpg" className="w-60" />
                            <p className="text-xs text-gray-600 italic">Pendeta dan prajurit Atoni.</p>
                        </div>
                        <p>
                            Suku Atoni (dikenal juga sebagai Atoni Meto, Atoni Pah Meto, atau Dawan) adalah suku bangsa yang mendiami pulau Timor, tepatnya di wilayah Timor Barat, Indonesia dan enklave Oecussi-Ambeno, Timor Leste. Jumlah populasi orang Atoni mencapai 600.000 jiwa. Bahasa yang dipertuturkan ialah bahasa Uab Meto. Suku Atoni umumnya tersebar di sebelah barat daratan Pulau Timor. Atoni Meto terdiri dari dua kata yakni "Atoni" berarti "orang" atau "manusia", dan "Meto" yang secara harfiah berarti "tanah kering". Pada umumnya, orang-orang juga biasa menyebutkan Atoni Pah Meto yang berarti "orang-orang dari tanah kering".
                        </p>
                    </div>
                )
            }
        ]
    },
    {
        name: "Suku Ende",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <MidText>
                        Suku Ende adalah kelompok etnis yang mendiami bagian tengah-selatan Pulau Flores, Indonesia. Populasinya berjumlah 150.000 jiwa pada tahun 1998. Masyarakat suku Ende berbicara dalam bahasa Ende dari rumpun Austronesia, serta terbagi menjadi dua dialek. Mereka termasuk dalam kelompok masyarakat berbahasa Bima–Sumba. Secara tradisional, masyarakat Ende juga berasumsi manual pertanian berdasarkan sistem tebang-bakar . Di beberapa tempat mereka menggunakan irigasi buatan.
                    </MidText>
                )
            },
            {
                name: "Geografis",
                content: (
                    <div className="w-full overflow-auto p-10">
                        <p>Suku Dunia ~ Ende adalah suku bangsa yang berdiam di bagian tengah pulau Flores, di Provinsi Nusa Tenggara Timur. Wilayah asal suku bangsa ini adalah yang sekarang menjadi wilayah tiga kecamatan, yaitu wilayah Kecamatan Nangapanda, Ende, dan Ndona, dalam Kabupaten Ende. Wilayah asal orang Ende ini bertetangga dengan wilayah kediaman suku bangsa Negekeo di sebelah barat, dan bagian dengan wilayah kediaman suku bangsa Lio di sebelah Timur.</p>
                        <br/>
                        <p>Lingkungan alam dari wilayah asal suku bangsa ini merupakan wilayah bergunung dan bukit berlekuk-lekuk tajam dan jarang ditemukan lahan basah. Dataran sempit terdapat di bagian selatan. Dari keseluruhan wilayah Kabupaten Ende sendiri hanya sekitar 5% yang berpotensi untuk dijadikan sawah, itu pun merupakan sawah tadah hujan. Namun belakangan ini telah direncanakan pembuatan bendungan-bendungan untuk pengairan sawah.</p>
                        <br/>
                        <p>Pada tahun 1986 Kecamatan Nangapanda berpenduduk 28.494 jiwa, Kecamatan Ende: 18.589 jiwa, dan Kecamatan Ndona: 22.035 jiwa, sedangkan keseluruhan penduduk Kabupaten Ende adalah 199.059 jiwa. Jumlah orang Ende di tiga kecamatan tadi atau di Kabupaten Ende umumnya tidak dapat lagi diketahui secara pasti.</p>
                        <br/>
                        <p>Masyarakat di daerah ini khususnya dan penduduk pulau Flores umumnya seringkali menghadapi masalah kekurangan bahan makanan. Hal ini dipengaruhi oleh keadaan alam, sarana pertanian yang belum memadai, dan pengetahuan dalam menghadapi keadaan lingkungan semacam itu belum memadai. Dengan keadaan alam semacam itu, mereka banyak menanam tanaman singkong (manihat utilissima) yang sekaligus sebagai makanan pokok mereka secara turun temurun.</p>
                        <br/>
                        <p>Makanan khas yang terbuat dari singkong itu bernama uwi ndota. Makanan khas ini dimakan dengan lauk ikan, misalnya ikan soa, iu, ikan terbang. Lauk ini dibuat dengan bumbu khusus berupa ramuan cabe, kunyit, serai, dan daun susu roa yang mengandung rasa asam. Sementara orang Ende yang makan nasi merasa belum puas kalau belum makan uwi ndota. Namun banyak sudah di antara mereka yang mengganti makanan tradisi ini dengan nasi, yang rupanya terkesan lebih bergengsi.</p>
                        <br/>
                        <p>Pada periode belakangan, orang Ende tampak mulai menggalakkan tanaman singkong, produksi singkong Kabupaten Ende tahun 1989 sebanyak 101.507 ton. Selain itu, ada produksi jagung 29.972 ton, padi ladang 13.972 ton, dan padi sawah 12.539 ton. Dalam periode 1990-an, masyarakat daerah ini menggalakkan tanaman seperti kopi, kelapa, kemiri, cengkeh, jambu mete, kakao, vanili, dan telah menunjukkan hasil yang menggembirakan.</p>
                        <br/>
                        <p>Kebiasaan orang Ende sejak lalu memanfaatkan kemiri hanya untuk bahan penerangan dalam rumah di malam hari. Buah kemiri ditumbuk bersama kapas. Kapas itu dililitkan pada lidi dan disulutkan api yang berfungsi sebagai pelita. Kebutuhan satu malam sudah cukup dengan dua atau tiga biji buah kemiri. Pada masa itu buah kemiri yang cukup melimpah di daerah mereka itu tidak mempunyai arti ekonomis. Namun belakangan ini, buah kemiri telah mempunyai nilai ekonomi yang cukup membantu kehidupan mereka. Dalam tahun 1990 harga kemiri mencapai Rp 1.700 per kg di Ende. Kabupaten Ende menghasilkan sekitar 1.000 ton kemiri per tahun.</p>
                    </div>
                )
            },
            {
                name: "Adat & Budaya",
                content: (
                    <TWFRI image={{
                        src: "/orang-ende.jpg",
                        caption: "Orang-orang Suku Ende."
                    }}>
                        <p>Dalam hal organisasi sosial tradisional, orang Ende mengenal sistem klen (pu'u) yang patrilineal, artinya anggota satu klen itu merasa berasal dari satu nenek moyang dengan menarik garis keturunan dari pihak laki-laki. Mereka juga mengamalkan adat eksogami klen, yang mengharuskan seseorang mencari pasangan keluar klennya sendiri. Sebuah klen dipimpin oleh seorang kepala klen yang disebut Roki Pu'u. Seorang kepala klen juga berstatus sebagai Kolu, yakni orang yang mempunyai hak menguasai tanah yang belum digarap dalam wilayah klennya. Hak ini diperolehnya meskipun ia merupakan kepala kelompok yang bersifat genealogis. Namun sekarang sistem klen pada masyarakat Ende sudah mulai rapuh.</p>
                        <br/>
                        <p>Pada masa lalu masyarakat Ende mengenal tiga lapisan sosial. Lapisan atas adalah kaum bangsawan, yang di daerah pesisir di sebut Ata Nggaeh dan di daerah pedalaman disebut Mosa Rabi. Dua lapisan sosial lainnya adalah lapisan masyarakat biasa dan lapisan budak.</p>
                        <br/>
                        <p>Sebagian besar (70%) orang Ende sekarang memeluk agama Katolik, selebihnya Islam, Protestan, meskipun kepercayaan lama masih juga tersisa. Mereka juga masih memiliki kesenian-kesenian tradisional seperti tari, seperti tari gawi, mursi, waewali. Bahasa yang dipakai adalah bahasa Ende.</p>
                    </TWFRI>
                )
            }
        ]
    },
    {
        name: "Suku Manggarai",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <TWFRI image={{
                        src: "/caci.jpg",
                        caption: "Tari Caci."
                    }}>
                        <p>Suku Manggarai adalah kelompok etnis yang berasal dari bagian barat pulau Flores di provinsi Nusa Tenggara Timur, Indonesia. Suku Manggarai utamanya tersebar di tiga kabupaten di provinsi NTT, yaitu Kabupaten Manggarai Barat, Kabupaten Manggarai, dan Kabupaten Manggarai Timur.</p>
                        <br/>
                        <p>Menurut catatan sejarah, mereka secara historis dikuasai secara bergantian dengan oleh suku Bima dengan Kesultanan Bima dari pulau Sumbawa dan suku Makassar dengan Kesultanan Gowa dari pulau Sulawesi. </p>
                        <br/>
                        <p>Dibawahnya terdapat beberapa kerajaan lokal. Kerajaan Reo yang didirikan putri Sultan Gowa, bernama Daeng Tamima, yang mempersunting pangeran Bima. Penguasa Reo menjadi perwakilan Sultan Bima, bersama penguasa Pota sehingga keduanya bergelar naib. </p>
                        <br/>
                        <p>Kerajaan-kerajaan kecil lainnya disebut Kedaluan dipimpin oleh seorang yang bergelar dalu. Tiga kedaluan dengan pengaruh yang kuat disebut dalu mese (kedaluan besar), mereka adalah Kedaluan Todo yang pendirinya merupakan seorang Minangkabau bernama Mashur, Kedaluan Cibal, dan Kedaluan Bajo. Para naib (Reo dan Pota) dan Kedaluan Todo kemudian membawahi beberapa dalu koe (kedaluan kecil).</p>
                        <br/>
                        <p>Terdapat sekitar 500.000 orang Manggarai pada akhir abad ke-20. Menurut catatan Joshua Project, jumlah populasi suku ini sekitar 725.000 jiwa.</p>
                    </TWFRI>
                )
            }
        ]
    },

    {
        name: "Suku Gorontalo",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <div className="w-full overflow-auto p-10">
                        <p>Suku Gorontalo yang dalam bahasa lokal adalah Suku Hulontalo atau Tawu Hulontalo adalah suku bangsa terbesar di wilayah Utara Pulau Sulawesi hingga ke Kawasan Teluk Tomini dan sekitarnya.</p>
                        <br/>
                        <p>Berdasarkan sensus penduduk tahun 2010, populasi suku Gorontalo mencapai lebih dari 1.251.494 jiwa atau sebesar 0,53% dari total seluruh penduduk Indonesia.</p>
                        <br/>
                        <p>Dari data statistik tersebut, Suku Gorontalo menduduki posisi pertama sebagai suku dengan populasi terbanyak di wilayah semenanjung utara pulau Sulawesi, disusul dengan Suku Minahasa yang berada di peringkat kedua.</p>
                        <br/>
                        <p>Suku Hulontalo dalam akar sejarahnya berasal dari pegunungan Tilongkabila yang saat ini menjadi wilayah dari Provinsi Gorontalo, Sulawesi. Bahasa utama yang digunakan adalah bahasa Gorontalo dengan beberapa dialek lokal. Suku Gorontalo juga terkenal dengan ragam masakan khas Gorontalo yang populer di lidah kebanyakan masyarakat Indonesia.</p>
                        <br/>
                        <p>Suku Gorontalo tersebar di beberapa wilayah di Nusantara, dengan jumlah yang signifikan di provinsi Sulawesi Utara, Sulawesi Tengah, Maluku Utara, Jawa Barat, DKI Jakarta, Sulawesi Selatan, Kalimantan Timur, dan Papua.</p>
                    </div>
                )
            },
            {
                name: "Asal Usul",
                content: (
                    <MidText>
                        Asal usul suku Gorontalo, tidak diketahui secara pasti. Apabila dilihat dari struktur fisik orang Gorontalo, suku Gorontalo termasuk ke dalam ras mongoloid, hanya saja mungkin sejak beberapa abad yang lalu telah terjadi percampuran ras dengan bangsa-bangsa lain. Sehingga suku Gorontalo saat ini memiliki postur fisik yang beragam. Warna kulit mulai dari kuning hingga ke coklat gelap. Rambut juga bervariasi, dari rambut lurus, ikal dan keriting. Terdapat dua teori mengenai migrasi penduduk di Asia Tenggara, teori pertama menyebutkan bahwa penduduk Asia Tenggara awalnya berasal dari timur, lalu mendiami Sulawesi. Sementara teori kedua menjelaskan migrasi manusia yang berasal dari Taiwan, menuju Filipina, dan sampai di Sulawesi.
                        <br/><br/>
                        Suku Gorontalo memiliki legenda yang menceritakan bahwa leluhur mereka adalah keturunan dari Hulontalangi, atau orang yang turun dari langit dan awalnya berdiam di Gunung Tilongkabila, Kab. Bone Bolango. Nama Hulontalangi lalu berubah menjadi Hulontalo dan Gorontalo.
                    </MidText>
                )
            },
            {
                name: "Adat & Tradisi",
                content: (
                    <CLIR images={[
                        {
                            src: "/adat-gorontalo.jpg",
                            caption: "Adat & Tradisi Suku Gorontalo."
                        }
                    ]}>
                        <p>Beberapa tradisi adat pada masyarakat suku Gorontalo adalah:</p>
                        <br/>
                        <ol className="list-decimal flex flex-col gap-5">
                            <li>
                                <p className="font-bold text-lg">Adat Pernikahan Momonto dan Modutu</p>
                                <p>Dalam adat pernikahan tradisional Gorontalo, ada beberapa aturan dan tata cara yang harus dilakukan oleh kedua mempelai. Orang Gorontalo masih memegang tradisi turun-temurun sebagai bagian dari adat dan kebudayaan. Acara pernikahan diadakan di rumah kedua mempelai secara bergantian. Acara pernikahan bisa berlangsung lebih dari 2 hari. Kerabat bergotong-royong dalam mempersiapkan acara pernikahan ini beberapa hari sebelum hari pernikahan. Kedua mempelai menggunakan busana adat bernama Bili’u. Tempat pelaminan yang digunakan pada saat resepsi menggunakan adat Gorontalo.</p>
                            </li>
                            <li>
                                <p className="font-bold text-lg">Molontalo / Tontalo</p>
                                <p>Suatu acara adat untuk mewujudkan rasa syukur atas kehamilan yang sudah berusia tujuh bulan. Dalam menggelar acara adat ini, kedua orang tua dari calon bayi harus memakai pakaian adat Gorontalo. Seorang anak perempuan digendong oleh sang ayah mengelilingi rumah, lalu akhirnya masuk ke dalam kamar menemui ibu yang sedang mengandung. Setelah calon ayah dan anak perempuan yang digendongnya bertemu dengan ibu yang mengandung sang bayi, maka tali yang terbuat dari daun kelapa yang sebelumnya sudah melingkari perut ibu tersebut dipotong atau diputuskan. Dalam acara Tontalo ini, disediakan 7 jenis makanan yang dihidangkan pada 7 nampan yang berbeda, lalu makanan ini dibagikan kepada seluruh undangan.</p>
                            </li>
                            <li>
                                <p className="font-bold text-lg">Molalunga</p>
                                <p>Upacara pemakaman adat Gorontalo. Bagi masyarakat Gorontalo, saat proses pemakaman wajib menggunakan pakaian serba putih karena mengikuti sunnah Nabi Muhammad SAW.</p>
                            </li>
                        </ol>
                    </CLIR>
                )
            }
        ]
    },
    {
        name: "Suku Minahasa",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <TWFRI image={{
                        src: "/orang-minahasa.jpg",
                        caption: "Orang-orang Suku Minahasa."
                    }}>
                        <p>Suku Minahasa adalah kelompok suku etnis yang berasal dari Semenanjung Minahasa di bagian utara pulau Sulawesi di Indonesia. Wilayah-wilayah administratif tempat bermukim mayoritas orang-orang Minahasa (atau Minahasa Raya) adalah Kabupaten Minahasa, Kabupaten Minahasa Selatan, Kabupaten Minahasa Tenggara, Kabupaten Minahasa Utara, Kota Bitung, Kota Manado, dan Kota Tomohon. Seluruh kawasan administratif ini terletak di Provinsi Sulawesi Utara dan suku Minahasa merupakan suku bangsa terbesar di provinsi ini. Hal ini juga yang menyebabkan dalam percakapan awam, orang Minahasa sering kali disamakan dengan sebutan orang Manado yang adalah ibukota Sulawesi Utara. Suku Minahasa merupakan gabungan dari kelompok-kelompok sub-etnis yaitu Bantik, Pasan/Ratahan, Ponosakan, Tombulu, Tondano (Toulour), Tonsawang (Tombatu), Tonsea, dan Tontemboan.</p>
                        <br/>
                        <p>Daerah Minahasa termasuk salah satu tempat migrasi pertama orang-orang Austronesia ke arah selatan pada akhir milenium ketiga dan kedua SM. Hipotesis yang diterima secara umum adalah bahwa orang-orang Austronesia awalnya menghuni Taiwan, sebelum bermigrasi dan menempati daerah-daerah di Filipina utara, Filipina selatan, Kalimantan, dan Sulawesi sebelum berpisah menjadi kelompok-kelompok dengan satu menuju barat ke Jawa, Sumatra, dan Malaysia, sementara yang lain bergerak ke timur menuju Oseania.</p>
                    </TWFRI>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <div className="w-full overflow-auto p-10">
                        <p>Deskripsi pertama tentang Minahasa oleh bangsa Eropa berasal dari dokumen Portugis pada tahun 1552. Sebelumnya pada tahun 1523, pelaut Portugis Simao d'Abreu adalah orang Eropa pertama yang melihat semenanjung Minahasa pada saat ia melewati dan mencatat kekagumannya pada Pulau Manado Tua. Kemudian Spanyol dan Belanda datang ke Minahasa pada awal abad ke-17. Pada akhir abad ke-17, kepala-kepala walak (atau daerah tempat tinggal bersama) dari berbagai daerah Minahasa datang bersama dan memutuskan untuk mengadakan perjanjian dengan Vereenigde Oostindische Compagnie (VOC atau Perusahaan Hindia Timur Belanda) dalam usaha memerangi serangan dari daerah Kerajaan Bolaang Mongondow. Perjanjian ini terjadi pada tanggal 10 Januari 1679 dan dilakukan antara gubernur VOC yang berkedudukan di Maluku yaitu Robertus Padtbrugge dengan 23 kepala walak. Nama-nama walak yang termasuk dalam perjanjian tersebut adalah Aris, Bantik, Kakas, Kakaskasen, Klabat, Klabat Atas, Langowan, Pasan (yang juga mewakili Pinosokan dan Ratahan), Remboken, Rumoong, Sarongsong, Tombariri, Tombasian, Tomohon, Tompaso, Tondano, Tonkimbut Atas, Tonkimbut Bawah, Tonsawang, dan Tonsea. Namun hubungan dengan Belanda tidak selalu baik, seperti pada tahun 1808 dengan terjadinya Perang Tondano antara Minahasa dengan Hindia Belanda. Salah satu alasan terjadinya perang ialah Minahasa tidak mau menyediakan tentara untuk Hindia Belanda yang akan dikirim ke Pulau Jawa.</p>
                        <br/>
                        <p>Setelah Proklamasi Kemerdekaan Indonesia di Jawa, Minahasa termasuk daerah yang cukup awal ikut bergabung dalam republik yang baru dibentuk. Hal ini dapat dilihat dengan terjadinya Peristiwa Merah Putih pada tanggal 14 Februari 1946 di mana prajurit-prajurit Minahasa dalam Koninklijke Nederlands(ch)-Indische Leger (KNIL atau Tentara Kerajaan Hindia Belanda) melucuti senjata dari pimpinan militer Belanda kemudian mengibarkan Sang Saka Merah Putih di tangsi militer Belanda di Teling, Manado. Di samping itu, orang-orang Minahasa di Jawa bergabung dalam wadah Kebaktian Rakyat Indonesia Sulawesi (KRIS) dan ikutserta dalam Revolusi Nasional Indonesia.</p>
                        <br/>
                        <p>Sebuah gerakan yang melibatkan orang-orang Minahasa terjadi pada tahun 1958 yang bernama Perjuangan Rakyat Semester (Permesta) yang menentang kebijakan pemerintah Indonesia di Jawa. Salah satu alasan utama dari gerakan ini adalah karena ajang politik dan upaya pembangunan Indonesia terpusat di pulau Jawa, sedangkan sumber-sumber perekonomian negara lebih banyak berasal dari pulau-pulau lain.</p>
                    </div>
                )
            }
        ]
    },

    {
        name: "Suku Polahi",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <TWFRI image={{
                            src: "/pernikahan-polahi.jpg",
                            caption: "Tradisi Pernikahan Suku Polahi."
                    }}>
                        <p>Suku Polahi adalah kelompok etnis terasing yang mendiami hutan pedalaman Gorontalo. Menurut cerita yang beredar di masyarakat, Polahi adalah masyarakat pelarian zaman dahulu yang melakukan eksodus ke hutan karena takut dan tidak mau dijajah oleh Belanda sehingga menjadikan mereka sebagai suku terasing sampai dengan saat ini. </p>
                        <br/>
                        <p>Suku ini mengasingkan diri sekitar abad ke-17 dan kini hidup di pedalaman hutan daerah Boliyohuto, Paguyaman, dan Suwawa, Provinsi Gorontalo.</p>
                        <br/>
                        <p>Sejarah Konon menurut cerita masyarakat setempat, orang Polahi adalah pelarian pada zaman penjajahan Belanda. Dalam bahasa Gorontalo, Polahi berasal dari kata lahi-lahi yang artinya "pelarian" atau "sedang dalam pelarian". Polahi adalah pelarian pada masa penjajahan Belanda yang takut atau tidak mau membayar pajak, yang kemudian tinggal di pedalaman hutan, salah satunya di lereng Gunung Boliyohuto di desa Tamaila Utara, kecamatan Tolangohula, Kabupaten Gorontalo.</p>
                        <br/>
                        <p>Hal ini menjadikan orang Polahi hidup beradaptasi dengan kehidupan rimba. Setelah Indonesia merdeka, sebagian keturunan Polahi masih tetap bertahan tinggal di hutan. Sikap anti penjajah tersebut masih terbawa terus secara turun-temurun, sehingga orang lain dari luar suku Polahi dianggap sebagai penindas dan penjajah.</p>
                        <br/>
                        <p>Suku Polahi sering berpindah-pindah tempat, lalu membangun gubuk-gubuk baru. Dengan pola hidup demikian, masyarakat Polahi hanya saling berkomunikasi dengan kelompoknya. Hal tersebut kemudian yang melahirkan tradisi pernikahan sedarah atau antar saudara.</p>
                    </TWFRI>
                )
            }
        ]
    },

    {
        name: "Suku Bare'e",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <TWFRI image={{
                        src: "/orang-baree.jpg",
                        caption: "Orang-orang Suku Bare'e."
                    }}>
                        <p>Suku Bare'e (To Bare'e, Tau Bare'e, atau Orang Bare'e) ialah nama suatu suku yang berasal dari Sulawesi, Indonesia, asal usul Suku Bare'e yaitu berasal dari sejarah berdirinya Kerajaan Tojo tahun 1770 dengan raja pertama Kerajaan Tojo yaitu Pilewiti.</p>
                        <br/>
                        <p>Suku Bare'e atau bahasa Belandanya Bare'e-Stammen adalah orang yang berasal dan tinggal di Wilayah Kerajaan Tojo, yang wilayah Kerajaan Tojo tersebut yaitu To Lage, To Tora'u, To Lalaeyo, dan To Rato Bongka.</p>
                        <br/>
                        <p>Jadi ada Suku Bare'e ToLage, Suku Bare'e ToLalaeyo, Suku Bare'e ToTora'u, dan Suku Bare'e Taa atau Suku Taa (To Rato Bongka). Batas Barat dari Wilayah Suku Bare'e yaitu Tolage yang berada di Sausu.</p>
                        <br/>
                        <p>Suku Bare'e To Lage (ToLage) batas utara wilayahnya dari Kecamatan Sausu , Tana Poso , sampai Desa Marompa kecamatan Tojo Barat, batas selatannya adalah wilayah Lore kecuali Napu sampai Kecamatan Pamona selatan yang sekarang termasuk Lamusa, Puumboto , puumbana, dan pakambia , Dan Batas Timur dari Suku Bare'e adalah sampai di Wilayah Pati-Pati.</p>
                        <br/>
                        <p>Adanya penilaian terhadap pembawaan seorang Suku Bare'e, yaitu : "Seperi air sungai yang mengalir hingga ke laut", itu artinya adalah kebiasaan dari penduduk suku bare'e yang membuat rumah tempat tinggal mereka dimulai dari sungai-sungai sampai ke pinggir pantai di tepi laut ( Teluk Tomini ), rumah-rumah tersebut bisa dimulai dari ujung sungai yang terjauh dari mulut pantai sampai yang terdekat dari laut Teluk Tomini , bahkan hingga ke pinggir pantai. Hal tersebut dilakukan oleh penduduk suku bare'e untuk menghindari serangan musuh yang sering melalui Teluk Tomini , sehingga rumah penduduk suku bare'e dibikin agak jauh dari laut.</p>
                    </TWFRI>
                )
            }
        ]
    },
    {
        name: "Suku Kaili",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <div className="w-full overflow-auto p-10">
                        <p>Suku Kaili adalah suku bangsa di Indonesia yang mendiami sebagian besar dari Provinsi Sulawesi Tengah dan sebagian kecil dari provinsi Sulawesi barat, khususnya wilayah Kabupaten Donggala, Kabupaten Sigi, dan Kota Palu, di seluruh daerah di lembah antara Gunung Gawalise, Gunung Nokilalaki, Kulawi, dan Gunung Raranggonau. Mereka juga menghuni wilayah pantai timur Sulawesi Tengah, meliputi Kabupaten Parigi-Moutong, Kabupaten Tojo Una-Una dan Kabupaten Poso. Masyarakat suku Kaili mendiami kampung/desa di Teluk Tomini yaitu Tinombo, Moutong,Parigi, Sausu, Ampana, Tojo dan Una Una, sedang di Kabupaten Poso mereka mendiami daerah Mapane, Uekuli dan pesisir Pantai Poso, Lalundu, kasoloang, Pasangkayu, tikke, saruddu, karossa.</p>
                        <br/>
                        <p>Suku Kalili atau etnik Kaili, merupakan salah satu etnik dengan yang memiliki rumpun etnik sendiri. Untuk penyebutannya, suku Kaili disebut etnik Kaili, sementara rumpun suku Kaili lebih dari 30 rumpun suku, seperti, rumpun Kaili Rai, rumpun Kaili Ledo, rumpun Kaili Ija, rumpun Kaili Moma, rumpun Kaili Da'a, rumpun Kaili Unde, rumpun Kaili Inde, rumpun Kaili Tara, rumpun Kaili Bare'e, rumpun Kaili Doi, rumpun Kaili Torai, dll.</p>
                        <br/>
                        <p>Untuk menyatakan "orang Kaili" disebut dalam bahasa Kaili dengan menggunakan awalan "To" yaitu To Kaili, Dan juga uniknya semua rumpun-rumpun Kaili menyatakan kata tidak.</p>
                        <br/>
                        <p>Ada beberapa pendapat yang mengemukakan etimologi dari kata Kaili, salah satunya menyebutkan bahwa kata yang menjadi nama suku Kaili ini berasal dari nama pohon dan buah Kaili yang umumnya tumbuh di hutan-hutan di kawasan daerah ini, terutama di tepi Sungai Palu dan Teluk Palu. Pada zaman dulu, tepi pantai Teluk Palu letaknya menjorok l.k. 34 km dari letak pantai sekarang, yaitu di Kampung Bangga. Sebagai buktinya, di daerah Bobo sampai ke Bangga banyak ditemukan karang dan rerumputan pantai/laut. Bahkan di sana ada sebuah sumur yang airnya pasang pada saat air di laut sedang pasang demikian juga akan surut pada saat air laut surut.</p>
                    </div>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <MidText>
                        Menurut cerita (tutura), dahulu kala, di tepi pantai dekat Kampung Bangga tumbuh sebatang pohon kaili yang tumbuh menjulang tinggi. Pohon ini menjadi arah atau panduan bagi pelaut atau nelayan yang memasuki Teluk Palu untuk menuju pelabuhan pada saat itu, Bangga. Namun ada juga mengatakan bahwa kata Kaili ini sebenarnya adalah nama dari orang tua pertama dari suku mereka ini dan kemudian Kaili mempunyai keturunan yang banyak dan memberikan nama anaknya masing masing menjadi penyebutan kata tidak. Misalnya to Ledo, Rai, Edo, Ado, unde, inde, torai, ta'a, da'a, tado, ija, Moma, bare'e, dan lain-lain. Semua rumpun Kaili menyatakan adalah tidak. Sehingga bisa disimpulkan bahwa Kaili ini berasal dari suatu orang tua bernama Kaili dan akhirnya memberikan nama anak-anak menjadi kata tidak.
                    </MidText>
                )
            },
            {
                name: "Adat",
                content: (
                    <TWFRI image={{
                        src: "/pakaian-kaili.jpg",
                        caption: "Pakaian Adat Suku Kaili."
                    }}>
                        <p>Sebagaimana suku-suku lainnya di wilayah persada Nusantara, Suku Kaili juga mempunyai adat istiadat sebagai bagian kekayaan budaya di dalam kehidupan sosial, memiliki Hukum Adat sebagai aturan dan norma yang harus dipatuhi, serta mempunyai aturan sanksi dalam hukum adat.</p>
                        <br/>
                        <p>Penyelenggaraan upacara adat biasanya dilaksanakan pada saat pesta perkawinan (no-Rano, no-Raego, kesenian berpantun muda/i), pada upacara kematian (no-Vaino, menuturkan kebaikan orang yang meninggal), pada upacara panen (no-Vunja, penyerahan sesaji kepada Dewa Kesuburan), dan upacara penyembuhan penyakit (no-Balia, memasukkan ruh untuk mengobati orang yang sakit); pada masa sebelum masuknya agama Islam dan Kristen, upacara-upacara adat seperti ini masih dilakukan dengan mantra-mantra yang mengandung animisme.</p>
                        <br/>
                        <p>Setelah masuknya agama Islam dan Kristen, pesta perkawinan dan kematian sudah disesuaikan antara upacara adat setempat dengan upacara menurut agama penganutnya. Demikian juga upacara yang mengikuti ajaran Islam seperti: Khitan (Posuna), Khatam (Popatama) dan gunting rambut bayi usia 40 hari (Niore ritoya), penyelenggaraannya berdasarkan ajaran agama Islam.</p>
                        <br/>
                        <p>Beberapa instrumen musik yang dikenal dalam kesenian suku Kaili antara lain: Kakula (disebut juga gulintang, sejenis gamelan pentatonis),Lalove (serunai), nggeso-nggeso (rebab berdawai dua), gimba (gendang), gamba-gamba (gamelan datar/kecil), goo (gong), suli (suling).</p>
                        <br/>
                        <p>Salah satu kerajinan masyarakat suku Kaili adalah menenun sarung. Ini merupakan kegiatan para wanita di daerah Wani, Tavaili, Palu, Tipo dan Donggala. Sarung tenun ini dalam bahasa Kaili disebut Buya Sabe, tetapi oleh masyarakat umum sekarang dikenal dengan Sarung Donggala. Jenis Buya Sabe ini pun mempunyai nama-nama tersendiri berdasarkan motif tenunannya, seperti Bomba, Subi atau Kumbaja. Demikian juga sebutan warna sarung Donggala didasarkan pada warna alam,seperti warna Sesempalola / kembang terong (ungu), Lei-Kangaro/merah betet (merah-jingga), Lei-pompanga (merah ludah sirih).</p>
                        <br/>
                        <p>Di daerah Kulawi masih ditemukan adanya pembuatan bahan pakaian yang diproses dari kulit kayu yang disebut Katevu. Pakaian dari kulit Kayu Katevu ini sebagian besar dipakai oleh para wanita dalam bentuk rok dan baju adat.</p>
                        <br/>
                        <p>Sebelum masuknya agama ke Tanah Kaili, masyarakat suku Kaili masih menganut animisme, pemujaan kepada roh nenek moyang dan dewa sang Pencipta (Tomanuru), dewa Kesuburan (Buke/Buriro) dan dewa Penyembuhan (Tampilangi). Agama Islam masuk ke Tanah Kaili, setelah datangnya seorang Ulama Islam, keturunan Datuk/Raja yang berasal dari Minangkabau bernama Syekh Abdullah Raqie. Ia beserta pengikutnya datang ke Tanah Kaili setelah bertahun-tahun bermukim belajar agama di Mekkah. Di Tanah Kaili, Syekh Abdullah Raqie dikenal dengan nama Dato Karama/Datuk Karama (Datuk Keramat), karena masyarakat sering melihat kemampuan dia yang berada di luar kemampuan manusia pada umumnya. Makam Dato Karama sekarang merupakan salah satu cagar budaya yang di bawah pengawasan Pemerinta Daerah.</p>
                        <br/>
                        <p>Hubungan kekerabatan masyarakat suku Kaili sangat tampak kerjasamanya pada kegiatan-kegiatan pesta adat, kematian, perkawinan dan kegiatan bertani yang disebut SINTUVU (kebersamaan/gotong royong).</p>
                    </TWFRI>
                )
            }
        ]
    },
    {
        name: "Suku Pamona",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <TWFRI image={{
                        src: "/dero.jpg",
                        caption: "Tari Dero."
                    }}>
                        <p>Pamona (sering kali disebut sebagai suku Poso, Bare'e, atau To Pamona) mendiami hampir seluruh wilayah Kabupaten Poso, sebagian Kabupaten Tojo Una-Una, dan sebagian Kabupaten Morowali Utara, Sulawesi Tengah; bahkan ada juga beberapa yang tinggal di Kabupaten Luwu Timur di Sulawesi Selatan, dan sebagian kecil yang tersisa hidup di bagian lain di Indonesia.</p>
                        <br/>
                        <p>Pendahulu suku Pamona berasal dari tanah Salu Moge (Kabupaten Luwu Timur, Sulawesi Selatan) karena mereka berasal dari pemerintahan pusat yang pada akhirnya ditundukkan oleh Macoa Bawalipu dari Wotu, Kabupaten Luwu Timur agar lebih dekat dengan pemerintah pusat, yang saat itu berada di Mangkutana, Luwu Timur.[2] Keadaan ini bertahan hingga pemberontakan Darul Islam (DI/TII) yang membuat mereka menyebar ke Sulawesi Tengah dan wilayah lainnya.[3] Jika terdapat suku Pamona di wilayah tertentu, maka merupakan hal yang umum jika Rukun Poso (asosiasi komunitas orang Poso) dibentuk disana, yang berfungsi sebagai sarana sekelompok orang dari latar belakang etnis yang umum untuk terlibat dalam berbagai kegiatan di kawasan ini.</p>
                        <br/>
                        <p>Hampir seluruh orang Pamona memeluk agama Kristen. Kristen masuk ke wilayah Poso tahun 1892 (2024 adalah tahun ke-132) dan hingga saat ini diterima secara umum sebagai agama rakyat. Hingga hari ini, semua gereja dengan denominasi yang umum dikelompokkan ke dalam Gereja Kristen Sulawesi Tengah yang bermarkas di kota Tentena, Kabupaten Poso, Sulawesi Tengah.[4] Hampir semua orang menggunakan bahasa Pamona dan bahasa Indonesia yang dicampurkan dengan kalimat slang lokal. Pekerjaan orang suku Pamona biasanya sebagai petani, pendeta, pastor, wirausahawan, pejabat pemerintahan, dan sebagainya.</p>
                    </TWFRI>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <MidText>
                        Wilayah dataran tinggi di sekeliling Danau Poso merupakan rumah bagi tujuh subsuku dengan hubungan kekerabatan dekat, yang menurut legenda adalah keturunan dari enam saudara laki-laki dan satu saudara perempuan. Legenda tersebut menjelaskan bahwa setelah mereka menggulingkan penindas mereka, ketujuh saudara tersebut memutuskan untuk berpisah dan membentuk komunitasnya sendiri. Untuk mengenang kejadian ini, mereka membuat tujuh "batu pemisahan" (bahasa Pamona: Watu Mpoga'a) yang masih dapat ditemukan saat ini di Tentena.
                        <br/><br/>Itu atau Posintuwu akan terus ada karena setiap orang yang sudah di beri Posintuwu akan membalasnya di kemudian hari jika pemberi suatu hari mengadakan pernikahan.
                        <br/><br/>Ada lagi upacara pemindahan mayat yang disebut dengan Ndatabe. Jenazah tersebut disimpan pada tambea (tempat penyimpanan jenazah) sampai menjadi tulang belulang yang bersih dan letaknya agak jauh terpisah dari penduduk. Bila jenazah tersebut tinggal tulang belulang, diadakan upacara Mompemate (memindahkan tulang belutang tersebut ke gua-gua).
                    </MidText>
                )
            }
        ]
    },

    {
        name: "Suku Buton",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <MidText>
                        Suku Buton adalah suku bangsa yang menempati wilayah Sulawesi Tenggara tepatnya di Kepulauan Buton. Suku Buton juga dapat ditemui dengan jumlah yang signifikan di luar Sulawesi Tenggara seperti di Maluku Utara, Kalimantan Timur, Kepulauan Riau, Maluku, dan Papua dikarenakan migrasi orang Buton di akhir tahun 1920-an.
                        <br/><br/>
                        Seperti suku-suku di Sulawesi kebanyakan, suku Buton juga merupakan suku pelaut. Orang-orang Buton sejak lama merantau ke seluruh pelosok Nusantara dengan menggunakan perahu berukuran kecil yang hanya dapat menampung lima orang, hingga perahu besar yang dapat memuat barang sekitar 150 ton.
                    </MidText>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <div className="w-full overflow-auto p-10">
                        <p>Jika melihat dari Sejarah Suku Buton dan asal usulnya dapat diketahui dengan mengungkapkan lebih dahulu sejarah kedatangan Sipanjonga dan kawan-kawannya, yang dikenal dalam sejarah wolio dengan nama Kesatuannya “Mia Pata Mianan” yang artinya “empat orang” lebih jelasnya dimaksudkan dengan empat pemuka yaitu Sipanjonga, Simalui, Sijawangkati dan Siuamanajo. Dan dengan berpegang pada buku silsilah dari Raja-raja di Wolio, keempat orang tersebut konon menurut riwayat berasal dari tanah Semenanjung Johor (Malaysia) pulau Liya Melayu, di mana tibanya di Buton dapat diperkirakan berkisar akhir abad ke 13 atau setidaknya pada awal abad ke 14. Perkiraan tibanya Sipanjonga dan kawan-kawannya.</p>
                        <br/>
                        <p>Dalam tahun 1275 bertolaklah satu tentara Kertanagara dari pelabuhan Tuban. Tentara itu mendarat di daerah muara sungai Jambi dan: rebut daerah itu, yang lalu dijadikan daerah takluk bagi kerajaan Singosari. Dalam waktu 10 tahun saja, jajahan kerajaan Jawa itu telah dapat diluaskan sampai kedaerah hulu sungai jambi. Didirikanlah kembali kerjaan Melayu lama didaerah itu, tetapi sebagai negara bagian pada kerajaan Singosari. Raja Melayu dijadikan Raja takluk kepada Baginda Kertanagara. Kerajaan Melayu menjadi penting kedudukannya, sehingga dalam abad ke 14 seluruh Sumatra kerapkali disebut juga melayu. (H. J. Van Den Berg)</p>
                        <br/>
                        <p>Suatu kumpulan karya, yang di dapat orang di daerah Jambi, atas perintah Kertanagara diangkut ke melayu dalam tahun 1286. Maksud kertanagara telah jelas, yaitu mendirikan satu kerajaan Jawa di Sumatra tengah, yang akan menjadi pusat kebudayaan Jawa dipulau itu. Kerajaan Jawa yang di Sumatra itu merupakan suatu bahaya yang besar sekali bagi Sriwijaya. Akan tetapi Sriwijaya terlalu lemah untuk mencegah maksud Kertanagara itu.
Kekuasaan Sriwijaya telah runtuh pada segenap pihak. Dibagian Utara Semenanjung Malaka. Sebagian dari daerah Sriwijaya telah direbut kerajaan Siam yang baru saja berdiri. Di Aceh pun telah mulai pula timbul kerajaan baru, umpamanya kerajaan Perlak dan Kesultanan Samudra Pasai. Kerajaan baru itu telah menjadi kerajaan islam (yang pertama di Indonesia). Perhubungannya dengan Sriwijaya hampir tidak ada lagi. Kerajaan Pahang pun yang terletak di Semenanjung Malaka, rupanya telah menjadi daerah takluk juga pada kerajaan Singosari, yang telah sejak lama mengakui kekuasaan tertinggi dari Sriwijaya, rupanya terlepas pula dalam zaman itu dan telah menjadi bagian kerjaan Singosari.</p>
                        <br/>
                        <p>Sipanjonga dan teman-temannya serta pengikut-pengikutnya, sebagai seorang raja di negerinya, yang termasuk di dalam kerjaan Sriwijaya, mengetahui kedudukan Sriwijaya sudah demikian lemahnya, Ia mengambil kesempatan untuk meninggalkan kerajannya mencari daerah lain untuk tempat tinggalnya dan Untuk dapat menetap sebagai seorang raja yang berkuasa dan tibalah mereka di Pulau Buton. Tibanya Sipanjonga dengan kawan-kawan tidak bersama-sama dan tidak pula pada suatu tempat yang sama dan rombongannya terdiri dalam dua kelompok, dengan tumpangan mereka yang disebut dalam zaman “palulang”.
Kelompok pertama Sipanjonga dengan Sijawangkati sebagai kepala rombongan mengadakan pendaratan yang pertama di Kalaupa, suatu daerah pantai dari raja tobo-Tobo, sedangkan Simalui dan Sitamanajo mendarat di Walalogusi (kira-kira kampung Boneatiro atau di sekitar kampung tersebut Kecamatan Kapontori sekarang). Pada waktu pendaratan pertama itu Sipanjonga mengibarkan bendera kerajaannya pada suatu tempat tidak jauh dari Kalampa, pertanda kebesarannya. Bendera Sipanjonga inilah yang menjadi bendera kerajaan buton yang disebut “tombi pagi” yang berwarna warni, “longa-longa” bahasa wolionya.</p>
                        <br/>
                        <p>Di kemudian tempat di mana pengibaran bendera tersebut dikenal dengan nama “sula” yang sampai sekarang masih dikenal, terdapat di dalam desa Katobengke Kecamatan Wolio, tidak jauh lapangan udara Betoambari. Kemudian maka keempat pemuka tersebut di atas yang membuat dan meninggalkan sejarah dan kebudayaan wolio, sedangkan kerajaan yang pada zamannya pernah menjadi kerajaan yang berarti, dan merekalah pula yang mengawali pembentukan kampung-kampung, yang kemudian sesuai dengan perkembangannya menjadi kerajaan dan inilah yang dimaksudkan dengan kerajaan Buton, yang sebagai Rajanya yang pertama Ratu I Wa Kaa Kaa.</p>
                        <br/>
                        <p>Di tempat pendaratannya tersebut Sipanjonga dan kawan-kawannya membangun tempat kediamannya yang lambat laun menjadi sebuah kampung yang besar, yang tidak lama setelah pendaratannya itu Rombongan Simalui dan Sitamanajo bersatu kembali dengan Sipanjonga di Kalampa. Oleh karena letak tempat tinggal dari Sipanjonga dekat pantai bukanlah suatu hal yang tidak mungkin terjadinya gangguan-gangguan keamanan, terutama sekali dari bajak laut yang berasal dari Tobelo Maluku – masyuurnya gangguan keamanan dari apa yang dikenal dengan tobelo, demikian di takuti sehingga menjadi akta menakuti anak-anak dari kalangan orang tua dengan “jaga otobelo yitu” artinya “awas tobelo itu”.</p>
                        <br/>
                        <p>Untuk mengindarkan diri dari gangguan keamanan Sipanjonga dan rakyatnya meninggalkan Kalampa menuju arah gunung yang tidak jauh dari tempatnya itu kira-kira 5 km dari tepi pantai di tempat yang baru inilah Sipanjonga dan rakyatnya bermukim. Karena di tempat yang baru itu masih penuh dengan hutan belukar maka untuk membangun tempat kediaman mereka ditebasnya belukar-belukar itu, yang pekerjaan menebas itu dalam bahasa wolionya dikatakan “Welia”. Inilah asal nama “Wolio” dan tempat inilah pula yang menjadi tempat pusat kebudayaan Wolio ibu kota kerajaan.</p>
                        <br/>
                        <p>Diriwayatkan lebih jauh bahwa pada waktu Sipanjonga dan teman-teman menebas hutan belukar di tempat itu didapati banyak pohon enau. Terlebih di atas sebuah bukit bernama “Lelemangura” Rahantulu – Di tempat ini diketemukan putri Raja Wa Kaa Kaa. Lelemangura bahasa Wolio terdiri dari anak kata “lele” dan “mangura”. Lele berarti tetap dan mangura mudah. Ini mengandung makna kiasan terhadap putri Wa Kaa Kaa yang karena ditemukan dan dianggap sebagai bayi dalam arti “diberi baru menerima, disuap lalu menganga dan hanya menangis dan tertawa yang dikenalnya”. Tujuan hakekatnya supaya tetap diingat bahwa Raja adalah “anak” dari Betoambari Bontona Peropa dan Sangariarana Bontona Baluwu Siolimbona pada keseluruhannya.</p>
                        <br/>
                        <p>Bukit inilah yang kemudian masyur dengan sebutan Lelemangura. Salah seorang teman dari Sipanjonga yang bernama Sijawangkati mendapatkan enau dan dengan diam-diam ia menyadap enau itu. Ketika yang empunya enau yang bernama Dungkungeangia datang menyadap enaunya, didapatinya enaunya sudah di sedap orang yang tidak diketahuninya. Timbullah marahnya. Dipotongnya sebatang kayu yang cukup besar. Melihat potongan batang kayu itu, timbul dalam pemikirannya betapa besar dan kuat orang yang memotong kayu itu namun tidak menimbulkan rasa takut pada diri Sijawangkati. Untuk mengimbangi potongan kayu itu, dipotongnya rotan yang panjangnya satu jengkal yang cukup besar juga, kemudian batang rotan itu disimpulnya. Karena kekuatan simpulan pada batang rotan itu, hampir tidak kelihatan, kemudian diletakkannya di atas bekas potongan batang kayu itu. Tentu orang yang menyadap enau saya ini adalah orang yang sakti dan mungkin bukan manusia biasa.</p>
                        <br/>
                        <p>Suatu waktu secara kebetulan keduanya bertemu di tempat itu. Maka terjadilah perkelahian yang sengit, yang sama-sama kuat. Masing-masing tidak ada yang kalah. Pada akhirnya keduanya karena sudah kepayahan berdamai. Mufakatlah keduanya untuk hidup damai dan saling membantu dan bagi anak cucu mereka dikemudian akan hidup di dalam alam kesatuan dan persatuan. Dengan adanya perdamaian sijawangkai Dungkusangia tersebut maka negeri tobe-tobe masuk dan bersatu dengan Wolio. Letak negeri tobe-Tobe itu dari tempat tinggal Sipanjonga +7 KM.</p>
                        <br/>
                        <p>Dapat dijelaskan disini bahwa Dungkusangia dimaksudkan menurut keterangan leluhur adalah berasal dari Cina yang selanjutnya dalam buku silsilah bangsawan Buton dikatakan asal “fari” asal “peri”. Menurut Pak La Hude (Sejarawan) dikatakan orangnya amat putih, sama halnya dengan putihnya isi kelapa yang dimakan fari (binatang semacam serangga).</p>
                    </div>
                )
            },
            {
                name: "Kebudayaan",
                content: (
                    <TTIB images={[
                        {
                            src: "/buton.jpg",
                            caption: "Gadis Buton dalam tradisi Posuo"
                        }
                    ]}>
                        Orang Buton terkenal pula dengan peradabannya yang tinggi dan hingga saat ini peninggalannya masih dapat dilihat di wilayah-wilayah Kesultanan Buton, diantaranya Benteng Keraton Buton yang merupakan benteng terbesar di dunia, Istana Malige yang merupakan rumah adat tradisional Buton yang berdiri kokoh setinggi empat tingkat tanpa menggunakan sebatang paku pun, mata uang Kesultanan Buton yang bernama Kampua, dan banyak lagi.
                    </TTIB>
                )
            }
        ]
    },
    {
        name: "Suku Wolio",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <MidText>
                        Suku Wolio merupakan salah satu suku bangsa yang ada di Provinsi Sulawesi Tenggara yang tersebar di kepulauan Buton, Muna, dan Kabaena. Populasinya sebanyak 30.000 jiwa yang termasuk ke dalam suku Wolio. Beberapa abad yang lalu, daerah ini pernah menjadi kesultanan yang berarti, pulau Buton terletak di tenggara pulau Sulawesi, pulau Kabena yang berstatus sebagai kecamatan, dan kepulauan Wakatobi, terdiri dari pulau Wangi-Wangi Kaledupa, Tomia, dan Binongko. Namun, masyarakat Wolio, kini sudah tersebar ke Indonesia bagian timur seperti Maluku dan Irian Jaya.
                    </MidText>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <TWFRI image={{
                        src: "/orang-wolio.jpg",
                        caption: "Orang-orang Suku Wolio."
                    }}>
                        <p>Cikal bakal negeri Buton untuk menjadi sebuah Kerajaan pertama kali dirintis oleh kelompok Mia Patamiana (si empat orang) yaitu Sipanjonga, Simalui, Sitamanajo, Sijawangkati yang oleh sumber lisan mereka berasal dari Semenanjung Tanah Melayu pada akhir abad ke–13.</p>
                        <br/>
                        <p>Mereka mulai membangun perkampungan yang dinamakan Wolio (saat ini berada dalam wilayah Kota Bau-Bau serta membentuk sistem pemerintahan tradisional dengan menetapkan 4 Limbo (Empat Wilayah Kecil) yaitu Gundu-gundu, Barangkatopa, Peropa dan Baluwu yang masing-masing wilayah dipimpin oleh seorang Bonto sehingga lebih dikenal dengan Patalimbona. Keempat orang Bonto tersebut disamping sebagai kepala wilayah juga bertugas sebagai pelaksana dalam mengangkat dan menetapkan seorang Raja.</p>
                        <br/>
                        <p>Selain empat Limbo yang disebutkan di atas, di Buton telah berdiri beberapa kerajaan kecil seperti Tobe-tobe, Kamaru, Wabula, Todanga dan Batauga. Maka atas jasa Patalimbona, kerajaan-kerajaan tersebut kemudian bergabung dan membentuk kerajaan baru yaitu kerajaan Buton dan menetapkan Wa Kaa Kaa (seorang wanita bersuamikan Si Batara seorang turunan bangsawan Kerajaan Majapahit) menjadi Raja I pada tahun 1332 setelah mendapat persetujuan dari keempat orang bonto/patalimbona (saat ini hampir sama dengan lembaga legislatif).</p>
                    </TWFRI>
                )
            },
            {
                name: "Tradisi",
                content: (
                    <div className="w-full overflow-auto p-10">
                        <p>Pernikahan di suku Wolio bersifat monogami. Oleh karena itu setelah menikah, pengantin pria harus ikut tinggal di rumah pengantin perempuan, kecuali suami (pengantin pria) sudah memiliki rumah pribadi.</p>
                        <br/>
                        <p>Pekande-kandea mempunyai arti makan-makan. Makna dari tradisi tersebut adalah bentuk rasa syukur kepada Allah swt atas rezeki yang telah masyarkat terima. Tradisi ini dilakukan pada bulan syawal. Tradisi ini juga biasanya untuk menyambut tamu. Namun adapula yang memanfaatkan tradisi ini untuk mecari jodoh.</p>
                        <br/>
                        <p>Laki-laki diwajibkan mencari nafkah, sedangkan perempuan mempunyai tugas mengurus seluruh keperluan rumah tangga. Meski begitu, dalam hal pendidikan tidak ada batasan atara perempuan dan laki-laki.</p>
                        <br/>
                        <p>Suku Wolio juga memiliki tradisi memberi lubang rahasia di rumahnya. Mereka memilih kayu terbaiknya untuk diberi emas sebagai tanda pintu rahasia tersebut.
Goraana Oputa/Maludju Wolio[4] yaitu tradisi masyarakat dalam merayakan hari kelahiran Nabi Muhammad saw. Tradisi ini berawal dari kebiasaan di kerajaan Buton. Tradisi ini diawali dari membaca kitab berjanji.</p>
                        <br/>
                        <p>Qunua, yaitu tradisi yang dilakukan masyarakat Buton pada pertengahan bulan Ramadhan. Tradisi ini diawali dengan ibadah Salat tarawih tepat pada pukul 24.00, lalu dilanjutkan dengan doa qunut, lalu ditutup oleh sahur bersama.</p>
                        <br/>
                        <p>Tuturiangana Andaala, biasa dikenal dengan sedekah laut. Tradisi ini dilakukan agar diberikan kelancaran saat beraktivitas di laut. Tradisi ini dilakukan oleh laki-laki yang membawa empat sesajen dari rakit kecil yang terbuat dari bambu. Setelah dilakukan do’a lalu kambing jantan disembelih dan darahnya diambil dengan gelas bambu. Darah kambing tersebut kemudian diletakkan di samping rakit sesaji.</p>
                        <br/>
                        <p>Mataa yaitu ritual adat yang digelar masyarakat Buton etnik cia-cia di desa Laporo yang merupakan wujud rasa syukur kepada Allah SWT atas hasil panen yang diperoleh.
Karia'a yaitu pesta adat masyarakat Buton yang berada di Kaledupa untuk menyambut anak-anak yang sedang beranjak dewasa. Pesta Rakyat ini diiringi dengan tarian-tarian yang dilakukan oleh pemangku adat, bersama orang tua kemudian memanjatkan doa bersama anak-anak mereka yang bertujuan untuk membekali anak-anak mereka dengan nilai-nilai moral dan spiritual.</p>
                        <br/>
                        <p>Posuo (pingit) yaitu pesta adat masyarakat Buton yang ditujukan pada kaum wanita yang memasuki usia remaja sekaligus menyiapkan diri untuk berumah tangga.</p>
                    </div>
                )
            }
        ]
    },

    {
        name: "Suku Mamasa",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <TTIB images={[
                        {
                            src: "/orang-mamasa.jpg",
                            caption: "Orang-orang Suku Mamasa."
                        }
                    ]}>
                        Suku Mamasa adalah kelompok etnis yang mendiami wilayah pegunungan tengah Pulau Sulawesi, tepatnya di Kabupaten Mamasa, Sulawesi Barat. Masyarakat suku Mamasa tersebar di hampir seluruh kecamatan di Kabupaten Mamasa. Secara adat istiadat dan budaya, masyarakat Mamasa memiliki banyak kesamaan dengan suku Toraja. Selain itu bahasa Mamasa juga dikelompokan kedalam rumpun bahasa Toraja. Oleh karena itu orang Mamasa sering juga disebut sebagai "orang Toraja Mamasa".
                    </TTIB>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <MidText>
                        Asal-usul suku Mamasa menurut sebuah cerita rakyat yang terpelihara di kalangan masyarakat Mamasa, menceritakan bahwa Nene' Torije'ne (nenek moyang) datang dari laut dan "Nene' Pongkapadang" (kakek moyang) datang dari sebelah timur pegunungan (Sa'dan di Tana Toraja) Pulau Sulawesi. Mereka bertemu satu sama lain kemudian pindah ke Buntu Bulo di Tabulahan. Menurut para peneliti, orang Mamasa ini dahulunya berasal dari orang-orang Toraja Sa'dan yang bermigrasi ke wilayah Mamasa dan kemudian tumbuh dan berkembang menjadi suatu kelompok etnis yang sekarang lebih umum dikenal sebagai orang Mamasa.
                    </MidText>
                )
            }
        ]
    },
    {
        name: "Suku Mandar",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <div className="w-full overflow-auto p-10">
                        <p>Suku Mandar adalah suku bangsa yang menempati wilayah Sulawesi Barat, serta sebagian Sulawesi Selatan, dan Sulawesi Tengah Populasi Suku Mandar dengan jumlah Signifikan juga dapat ditemui di luar Sulawesi seperti Kalimantan Selatan, Kalimantan Timur, Jawa dan Sumatra bahkan sampai ke Malaysia. Pada sensus penduduk tahun 2000 didapati bahwa terdapat 250.000 lebih orang Mandar di Sulawesi Selatan, tetapi ini lebih menunjukkan jumlah penutur bahasa Mandar pada tahun itu kabupaten Majene, Polewali Mandar, dan Mamuju penutur bahasa Mandar juga banyak, maka angkanya akan lebih dari 350.000 jiwa di tiga kabupaten, Majene, Polewali Mandar dan Mamuju pada waktu itu, karena sensus tahun 1 menunjukkan jumlah penduduk Majene 120.830, Polewali Mandar 260.384, Mamuju 99.796.</p>
                        <br/>
                        <p>Mandar ialah suatu kesatuan etnis yang berada di Sulawesi Barat. Dulunya, sebelum terjadi pemekaran wilayah, Mandar bersama dengan etnis Bugis, Makassar, dan Toraja mewarnai keberagaman di Sulawesi Selatan. Meskipun secara politis Sulawesi Barat dan Sulawesi Selatan diberi sekat, secara historis dan kultural Mandar tetap terikat dengan “sepupu-sepupu” serumpunnya di Sulawesi Selatan. Istilah Mandar merupakan ikatan persatuan antara tujuh kerajaan di pesisir (Pitu Ba’ba’na Binanga) dan tujuh kerajaan di gunung (Pitu Ulunna Salu). Keempat belas kekuatan ini saling melengkapi, “Sipamandar” (menguatkan) sebagai satu bangsa melalui perjanjian yang disumpahkan oleh leluhur mereka di Allewuang Batu di Luyo.</p>
                    </div>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <MidText>
                        Sepanjang sejarah kerajaan-kerajaan di Mandar, telah banyak melahirkan tokoh-tokoh pejuang dalam mempertahankan tanah melawan penjajahan VOC, Belanda seperti: I Maga Daeng Rioso, Puatta' I Sa'dawang, Maraqdia Banggae, Ammana I Wewang, Hj. Andi Depu, meskipun pada akhirnya wilayah Mandar berhasil direbut oleh Belanda.
                        <br/><br/>
                        Dari semangat suku Mandar yang disebut semangat "Assimandarang" sehingga pada tahun 2004 wilayah Mandar menjadi salah satu provinsi yang ada di Indonesia yaitu provinsi Sulawesi Barat.
                    </MidText>
                )
            },
            {
                name: "Adat & Budaya",
                content: (
                    <TWFRI image={{
                        src: "/orang-mandar.jpg",
                        caption: "Orang-orang Suku Mandar."
                    }}>
                        <p>Rumah adat suku Mandar disebut Boyang. Perayaan-perayaan adat diantaranya Sayyang Pattu'du (Kuda Menari), Passandeq (Mengarungi lautan dengan cadik sandeq), Upacara adat suku Mandar, yaitu "mappandoe' sasi" (bermandi laut). Makanan khas diantaranya Jepa, Pandeangang Peapi, Banggulung Tapa, dll.</p>
                        <br/>
                        <p>Suku Mandar dikenal sebagai salah satu suku yang menjunjung tinggi adat istiadat dan budaya. Beberapa tradisi budaya tersebut dipertahankan dalam kehidupan sehari-hari hingga sekarang.</p>
                        <br/>
                        <p>Berikut beberapa tradisi yang masih dilestarikan oleh orang suku Mandar:</p>
                        <br/>
                        <ol className="list-decimal flex flex-col gap-5">
                            <li>
                                <p className="font-bold text-lg">Sayyang Pattu'du'</p>
                                <p>Dikutip dari Jurnal Universitas Muhammadiyah Makassar yang berjudul "Nilai Sosial Tradisi Sayyang Pattu'du' dalam Masyarakat Mandar" disebutkan bahwa sayyang pattu'du' merupakan acara adat tradisional yang dilakukan untuk mensyukuri anak-anak yang khatam (tamat) Al-Quran.</p>
                                <br/>
                                <p>Bagi suku Mandar, khatam Al-Quran adalah sesuatu yang sangat istimewa. Karena itu, bagi anak-anak yang berhasil mengkhatamkan AL-Quran akan diarak keliling kampung dengan kuda-kuda yang dihias sedemikian rupa.</p>
                                <br/>
                                <p>Istilah Sayyang Pattu'du' sendiri diartikan sebagai kuda menari. Di mana para peserta akan duduk di atas kuda, sambil menjaga keseimbangan.</p>
                                <br/>
                                <p>Kuda-kuda tersebut telah terlatih mengikuti irama musik rebana dan untaian pantun khas Mandar yang disebut Kalinda'da'.</p>
                                <br/>
                                <p>Upacara adat ini biasanya diadakan sekali setahun, bertepatan dengan bulan Maulid Rabiul Awwal. Sayyang Pattu'du' ini memiliki makna edukasi motivasional bagi anak-anak agar segera mungkin mengkhatamkan Al-Quran.</p>
                            </li>
                            <li>
                                <p className="font-bold text-lg">Perahu Sandeq</p>
                                <p>Melansir dari laman resmi Pemprov Sulawesi Barat, disebutkan bahwa Perahu Sandeq adalah perahu bercadik warisan Austronesia yang kemudian berevolusi di Mandar dan kemudian disebut 'Sandeq' yang berarti tajam atau runcing. Sandeq disebut sebagai puncak kebudayaan Mandar dalam bidang kebaharian.</p>
                                <br/>
                                <p>Perahu inilah yang digunakan masyarakat Mandar untuk berlayar hingga ke berbagai wilayah. Perahu ini memiliki kecepatan hingga 20 sampai 30 knot atau setara 50 km/jam, dan disebut sebagai salah satu perahu layar tercepat di dunia.</p>
                                <br/>
                                <p>Sementara dalam Jurnal Universitas Muhammadiyah Makassar, yang berjudul "Kearifan Lokal Makna Simbolik Perahu Sandeq Pada Tradisi Masyarakat Mandar" dalam tradisi masyarakat Mandar, proses pembuatan perahu sandeq dilakukan dengan berbagai ritual-ritual. Terutama terkait pemilihan waktu yang tepat untuk menebang pohon yang akan digunakan sebagai bahan pembuatan perahu Sandeq.</p>
                                <br/>
                                <p>Salah satunya terkait waktu memotong pohon yang dilakukan pada hari ke-15 kalender Hijriah. Selain itu pemotongan kayu dilakukan ketika matahari menanjak naik dan ketika angin sedang berhembus.</p>
                            </li>
                            <li>
                                <p className="font-bold text-lg">Kalindaqdaq</p>
                                <p>Kalindaqdaq merupakan salah satu budaya sastra berupa puisi tradisional khas Mandar. Puisi ini biasanya dibacakan pada upacara-upacara adat dan keagamaan.</p>
                        <br/>
                        <p>Kalindaqdaq biasa juga dibacakan pada upacara adat sayyang pattu'du', maulid nabi atau upacara perkawinan. Dalam buku "Polewali Mandar, Alam. Budaya. Manusia" disebutkan bahwa istilah kalindaqdaq konon berasal dari berbagai versi.</p>
                        <br/>
                        <p>Salah satu versi menyebutkan kalindaqdaq berasal dari dua kata, yaitu kali yang berarti 'gali' dan daqdaq yang berarti 'dada'. Jadi kalindaqdaq artinya menggali isi dada/hati seseorang.</p>
                            </li>
                        </ol>
                    </TWFRI>
                )
            }
        ]
    },

    {
        name: "Suku Makassar",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <div className="w-full overflow-auto p-10">
                        <p>Suku Makassar adalah kelompok etnis yang mendiami pesisir selatan pulau Sulawesi, meliputi wilayah Kotamadya Makassar, Kabupaten Gowa, Takalar, Jeneponto, Bantaeng, Kepulauan Selayar, sebagian wilayah Bulukumba sebagian Maros, sebagian Pangkajene dan Kepulauan. Suku Makassar adalah salah satu suku terbesar di Sulawesi. Berikut ini daftar tokoh suku Makassar dalam dan luar Negeri.</p>
                        <br/>
                        <p>Sumber-sumber Portugis pada permulaan abad ke-16 telah mencatat nama Makassar ”Macaçar”. Bahkan dalam syair ke-14 Nagarakertagama karangan Prapanca (1365) nama Makassar "Pulau-pulau Makassar" atau lebih dikenal saat ini dengan Pulau Sulawesi telah tercantum. Sumber lokal nama Makassar telah tercatat dalam Kronik Gowa ketika Daeng Pamatte membuat Aksara dengan nama Lontara Mangkasara pada tahun 1538.</p>
                        <br/>
                        <p>Daeng Matanre Karaeng Tumapakrisi Kallongna, raja Gowa ke-IX mendirikan kota Makassar pada tahun 1511 atau lebih dikenal dengan nama Benteng Somba Opu. Dan pada tahun itu pula bangsa Portugis sudah berlabuh dan berkunjung untuk bertemu raja Gowa.</p>
                        <br/>
                        <p>Makassar sebagai ibu kota sudah dikenal oleh bangsa asing dari Eropa yang menetap di ibukota Somba Opu seperti Portugis, Inggris, Belanda, Denmark dan Prancis. Dari Asia Timur seperti China, bangsa Moor dari Afrika utara dan Yaman dari Timur Tengah . Komunitas Suku Melayu di Asia Tenggara seperti Pattani dari Thailand, Champa dari Vietnam, Minangkabau dari Sumatera barat, Johor dan Pahang dari Malaysia, Suku Aborigin dari Australia utara serta berbagai suku bangsa di Nusantara. Makassar menjadi kota paling Kosmopolitan di Asia Tenggara pada abad ke-XVII.</p>
                    </div>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <div className="w-full overflow-auto p-10">
                        <p>Suku Makassar ini adalah etnis yang berjiwa penakluk dan pemberani namun demokratis dalam memerintah, gemar berperang dan jaya di laut. Tak heran dimulai pada tahun 1511 hingga 1699 dengan simbol Kerajaan Gowa, mereka berhasil membentuk satu wilayah kerajaan yang luas dengan kekuatan armada laut yang besar berhasil membentuk suatu Imperium bernafaskan Islam, mulai dari Sulawesi, kalimantan bagian Timur, NTT, NTB, Maluku, Brunei, Filipina bagian selatan hingga Australia bagian utara. Mereka menjalin Traktat dengan Bali, kerjasama dengan Malaka dan Banten dan seluruh kerajaan lainnya dalam lingkup Nusantara maupun Internasional (khususnya Portugis). Kerajaan ini juga menghadapi perang yang dahsyat dengan Belanda hingga kejatuhannya akibat adu domba Belanda terhadap kerajaan taklukannya.</p>
                        <br/>
                        <p>Suku bangsa Makassar meninggalkan jejak nama Kampung dibeberpa negara seperti Macassan Beach atau Pantai Makassar dan Macassar Bay atau Teluk Makassar. Kedua tempat ini masuk dalam negara bagian Wilayah Utara Australia yang menjalin kontak dengan masyarakat pribumi sebelum abad ke-17 oleh pelaut Teripang asal Makassar. Dinegara Timor Leste pada tahun 1641 oleh Sultan Mudaffar Raja Tallo dengan nama Pante Makassar.</p>
                        <br/>
                        <p>Dinegeri Jiran Malaysia dengan nama Kampung Mengkasar (Makassar), pada tahun 1722 oleh Karaeng Aji. Mengkasar adalah penyebutan orang Melayu untuk nama Makassar. Kampung ini kelak melahirkan generasi Karaeng Aji yang bernama Tun Abdul Razak dan Najib Razak sebagai Perdana Menteri Malaysia.</p>
                        <br/>
                        <p>Di Negeri Pagoda Thailand pada tahun 1686 oleh Daeng Mangalle dengan nama Makkasan di jantung ibukota Bangkok. Di ujung selatan benua Afrika sebuah kota kecil bernama Macassar, Western Cape, Afrika Selatan. Syehk Yusuf al Makassari membuat sebuah perkampungan bersama pengikutnya bernama Makassar sesuai tempat asal mereka pada tahun 1694.</p>
                    </div>
                )
            },
            {
                name: "Kebudayaan",
                content: (
                    <TWFRI image={{
                        src: "/orang-makassar.jpg",
                        caption: "Orang Makassar."
                    }}>
                        <p>Ada berbagai kebudayaan suku Makassar. Beberapa di antaranya, yaitu:</p>
                        <br/>
                        <ol className="list-decimal flex flex-col gap-5">
                            <li>
                                <p className="font-bold text-lg">Rumah Adat</p>
                                <p>Suku Makassar mempunyai rumah adat yang bernama Balla. Bentuknya rumah panggung dan menggunakan kayu sebagai penyangga.</p>
                            </li>
                            <li>
                                <p className="font-bold text-lg">Baju Adat</p>
                                <p>Baju adat khas suku Makassar bernama Baju Bodo. Ciri-cirinya adalah berbentuk segiempat, tidak berlengan, sisi samping dijahit, bergelembung di bagian tubuh, hiasan bulat di bagian tepi, dan tidak ada jahitan sambung di bagian bahunya.</p>
                            </li>
                            <li>
                                <p className="font-bold text-lg">Tari Adat</p>
                                <p>Tari adat yang paling terkenal dari suku Makassar adalah Tari Pakarena. Tarian ini merupakan tari yang diiringi dua kepala gandrang dan sepasang alat seperti suling.</p>
                            </li>
                            <li>
                                <p className="font-bold text-lg">Makanan Khas</p>
                                <p>Makanan khas yang paling terkenal dari suku Makassar adalah Sop Saudara, Sop Konro, dan Coto Makassar. Bumbu dan rasanya yang nikmat membuat ketiga makanan tersebut sangat terkenal sampai mancanegara.</p>
                            </li>
                        </ol>
                    </TWFRI>
                )
            }
        ]
    },
    {
        name: "Suku Toraja",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <div className="w-full overflow-auto p-10">
                        <p>Suku Toraja adalah sebuah suku bangsa yang menetap di pegunungan bagian utara Sulawesi Selatan, Indonesia. Populasinya diperkirakan sekitar 1 juta jiwa, dengan sekitar 500.000 di antaranya masih tinggal di Kabupaten Tana Toraja, Kabupaten Toraja Utara, dan Kabupaten Mamasa (di Mamasa disebut juga sebagai suku Mamasa). Mayoritas suku Toraja memeluk Kekristenan, sebagian masih menganut agama asli Aluk To Dolo, dan sebagian lagi menganut Islam. Pemerintah Indonesia telah mengakui Aluk To Dolo sebagai bagian dari Agama Hindu Dharma.</p>
                        <br/>
                        <p>Kata Toraja berasal dari bahasa Bugis, To Riaja, yang berarti "orang yang berdiam di negeri atas". Pemerintah kolonial Belanda menamai suku ini Toraja pada tahun 1909. Suku Toraja terkenal akan ritual pemakaman, rumah adat tongkonan dan ukiran kayunya. Ritual pemakaman Suku Toraja merupakan peristiwa sosial yang penting, biasanya dihadiri oleh ratusan orang dan berlangsung selama beberapa hari.</p>
                        <br/>
                        <p>Sebelum abad ke-20, suku Toraja tinggal di desa-desa otonom. Mereka masih menganut animisme dan belum tersentuh oleh dunia luar. Pada awal tahun 1900-an, misionaris Belanda datang dan menyebarkan agama Kristen. Setelah semakin terbuka kepada dunia luar pada tahun 1970-an, kabupaten Tana Toraja menjadi lambang pariwisata Indonesia. Tana Toraja dimanfaatkan oleh pengembang pariwisata dan dipelajari oleh antropolog. Masyarakat Toraja sejak tahun 1990-an mengalami transformasi budaya, dari masyarakat berkepercayaan tradisional dan agraris, menjadi masyarakat yang mayoritas beragama Kristen dan mengandalkan sektor pariwisata yang terus meningkat.</p>
                    </div>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <TWFRI image={{
                        src: "/rambu-solo.jpg",
                        caption: "Upacara Rambu Solo."
                    }}>
                        <p>Wilayah sekitaran Teluk Tonkin, yang terletak antara Vietnam utara dan Cina selatan, adalah tempat asal suku Toraja. Awalnya, imigran tersebut tinggal di wilayah pantai Sulawesi, namun akhirnya pindah ke dataran tinggi.</p>
                        <br/>
                        <p>Sejak abad ke-17, Belanda mulai menancapkan kekuasaan perdagangan dan politik di Sulawesi melalui Vereenigde Oost-Indische Compagnie (VOC). Selama dua abad, mereka mengacuhkan wilayah dataran tinggi Sulawesi tengah (tempat suku Toraja tinggal) karena sulit dicapai dan hanya memiliki sedikit lahan yang produktif. Pada akhir abad ke-19, Belanda mulai khawatir terhadap pesatnya penyebaran Islam di Sulawesi selatan, terutama di antara suku Makassar dan Bugis. Belanda melihat suku Toraja yang menganut animisme sebagai target yang potensial untuk dikristenkan. Pada tahun 1920-an, misi penyebaran agama Kristen mulai dijalankan dengan bantuan pemerintah kolonial Belanda. Selain menyebarkan agama, Belanda juga menghapuskan perbudakan dan menerapkan pajak daerah. Sebuah garis digambarkan di sekitar wilayah Sa'dan dan disebut Tana Toraja. Tana Toraja awalnya merupakan subdivisi dari kerajaan Luwu yang mengklaim wilayah tersebut. Pada tahun 1946, Belanda memberikan Tana Toraja status regentschap, dan Indonesia mengakuinya sebagai suatu kabupaten pada tahun 1957.</p>
                        <br/>
                        <p>Misionaris Belanda yang baru datang mendapat perlawanan kuat dari suku Toraja karena penghapusan jalur perdagangan budak yang menguntungkan Toraja. Beberapa orang Toraja telah dipindahkan ke dataran rendah secara paksa oleh Belanda agar lebih mudah diatur. Pajak ditetapkan pada tingkat yang tinggi, dengan tujuan untuk menggerogoti kekayaan para elit masyarakat. Meskipun demikian, usaha-usaha Belanda tersebut tidak merusak budaya Toraja, dan hanya sedikit orang Toraja yang saat itu menjadi Kristen. Pada tahun 1950, hanya 10% orang Toraja yang berubah agama menjadi Kristen.</p>
                        <br/>
                        <p>Penduduk Muslim di dataran rendah menyerang Toraja pada tahun 1930-an. Akibatnya, banyak orang Toraja yang ingin beraliansi dengan Belanda berpindah ke agama Kristen untuk mendapatkan perlindungan politik, dan agar dapat membentuk gerakan perlawanan terhadap orang-orang Bugis dan Makassar yang beragama Islam. Antara tahun 1951 dan 1965 setelah kemerdekaan Indonesia, Sulawesi Selatan mengalami kekacauan akibat pemberontakan yang dilancarkan Darul Islam, yang bertujuan untuk mendirikan sebuah negara Islam di Sulawesi. Perang gerilya yang berlangsung selama 15 tahun tersebut turut menyebabkan semakin banyak orang Toraja berpindah ke agama Kristen.</p>
                        <br/>
                        <p>Pada tahun 1965, sebuah dekret presiden mengharuskan seluruh penduduk Indonesia untuk menganut salah satu dari lima agama yang diakui: Islam, Kristen Protestan, Katolik, Hindu dan Buddha. Kepercayaan asli Toraja (aluk) tidak diakui secara hukum, dan suku Toraja berupaya menentang dekret tersebut. Untuk membuat aluk sesuai dengan hukum, ia harus diterima sebagai bagian dari salah satu agama resmi. Pada tahun 1969, Aluk To Dolo dilegalkan sebagai bagian dari Agama Hindu Dharma.</p>
                    </TWFRI>
                )
            }
        ]
    },

    {
        name: "Suku Ambon",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <TWFRI image={{
                        src: "/pakaian-ambon.jpg",
                        caption: "Pakaian Adat Suku Ambon."
                    }}>
                        <p>Suku Ambon adalah sebuah suku campuran Austronesia-Papua. Suku Ambon adalah suku terbesar di Maluku yang banyak mendiami wilayah Ambon, Saparua, Seram, Nusalaut, Haruku dan Pulau Ambalau Suku Ambon merupakan suku terbesar di antara orang-orang Maluku lainnya, meski banyak darinya yang tersebar sebagai akibat dari perpindahan keluar dari daerah aslinya. Suku Ambon berbahasa Melayu Ambon dan bahasa-bahasa tana (Asilulu, Hitu, Laha, Soya,[a] dan Tulehu); keduanya termasuk dalam rumpun bahasa Austronesia.</p>
                        <br/>
                        <p>Suku Ambon merupakan suku yang paling dikenal dan berpengaruh di antara suku-suku Maluku lainnya. Mereka mulai melebarkan pengaruhnya ketika masa penjajahan Portugis. Hal inilah yang menyebabkan sering kali istilah orang Ambon dipadankan dengan orang Maluku. Setelah kedatangan bangsa-bangsa Eropa yang menyusul penyebaran Islam, suku Ambon dicirikan oleh persaingan Islam-Kristennya.</p>
                        <br/>
                        <p>Meskipun suku Ambon berasal dari Kepulauan Maluku, sebagian besar dari mereka tersebar dan membentuk penyebaran bersama orang Maluku lainnya dalam jumlah yang besar di Papua, Jakarta, Jawa Timur & Jawa Barat. Beberapa dari mereka pun membentuk penyebaran besar di Belanda, juga bersama-sama dengan orang Maluku lainnya.</p>
                    </TWFRI>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <div className="w-full overflow-auto p-10">
                        <p>Suku Ambon membagi sejarahnya menjadi enam zaman penting, dimulai dari zaman Nenek Moyang, dilanjutkan oleh Portugis, Vlaming, Pattimura, Kompeni, hingga zaman Republik. Garis besar sejarah suku Ambon dimulai dari Nunusaku di Seram Barat. Karenanya pun, budaya tradisional Seram menjadi landasan budaya Ambon.</p>
                        <br/>
                        <p>Salah satu dari dua mata pencaharian adati suku Ambon adalah tukang kebun. Suku Ambon menanam berbagai macam sayuran, rempah, dan buah-buahan di ladangnya, di antaranya kasbi (ketela) yang dahulu dibawa oleh Portugis untuk memperbaiki gizi masyarakat setempat. Sagu yang merupakan makanan pokok pun dibudidayakan oleh para tukang kebun, meski dulunya diambil langsung dari alam.</p>
                        <br/>
                        <p>Pekerjaan adati lainnya, yakni nelayan selalu dimulai dengan berdoa sebelum melaut. Dalam hal pernelayanan juga dikenal dua upacara adat, yaitu turun perahu baru dan turun jaring baru, keduanya dipimpin oleh tokoh agama. Upacara yang pertama disebut dilakukan di atas perahu, sedangkan yang satunya di rumah pemilik jaring. Keduanya memiliki tujuan keselamatan sang nelayan. Selain jaring, dikenal pula alat, seperti sero atau bubu (anyaman bambu yang diletakkan di laut dangkal). Nelayan menangkap ikannya di labuang, daerah penangkapan ikan yang sudah dibagi tiap negeri. Istri para nelayan juga bekerja sebagai jibu-jibu atau penjual ikan pada siang hari.</p>
                        <br/>
                        <p>Sejak zaman Belanda hingga kini, ada banyak orang Ambon yang bekerja sebagai pegawai negeri dan tentara. Hal ini dilatarbelakangi oleh perlakuan khusus oleh pihak Belanda, yakni jalan masuk terhadap sarana pendidikan resmi yang sudah suku Ambon dapatkan sedari zaman penjajahan.</p>
                    </div>
                )
            }
        ]
    },
    {
        name: "Suku Kei",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <TTIB images={[
                        {
                            src: "/pakaian-kei.jpg",
                            caption: "Pakaian Adat Suku Kei."
                        }
                    ]}>
                        Suku Kei adalah suku bangsa di Indonesia yang mendiami Kepulauan Kei di Provinsi Maluku. Masyarakat suku Kei bertutur menggunakan bahasa Kei yang berfungsi sebagai basantara bagi masyarakat di Kepulauan Kei. Populasi suku Kei berjumlah sekitar 180.000 orang. Orang Tanimbar Kei merupakan salah satu sub-suku Kei yang mendiami pulau Tanimbar Kei; umumnya beragama Hindu.
                    </TTIB>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <div className="w-full overflow-auto p-10">
                        <p>Orang Kei sendiri menyebut dirinya sebagai umag Evav, umag artinya "orang" atau "manusia" dan Evav artinya "pulau babi". Pendapat lain mengatakan bahwa "Kei" berasal dari bahasa Portugis kayos yang artinya "keras". Mungkin dikarenakan pulau-pulau tersebut terbentuk dari batu-batu karang dan ditumbuhi berbagai jenis-jenis kayu yang keras. Dalam catatan-catatan sejarah menunjukkan bahwa Kepulauan Kei pada masa lampau sudah pernah dikunjungi oleh pelaut asing. Bukti-bukti sejarah ini sendiri menunjukkan bahwa kepulauan ini pernah dihuni oleh manusia-manusia yang berkebudayaan sama seperti di Australia bagian utara. Ada pula sisa-sisa peninggalan manusia berkebudayaan peralihan dari daratan Asia, antara lain dengan ditemukannya nekara dan kapak upacara dari perunggu di Kepulauan Kei.</p>
                        <br/>
                        <p>Pendapat yang lebih kuat, suku Kei disinyalir mempunyai hubungan kekerabatan yang erat dengan salah satu komunitas di Bali. Hasil penelusuran sementara, diyakini nenek moyang suku Kei datang dari desa Pedawa. Kepala Dinas Kebudayaan Kabupaten Buleleng, Gede Komang mengatakan para peneliti dari Maluku Tenggara sangat yakin dan percaya bahwa asal usul mereka berasal dari Pedawa. Hal itu berlandaskan hikayat dan cerita rakyat yang diceritakan secara turun temurun, serta bentuk rumah adat antara suku Kei dengan warga di desa Pedawa juga sangat mirip. Dari segi arsitektur, terlihat rumah adat keduanya memiliki kesamaan diantaranya rumah adat sama-sama membelakangi jalan raya dan segenap kegiatan sehari-hari seperti beribadah dan memasak dilakukan di dalam rumah. Kemiripan lain yakni adanya kosakata tombak yang hingga kini di pegang teguh masyarakat Kei. Beredar cerita kata itu berarti "kita berasal dari Bali". Bahkan, orang Tanimbar Kei yang merupakan sub-suku Kei, mayoritas masyarakatnya beragama Hindu dan memiliki banyak kemiripan lainnya dengan masyarakat suku Bali. Lain daripada itu ada sejumlah adat istiadat serta ritual yang diyakini mempunyai kemiripan dengan ritual Bali pada umumnya. Salah satunya hukum adat mengenai sawen atau hak kepemilikan ulayat. yaitu apabila sebidang tanah atau seekor hewan ternak sudah memiliki tanda sawen, maka hak kepemilikan tidak bisa di ganggu gugat. Sama seperti hak sawen yang ada di kebudayaan Bali. Secara morfologi, wajah orang Kei dengan orang Pedawa di Bali juga mirip. Bahkan, tak menutup kemungkinan suku Kei sejatinya berasal dari Bali.</p>
                        <br/>
                        <p>Jenis Kebudayaan yang dimiliki oleh suku Kei salah satunya terwujud dalam hukum adat Larvul Ngabal. Hukum adat tersebut sebenarnya merupakan gabungan dari 2 hukum adat yaitu hukum adat Larvul dan hukum adat Ngabal. Kedua hukum adat tersebut berasal dari 2 desa yang berbeda dan sebelumnya saling bersengketa. Akan tetapi, setelah kedua desa tersebut berdamai, hukum adat itupun disatukan menjadi Larvul Ngabal.</p>
                    </div>
                )
            }
        ]
    },
    {
        name: "Suku Tanimbar",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <TWFRI image={{
                        src: "/orang-tanimbar.jpg",
                        caption: "Orang-orang Suku Tanimbar."
                    }}>
                        <p>Suku Tanimbar adalah sekelompok etnis atau masyarakat asal Indonesia yang mendiami Kepulauan Tanimbar yang berasal dari campuran Austronesia-Papua. Kata ”Tanimbar” berasal dari kata Tanempar dalam bahasa Yamdena Timur (Nustimur) atau Tnebar dalam bahasa Fordata, yang berarti ”Terdampar”.</p>
                        <br/>
                        <p>Orang Tanimbar sendiri lebih suka menyebut diri sebagai orang Numbar. Kata Tanimbar digunakan pada awalnya oleh para penjelajah Barat. Masyarakat lain ada juga yang menyebutnya orang Timur Laut. Suku bangsa ini mendiami Pulau Yamdena, Selaru dan pulau-pulau kecil lain di lingkungan Kepulauan Tanimbar di Kecamatan Yamdena, Kabupaten Maluku Tenggara, Provinsi Maluku. Jumlah populasinya sekitar 10.000 jiwa. Suku bangsa ini sebenarnya terbagi menjadi tiga sub-suku bangsa yaitu Tomata Yamdena, Tomata Laru dan Tomata Nember. Sub suku bangsa Tomata Nember mendiami Pulau Fordata dan pulau-pulau di utara Pulau Yamdena. Sub suku bangsa Tomata Yamdena mendiami sebagian besar pulau Yamdena, sedangkan Tomata Laru mendiami Pulau Selaru dan pulau-pulau lain di bagian barat pulau Yamdena.</p>
                        <br/>
                        <p>Untuk jumlah populasinya sekitar 10.000 jiwa, suku bangsa ini sebenarnya terbagi menjadi tiga sub-suku bangsa yakni Tomata Yamdena, Tomata Laru dan Tomata Nember. Sub suku bangsa Tomata Nember mendiami Pulau Fordata dan pulau-pulau di Utara Pulau Yamdena. Sub suku bangsa Tomata Yamdena mendiami sebagian besar pulau Yamdena, sedangkan Tomata Laru mendiami Pulau Selaru dan pulau-pulau lain di bagian barat pulau Yamdena.</p>
                        <br/>
                        <p>Budaya Duan - Lolat.<br/>Budaya Orang Maluku yang paling kental dan paling dikenal adalah budaya "Pela Gandong". Berbeda dengan orang Tanimbar (Maluku Tenggara Barat), Pela Gandong adalah bagian dari hierarki kearifan lokal yang terpusat pada Duan Lolat.</p>
                    </TWFRI>
                )
            }
        ]
    },
    {
        name: "Suku Ternate",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <MidText>
                        Suku ternate ialah salah satu suku yang berada di Indonesia, lebih tepatnya berada di wilayah Profinsi Maluku Utara. Jumlah penduduk suku ini kurang lebih sebesar 50.000 Jiwa. Ternate adalah salah satu pulau yang terletak di sebelah barat pantai Halmahera dan merupakan salah satu dari deretan pulau-pulau vulkanis yang masih aktif Luas wilayah keseluruhannya adalah 5.681,30 Km2.
                        <br/><br/>
                        Selain berdiam di pulau asalnya, orang Ternate juga berdiam di daerah lain, misalnya di pulau Bacan dan pulau Obi yang termasuk wilayah kabupaten Halmahera Tengah, serta wilayah lain di dalam dan di luar Provinsi Maluku Utara.
                    </MidText>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <MidText>
                        Tahun 1257 Momole Ciko pemimpin Sampalu terpilih dan diangkat sebagai kolano (raja) pertama dengan gelar Baab Mashur Malamo (1257-1272). Kerajaan Gapi berpusat di kampung Ternate, yang dalam perkembangan selanjutnya semakin besar dan ramai, sehingga oleh penduduk disebut juga sebagai Gam Lamo atau kampung besar (belakangan orang menyebut Gam Lamo dengan Gamalama).
                        <br/><br/>
                        Semakin besar dan populernya Kota Ternate, sehingga kemudian orang lebih suka mengatakan kerajaan Ternate daripada kerajaan Gapi. Di bawah pimpinan beberapa generasi penguasa berikutnya, Ternate berkembang dari sebuah kerajaan yang hanya berwilayahkan sebuah pulau kecil menjadi kerajaan yang berpengaruh dan terbesar di bagian timur Indonesia khususnya Maluku.
                    </MidText>
                )
            },
            {
                name: "Kebudayaan",
                content: (
                    <MidText>
                        Suku Ternate terkenal sangat kental akan kebudayaannya, baik itu dalam adat pernikahan, makanan, upacara penyambutan, dan juga kematian.
                        <br/><br/>
                        Pulau Gapi (kini Ternate) mulai ramai di awal abad ke-13. Penduduk Ternate awal merupakan warga eksodus dari Halmahera. Awalnya di Ternate terdapat empat kampung yang masing-masing dikepalai oleh seorang momole (kepala marga). Merekalah yang pertama–tama mengadakan hubungan dengan para pedagang yang datang dari segala penjuru mencari rempah–rempah.
                        <br/><br/>
                        Penduduk Ternate semakin heterogen dengan bermukimnya pedagang Arab, Jawa, Melayu dan Tionghoa. Oleh karena aktivitas perdagangan yang semakin ramai ditambah ancaman yang sering datang dari para perompak, atas prakarsa Momole Guna pemimpin Tobona diadakan musyawarah untuk membentuk suatu organisasi yang lebih kuat dan mengangkat seorang pemimpin tunggal sebagai raja.

                    </MidText>
                )
            }
        ]
    },
    {
        name: "Suku Tidore",
        sections: [
            {
                name: "Informasi Umum",
                content: (
                    <MidText>
                        Suku Tidore merupakan salah satu suku bangsa di Provinsi Maluku Utara. Jumlah penduduknya sekitar 53.000 jiwa. Melanesia adalah ras asli dari suku Tidore. Dahulu ketika masa penjajahan Belanda, Tidore masih daerah kesultanan, yang menguasai sebagian besar daerah Maluku Utara.
                        <br/><br/>
                        Suku Tidore mendiami pulau Tidore yang terletak di sebelah selatan Pulau Ternate, atau di sebelah barat Pulau Halmahera. Daerah mereka termasuk dalam wilayah Kabupaten Maluku Utara, Provinsi Maluku Utara.
                    </MidText>
                )
            },
            {
                name: "Sejarah",
                content: (
                    <MidText>
                        Ras asli dari masyarakat suku Tidore merupakan ras Melanesia. Atau biasa disebut dengan ras kulit coklat. Mereka masih berkerabat dengan Fiji, Tonga dan beberapa bangsa kepulauan yang tersebar di Samudera Pasifik.
                        <br/><br/>
                        Namun, ras asli dari masyarakat suku Tidore saat ini lambat laun menjadi masyarakat yang minoritas. Hal itu dikarenakan datangnya kaum pendatang seperti arab, cina, kaukasoid dan ras mongoloid. Mereka berbaur dan membentuk ras campuran.
                    </MidText>
                )
            },
            {
                name: "Kebudayaan",
                content: (
                    <TTIB images={[
                        {
                            src: "/salai-jin.jpg",
                            caption: "Tari Salai Jin."
                        }
                    ]}>
                        Sistem kekerabatan
                        <br/><br/>
                        Sistem kekerabatan pada masyarakat suku Tidore yaitu menarik garis dari keturunan sang ayah yaitu patrilineal. Namun, disamping itu dalam kehidupan sehari-harinya hubungan kekerabatan lebih bersifat bilateral, atau baik dari garis keturunan ayah dan ibu juga.
                    </TTIB>
                )
            }
        ]
    }
];
