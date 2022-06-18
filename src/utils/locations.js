const locations = [
  {
    id: 1,
    name: "Больница",
    img: "https://avatars.mds.yandex.net/i?id=a03010a96101f9d66f3696090e8ca2a1-5858835-images-thumbs&n=13&exp=1",
  },
  {
    id: 2,
    name: "Завод",
    img: "https://avatars.mds.yandex.net/i?id=fadee1456f428497d015625827a8a138-4453150-images-thumbs&n=13&exp=1",
  },
  {
    id: 3,
    name: "Пляж",
    img: "https://yandex-images.clstorage.net/9IPR93h31/e23dd0AkMye/cP-8m9taVrDhtnnRUU11YAM5sms-j_I3aHalLGd4ZaX4pVWN1UHr1zzMZCna2z-gG3L1uQ7XeVqCFjpPRtVZD-avL50cyZQwoba6kxePNKLBOnBqO44yoX2wc2-3emR16KdUQlrd9kvyU6j30pEgZtok4GwchaiKmNj5GF9Php_ytj5a2sRZfa-le5OZT7KnlXj4rCzAbrHi4zZhvunscah8ioHR0_0JcVDmuVrb5inb6-qjUhcgxNKeal6RQsaXOnl229_D3z9h5XXS1E60Zxy_d2ghDix7a2D1rvhm7DGkdQoEGB77QnecKD-SHmqrGO6rI1tWrE7cGuVWHk0A0HM4vppTAhky5Oh0nxjNMSBdPrctqMbpeGsn8mx1Lub7b3OMjpeVPAU80qm2EhFmJFRm6eCXl-YEVJKgkJHGDlE2sHYe24uc_GWjddFXyb-sVXp5q6WFZ7ZoanavOOjjvydzQkgdkDIJfVIvOR0SIOvW5yutmZ8khpmdYtEZiIDbvrMwmdIBXXWvILvalom1Itsx8qshCe456uox7frmJbHq-8IAVx08SjydqfiVVuFilqRrJxgSZMRVU6FQmoaNVrz8-J6UiJzxqWv3UBmB8qNaeLZsJYQgv2WhOa-47-c2Zr5DAxHYc4f7Guw0GVCp4BLj6iAWnG0B35VkUJMLjpZ5-zrRU0EXPaap8l1ZBbXu2zy2ZyxLLjwhoXNmPydruC6zSsyYUXqD9dZg-J1fYmqYKmol1lZiT5IRKBgdy8rfuzA11NwJkPtn67RQGM62bJw8PShmBC_2ZST1rrstLnCkNUSN3JVyxT3RqTaW3iapmWph5F4QJYpTXaJf24WHWzux_VQSDJl9bKv12VHGtWXTP7OmrARmt2Rr_WA1aaY3ZbnIxhcYOk_4mio-Edvpah-mLKXcHu2NntwkX18Pj1JzMzYbXc-WMmPge1AXQbIv0b8_7ezOK3yrpXKkeo",
  },
  {
    id: 4,
    name: "Кафе",
    img: "https://avatars.mds.yandex.net/i?id=2a00000179fd41a32c98fca6d71ca4384c69-4217254-images-thumbs&n=13&exp=1",
  },
  {
    id: 5,
    name: "Кинотеатр",
    img: "https://avatars.mds.yandex.net/i?id=cecfe262038295b2170e49a29a77c774-5222088-images-thumbs&n=13&exp=1",
  },
  {
    id: 6,
    name: "Школа",
    img: "https://avatars.mds.yandex.net/i?id=5482721d3c34f1087126403bc38e6ba3-5189886-images-thumbs&n=13&exp=1",
  },
  {
    id: 7,
    name: "Кофейня",
    img: "https://avatars.mds.yandex.net/i?id=658ec3fd2d280727643a18305739c00b-4012443-images-thumbs&n=13&exp=1",
  },
  {
    id: 8,
    name: "Студия",
    img: "https://yandex-images.clstorage.net/9IPR93h31/e23dd0AkMye/cP-8m9taVrDhtnnRUU11YAM5sms-j_I3aHam-eU6peY4MZWYgEF-1_zNJD0PjX_gW-Z1Ow7XelrWgXpPBtYZjiWvb50cyZQwoba6kxePNKLBOnBqO44yoX2wc2-3emR16KdUQlrd9kvyU6j30pEgZtok4GwchaiKmNj5GF9Php_ytj5a2sRZfa-le5OZT7KnlXj4rCzAbrHi4zZhvunscah8ioHR0_0JcVDmuVrb5inb6-qjUhcgxNKeal6RQsaXOnl229_D3z9h5XXS1E60Zxy_d2ghDix7a2D1rvhm7DGkdQoEGB77QnecKD-SHmqrGO6rI1tWrE7cGuVWHk0A0HM4vppTAhky5Oh0nxjNMSBdPrctqMbpeGsn8mx1Lub7b3OMjpeVPAU80qm2EhFmJFRm6eCXl-YEVJKgkJHGDlE2sHYe24uc_GWjddFXyb-sVXp5q6WFZ7ZoanavOOjjvydzQkgdkDIJfVIvOR0SIOvW5yutmZ8khpmdYtEZiIDbvrMwmdIBXXWvILvalom1Itsx8qshCe456uox7frmJbHq-8IAVx08SjydqfiVVuFilqRrJxgSZMRVU6FQmoaNVrz8-J6UiJzxqWv3UBmB8qNaeLZsJYQgv2WhOa-47-c2Zr5DAxHYc4f7Guw0GVCp4BLj6iAWnG0B35VkUJMLjpZ5-zrRU0EXPaap8l1ZBbXu2zy2ZyxLLjwhoXNmPydruC6zSsyYUXqD9dZg-J1fYmqYKmol1lZiT5IRKBgdy8rfuzA11NwJkPtn67RQGM62bJw8PShmBC_2ZST1rrstLnCkNUSN3JVyxT3RqTaW3iapmWph5F4QJYpTXaJf24WHWzux_VQSDJl9bKv12VHGtWXTP7OmrARmt2Rr_WA1aaY3ZbnIxhcYOk_4mio-Edvpah-mLKXcHu2NntwkX18Pj1JzMzYbXc-WMmPge1AXQbIv0b8_7ezOK3yrpXKkeo",
  },
  {
    id: 9,
    name: "Полиция",
    img: "https://avatars.mds.yandex.net/i?id=982c6e522a0328fb99f713cef7d27528-5265887-images-thumbs&n=13&exp=1",
  },
  {
    id: 10,
    name: "Дом",
    img: "https://avatars.mds.yandex.net/i?id=eb0d7d1e436c66e293aa05c323871d47-5433116-images-thumbs&n=13&exp=1",
  },
];

export { locations };
