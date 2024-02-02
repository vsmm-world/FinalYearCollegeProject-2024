const express = require("express");
const ConnectDB = require("./db/connection");
const app = express();
const expressSession = require('express-session');
const passport = require("passport");
const port = process.env.port || 5000;
const register = require('./auth/auth');
const { PassInit, isAuthenticted } = require('./auth/passportConf');
const fs = require('fs');
const path = require('path');
const { upload } = require('./middleware/imageHandler');
const File = require('./models/file');
require('dotenv').config();
const Langauage = require('./models/Langauage');
const bodyParser = require('body-parser');

const VideoContent = require('./models/videoContent');
const TextContent = require('./models/textContent');
const DocContent = require('./models/docContent');

PassInit(passport);

// Middlwere Usages 
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(expressSession({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set('views', __dirname + '/views');

//Server Initial Setup 
ConnectDB();
app.listen(port, () => {
    console.log(`website is runnig at : http://localhost:${port}`);
});

// Get Request Handeling 
app.get("/", (req, res) => {
    res.render("main");
});

app.get("/index", (req, res) => {
    res.status(200).render("index");
});
app.get("/register", (req, res) => {
    res.status(200).render("register");
});
app.get("/login", (req, res) => {
    res.status(200).render("login");
});
app.get("/about", (req, res) => {
    res.status(200).render("about");
})
app.get("/admin", (req, res) => {
    res.status(200).render("admin");
})
app.get("/contact", (req, res) => {
    res.status(200).render("contact");
})
app.get('/secret', isAuthenticted, (req, res) => {
    res.render('secret');
})
app.get('/logout', (req, res) => {
    req.logout(() => {
        res.redirect('/');
    });
});

app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/contact', (req, res) => {
    res.render('about')
})

app.get('/language', (req, res) => {
    res.status(200).render('language');
})
app.get('/photos', async (req, res) => {
    const imgs = await File.find({}).then((data, err) => {
        if (err) {
            console.log(err);
        }
        res.status(200).render('photos', { imgs: data })
    })
})



app.get('/get-img', async (req, res) => {
    const imgs = await File.find({}).then((data, err) => {
        if (err) {
            console.log(err);
        }
        res.status(200).send(data);
    })
})

// Post Requests Handeling

app.post('/data/img', upload.single('avatar'), async (req, res) => {
    const obj = {
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    await File.create(obj).then((data) => {
        res.status(200).json(data);
    }
    ).catch((err) => {
        res.status(400).json({ message: "Error" });
    }
    )
});
app.post('/api/register', register);
app.post('/api/login', passport.authenticate('local'), (req, res) => {
    res.status(200).json({ message: "Succsess" });
});




//Admin Panel API


app.get('/admin', (req, res) => {
    res.render('admin');
})



app.get('/admin/panel/users/get', async (req, res) => {
    const users = await User.find({}).then((data, err) => {
        if (err) {
            console.log(err);
        }
        res.status(200).send(data);
    })
})


app.get('/admin/panel/users/delete/:id', async (req, res) => {
    const id = req.params.id;
    await User.findByIdAndDelete(id).then((data, err) => {
        if (err) {
            console.log(err);
        }
        res.status(200).send(data);
    })
})

app.get('/admin/panel/users/update/:id', async (req, res) => {

    const id = req.params.id;
    const user = await User.findById(id).then((data, err) => {
        if (err) {
            console.log(err);
        }
        res.status(200).send(data);
    })
})

app.get('/admin/langauage/get', async (req, res) => {
    const lang = await Langauage.find({}).then((data, err) => {
        if (err) {
            console.log(err);
        }
        res.status(200).json(data);
    })
})

app.post('/admin/langauage/get/all', async (req, res) => {
    const id = req.body.id;
    const VideoC = await VideoContent.find({ language: id })
    const TextC = await TextContent.find({ language: id })
    const DocC = await DocContent.find({ language: id })
    const data = {
        VideoC, TextC, DocC
    }

    res.status(200).send(data)

})
app.get('/admin/langauage/get/:id', async (req, res) => {
    const id = req.params.id;
    const lang = {
        1: {
            name: "C++",
            description: "C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or C with Classes.",
            img: "https://www.pngitem.com/pimgs/m/198-1985019_c-programming-language-logo-hd-png-download.png"
        },
        2: {
            name: "Python",
            description: "Python is an interpreted high-level general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation.",
            img: "https://www.pngitem.com/pimgs/m/198-1985019_c-programming-language-logo-hd-png-download.png"
        },
        3: {
            name: "Java",
            description: "Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
            img: "https://www.pngitem.com/pimgs/m/198-1985019_c-programming-language-logo-hd-png-download.png"
        },
        4: {
            name: "JavaScript",
            description: "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.",
            img: "https://www.pngitem.com/pimgs/m/198-1985019_c-programming-language-logo-hd-png-download.png"
        },
        5: {
            name: "C#",
            description: "C# is a general-purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.",
            img: "https://www.pngitem.com/pimgs/m/198-1985019_c-programming-language-logo-hd-png-download.png"
        },
        6: {
            name: "PHP",
            description: "PHP is a general-purpose scripting language especially suited to web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994.",
            img: "https://www.pngitem.com/pimgs/m/198-1985019_c-programming-language-logo-hd-png-download.png"
        },
        7: {
            name: "Swift",
            description: "Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. and the open-source community, first released in 2014.",
            img: "https://www.pngitem.com/pimgs/m/198-1985019_c-programming-language-logo-hd-png-download.png"
        },
        8: {
            name: "R",
            description: "R is a programming language and free software environment for statistical computing and graphics supported by the R Foundation for Statistical Computing.",
            img: "https://www.pngitem.com/pimgs/m/198-1985019_c-programming-language-logo-hd-png-download.png"
        },
        9: {
            name: "Go",
            description: "Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson.",
            img: "https://www.pngitem.com/pimgs/m/198-1985019_c-programming-language-logo-hd-png-download.png"
        }
    }

    console.log(lang[id]);
    res.status(200).render('language', { lang: lang[id] });
})
