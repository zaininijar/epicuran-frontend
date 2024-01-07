
export interface NavItem {
    label: string;
    triggerActive?: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
    isActive?: boolean;
}  

export const NAV_ITEMS: Array<NavItem> = [
{
    label: "Beranda",
    triggerActive: "/beranda",
    href: "/",
},
{
    label: "Tentang Kami",
    triggerActive: "/tentang-kami/",
    children: [
        {
            label: "Sejarah KORMI KALTRA",
            subLabel: "Sejarah Perkembangan KORMI Kaltra",
            href: "/tentang-kami/sejarah",
        },
        {
            label: "Struktur Organisasi",
            subLabel: "Susunan organisasi dan peran anggota ",
            href: "/tentang-kami/struktur-organisasi",
        },
        {
            label: "Program Kerja",
            subLabel: "Rencana kegiatan olahraga dan rekreasi",
            href: "/tentang-kami/program-kerja",
        },
    ],
},
{
    label: "Media Informasi",
    triggerActive: "/media-informasi/",
    children: [
        {
            label: "Artikel & Berita Terbaru",
            href: "/media-informasi/artikel",
        },
        {
            label: "Kalender Event",
            href: "/media-informasi/kalender-event",
        },
        {
            label: "Galeri Foto",
            href: "/media-informasi/galeri-foto",
        },
        {
            label: "Galeri Video",
            href: "/media-informasi/galeri-video",
        },
    ],
},
{
    label: "Induk Olahraga",
    triggerActive: "/induk-olahraga",
    children: [
        {
            label: "Registrasi Inorga",
            href: "/induk-olahraga/registrasi-inorga",
        },
        {
            label: "Data Inorga",
            href: "/induk-olahraga/data-inorga",
        },
        {
            label: "Registrasi Pegiat",
            href: "/induk-olahraga/registrasi-pegiat",
        },
        {
            label: "Data Pegiat",
            href: "/induk-olahraga/data-pegiat",
        },
    ],
},
{
    label: "Unduhan",
    triggerActive: "/unduhan",
    href: "/unduhan",
},
{
    label: "Festival",
    triggerActive: "/festival/",
    children: [
        {
            label: "Forda",
            href: "/festival/forda",
        },
        {
            label: "Fornas",
            href: "/festival/fornas",
        },
    ],
},
];
  