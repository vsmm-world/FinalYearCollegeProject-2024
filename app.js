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
        res.status(200).send(data);
    })
})
app.get('/admin/langauage/get/:id', async (req, res) => {
    const id = req.params.id;

    const lang = await Langauage.findById(id).then((data, err) => {
        if (err) {
            console.log(err);
        }
        res.status(200).send(data);
    })
})

app.post('/admin/langauage/update', async (req, res) => {

    const { id, NewVideoEmbed, NewLanguageText, NewLanguageName, NewLangauageDoc } = req.body;
    const _id = id;
    await Langauage.findByIdAndUpdate(_id, { VideoEmbed: NewVideoEmbed, LanguageText: NewLanguageText, LanguageName: NewLanguageName, LangauageDoc: NewLangauageDoc }).then((data, err) => {
        if (err) {
            console.log(err);
        }
        res.status(200).redirect('/admin');
    })


})

app.post('/admin/langauage/delete', async (req, res) => {
    const { id } = req.body.id;
    const _id = id;
    await Langauage.deleteOne(_id).then((data, err) => {
        if (err) {
            console.log(err);
        }
        res.status(200).redirect('/admin');
    })
})


app.post('/admin/langauage/create', async (req, res) => {

    const { LanguageName, VideoEmbed, LanguageText, LangauageDoc } = req.body;
    if (!LanguageName || !VideoEmbed || !LanguageText || !LangauageDoc) {
        return res.status(400).json({ message: "Please fill all the fields" });
    }

    const lang = await Langauage.create(req.body).then((data, err) => {
        if (err) {
            console.log(err);
        }
        res.status(200).redirect('/admin');

    })

})