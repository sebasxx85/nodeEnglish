export const users = [
    { "name": "Alice Johnson", "score": 270030, "language": "English", "avatar": "https://robohash.org/alice.png", "password": "alice123" },
    { "name": "MarcoRossi", "score": 464594, "language": "Italian", "avatar": "https://robohash.org/marco.png", "password": "marco456" },
    { "name": "PedroOliveira", "score": 745966, "language": "Portuguese", "avatar": "https://robohash.org/pedro.png", "password": "pedro789" },
    { "name": "SophiaCarter", "score": 344567, "language": "English", "avatar": "https://robohash.org/sophia.png", "password": "sophia234" },
    { "name": "GiovanniBianchi", "score": 455867, "language": "Italian", "avatar": "https://robohash.org/giovanni.png", "password": "giovanni567" },
    { "name": "Lucas_Silva", "score": 606010, "language": "Portuguese", "avatar": "https://robohash.org/lucas.png", "password": "lucas890" },
    { "name": "EmilyClark", "score": 130647, "language": "English", "avatar": "https://robohash.org/emily.png", "password": "emily345" },
    { "name": "AntonioLuca", "score": 1213337, "language": "Italian", "avatar": "https://robohash.org/antonio.png", "password": "antonio678" },
    { "name": "FernandaSouza", "score": 850765, "language": "Portuguese", "avatar": "https://robohash.org/fernanda.png", "password": "fernanda901" },
    { "name": "JohnDoe", "score": 1010765, "language": "English", "avatar": "https://robohash.org/john.png", "password": "john123" },
    { "name": "MatteoRicci", "score": 786900, "language": "Italian", "avatar": "https://robohash.org/matteo.png", "password": "matteo234" },
    { "name": "CamilaPereira", "score": 580989, "language": "Portuguese", "avatar": "https://robohash.org/camila.png", "password": "camila567" },
    { "name": "seba85", "score": 320245, "language": "English", "avatar": "https://robohash.org/seba.png", "password": "seba890" },
    { "name": "lina_queen", "score": 150976, "language": "Italian", "avatar": "https://robohash.org/lina.png", "password": "lina345" },
    { "name": "diego2010", "score": 304884, "language": "Portuguese", "avatar": "https://robohash.org/diego.png", "password": "diego678" },
    { "name": "use43", "score": 406787, "language": "English", "avatar": "https://robohash.org/use43.png", "password": "use901" },
    { "name": "karolPrincess", "score": 906775, "language": "Italian", "avatar": "https://robohash.org/karol.png", "password": "karol123" },
    { "name": "xXShadowXx", "score": 776789, "language": "Portuguese", "avatar": "https://robohash.org/shadow.png", "password": "shadow234" },
    { "name": "sandy_moon", "score": 675890, "language": "English", "avatar": "https://robohash.org/sandy.png", "password": "sandy567" },
    { "name": "fastFury", "score": 650897, "language": "Italian", "avatar": "https://robohash.org/fastfury.png", "password": "fast678" },
    { "name": "felipeGaming", "score": 500765, "language": "Portuguese", "avatar": "https://robohash.org/felipe.png", "password": "felipe901" },
    { "name": "lucyBright", "score": 728901, "language": "English", "avatar": "https://robohash.org/lucy.png", "password": "lucy123" },
    { "name": "ZeroCool99", "score": 2134555, "language": "English", "avatar": "https://robohash.org/zerocool.png", "password": "zero234" },
    { "name": "playerOne", "score": 976909, "language": "Portuguese", "avatar": "https://robohash.org/playerone.png", "password": "player567" },
    { "name": "xandra99", "score": 345709, "language": "English", "avatar": "https://robohash.org/xandra.png", "password": "xandra678" },
    { "name": "speedySam", "score": 1567888, "language": "English", "avatar": "https://robohash.org/speedysam.png", "password": "speedy901" },
    { "name": "shadowNinja", "score": 840912, "language": "Portuguese", "avatar": "https://robohash.org/shadowninja.png", "password": "ninja123" },
    { "name": "darkSoul", "score": 956075, "language": "English", "avatar": "https://robohash.org/darksoul.png", "password": "dark234" },
    { "name": "coolCat", "score": 238909, "language": "Italian", "avatar": "https://robohash.org/coolcat.png", "password": "cool567" },
    { "name": "blazeX", "score": 606789, "language": "Portuguese", "avatar": "https://robohash.org/blazex.png", "password": "blaze678" }
];

export const getUsers = () => users.map(({ password, ...user }) => user);
export const findUser = (name) => users.find(u => u.name === name);
export const addUser = (user, email, password) => {
    if (findUser(user)) return null;
    const newUser = { name: user, email, password, avatar: `https://robohash.org/${user}.png`, score: 0, language: 'English' };
    users.push(newUser);
    return newUser;
};
