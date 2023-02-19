const month = Math.floor(Math.random() * 3);

const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Медведев",
            "id_2": "Ершов",
            "id_3": "Исаев",
            "id_4": "Дьячков",
            "id_5": "Брагин",
            "id_6": "Вишняков",
            "id_7": "Сазонов",
            "id_8": "Одинцов",
            "id_9": "Крылов",
            "id_10": "Третьяков",
            "id_11": "Мухин",
            "id_12": "Лапин",
            "id_13": "Кулагин",
            "id_14": "Зимин",
            "id_15": "Котов",
            "id_16": "Орехов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Ольга",
            "id_2": "Елена",
            "id_3": "Светлана",
            "id_4": "Анна",
            "id_5": "Екатерина",
            "id_6": "Инна",
            "id_7": "Татьяна",
            "id_8": "Анастасия",
            "id_9": "Оксана",
            "id_10": "Галина"
        }
    }`,
    patronymicJson: `{
        "count": 10,
        "list": {     
            "id_1": "Сидоров",
            "id_2": "Григорьев",
            "id_3": "Алексеев",
            "id_4": "Николаев",
            "id_5": "Сергеев",
            "id_6": "Александров",
            "id_7": "Олегов",
            "id_8": "Игорев",
            "id_9": "Дмитриев",
            "id_10": "Абрамов"
        }
    }`,
    professionMaleJson: `{
        "count": 5,
        "list": {
            "id_1": "слесарь",
            "id_2": "сантехник",
            "id_3": "машинист",
            "id_4": "пожарный",
            "id_5": "полицейский"
        }
    }`,
    professionFemaleJson: `{
        "count": 5,
        "list": {
            "id_1": "учительница",
            "id_2": "медсестра",
            "id_3": "швея",
            "id_4": "психотерапевт",
            "id_5": "лингвист"
        }
    }`,

    GENDER_MALE: 'Мужчина, ',
    GENDER_FEMALE: 'Женщина, ',

    randomGender: function() {
        return Math.floor(Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },


    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomSurname: function() {
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + "a";
        }
    },

    randomPatronymic: function() {
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.patronymicJson) + "ич";
        } else {
            return this.randomValue(this.patronymicJson) + "на";
        }
    },

    

    randomMonth1: function randomMonth() {
        let birthmonths = ["января", "марта", "мая", "июля", "августа", "октября", "декабря"];
        let birthmonth = birthmonths[Math.floor(Math.random() * 7)];
        return birthmonth;
    },

    randomMonth2: function randomMonth() {
        let birthmonths = ["апреля", "июня", "сентября", "ноября"];
        let birthmonth = birthmonths[Math.floor(Math.random() * 4)];
        return birthmonth;
    },
    randomFebruary: function randomMonth() {
        let birthmonth = "февраля";
        return birthmonth;
    },

    randomYear: function() { 
        return this.randomIntNumber(1970, 2000);
    },

    randomРrofession: function() { 
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        if (month === 0) {
            this.person.month = this.randomMonth1();
            this.person.day = this.randomIntNumber(1, 31); 
        } else if (month === 1) {
            this.person.month = this.randomMonth2();
            this.person.day = this.randomIntNumber(1, 30); 
        } else if (month === 2) {
            this.person.month = this.randomFebruary();
            this.person.day = this.randomIntNumber(1, 28); 
        }
        this.person.year = this.randomYear(1970, 2000);
        this.person.profession = this.randomРrofession();
        return this.person;
    }
};