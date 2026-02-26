import bcrypt from 'bcrypt';

export const users = [
  { name: "Alice Johnson", score: 270030, language: "English", avatar: "https://robohash.org/alice.png", password: bcrypt.hashSync("alice123", 10) },
  { name: "MarcoRossi", score: 464594, language: "Italian", avatar: "https://robohash.org/marco.png", password: bcrypt.hashSync("marco456", 10) },
  { name: "PedroOliveira", score: 745966, language: "Portuguese", avatar: "https://robohash.org/pedro.png", password: bcrypt.hashSync("pedro789", 10) },
  { name: "SophiaCarter", score: 344567, language: "English", avatar: "https://robohash.org/sophia.png", password: bcrypt.hashSync("sophia234", 10) },
  { name: "GiovanniBianchi", score: 455867, language: "Italian", avatar: "https://robohash.org/giovanni.png", password: bcrypt.hashSync("giovanni567", 10) },
  { name: "Lucas_Silva", score: 606010, language: "Portuguese", avatar: "https://robohash.org/lucas.png", password: bcrypt.hashSync("lucas890", 10) },
  { name: "EmilyClark", score: 130647, language: "English", avatar: "https://robohash.org/emily.png", password: bcrypt.hashSync("emily345", 10) },
  { name: "AntonioLuca", score: 1213337, language: "Italian", avatar: "https://robohash.org/antonio.png", password: bcrypt.hashSync("antonio678", 10) },
  { name: "FernandaSouza", score: 850765, language: "Portuguese", avatar: "https://robohash.org/fernanda.png", password: bcrypt.hashSync("fernanda901", 10) },
  { name: "JohnDoe", score: 1010765, language: "English", avatar: "https://robohash.org/john.png", password: bcrypt.hashSync("john123", 10) },
  { name: "MatteoRicci", score: 786900, language: "Italian", avatar: "https://robohash.org/matteo.png", password: bcrypt.hashSync("matteo234", 10) },
  { name: "CamilaPereira", score: 580989, language: "Portuguese", avatar: "https://robohash.org/camila.png", password: bcrypt.hashSync("camila567", 10) },
  { name: "seba85", score: 320245, language: "English", avatar: "https://robohash.org/seba.png", password: bcrypt.hashSync("seba890", 10) },
  { name: "lina_queen", score: 150976, language: "Italian", avatar: "https://robohash.org/lina.png", password: bcrypt.hashSync("lina345", 10) },
  { name: "diego2010", score: 304884, language: "Portuguese", avatar: "https://robohash.org/diego.png", password: bcrypt.hashSync("diego678", 10) },
  { name: "use43", score: 406787, language: "English", avatar: "https://robohash.org/use43.png", password: bcrypt.hashSync("use901", 10) },
  { name: "karolPrincess", score: 906775, language: "Italian", avatar: "https://robohash.org/karol.png", password: bcrypt.hashSync("karol123", 10) },
  { name: "xXShadowXx", score: 776789, language: "Portuguese", avatar: "https://robohash.org/shadow.png", password: bcrypt.hashSync("shadow234", 10) },
  { name: "sandy_moon", score: 675890, language: "English", avatar: "https://robohash.org/sandy.png", password: bcrypt.hashSync("sandy567", 10) },
  { name: "fastFury", score: 650897, language: "Italian", avatar: "https://robohash.org/fastfury.png", password: bcrypt.hashSync("fast678", 10) },
  { name: "felipeGaming", score: 500765, language: "Portuguese", avatar: "https://robohash.org/felipe.png", password: bcrypt.hashSync("felipe901", 10) },
  { name: "lucyBright", score: 728901, language: "English", avatar: "https://robohash.org/lucy.png", password: bcrypt.hashSync("lucy123", 10) },
  { name: "ZeroCool99", score: 2134555, language: "English", avatar: "https://robohash.org/zerocool.png", password: bcrypt.hashSync("zero234", 10) },
  { name: "playerOne", score: 976909, language: "Portuguese", avatar: "https://robohash.org/playerone.png", password: bcrypt.hashSync("player567", 10) },
  { name: "xandra99", score: 345709, language: "English", avatar: "https://robohash.org/xandra.png", password: bcrypt.hashSync("xandra678", 10) },
  { name: "speedySam", score: 1567888, language: "English", avatar: "https://robohash.org/speedysam.png", password: bcrypt.hashSync("speedy901", 10) },
  { name: "shadowNinja", score: 840912, language: "Portuguese", avatar: "https://robohash.org/shadowninja.png", password: bcrypt.hashSync("ninja123", 10) },
  { name: "darkSoul", score: 956075, language: "English", avatar: "https://robohash.org/darksoul.png", password: bcrypt.hashSync("dark234", 10) },
  { name: "coolCat", score: 238909, language: "Italian", avatar: "https://robohash.org/coolcat.png", password: bcrypt.hashSync("cool567", 10) },
  { name: "blazeX", score: 606789, language: "Portuguese", avatar: "https://robohash.org/blazex.png", password: bcrypt.hashSync("blaze678", 10) },
];

export const getUsers = () => users.map(({ password, ...user }) => user);
export const findUser = (name) => users.find(u => u.name === name);
export const addUser = (user, email, password) => {
    if (findUser(user)) return null;

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = {
        name: user,
        email,
        password: hashedPassword,
        avatar: `https://robohash.org/${user}.png`,
        score: 0,
        language: 'English'
    };

    users.push(newUser);
    return { ...newUser, password: undefined };
};
