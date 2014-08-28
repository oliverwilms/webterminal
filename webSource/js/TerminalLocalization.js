/**
 * The instance of this object holds language constants for localizing whole terminal application.
 *
 * @param {Terminal} TERMINAL
 * @constructor
 */
var TerminalLocalization = function (TERMINAL) {

    var terminal = this._TERMINAL = TERMINAL;

    /**
     * List of available languages in settings.
     *
     * How to add any other language support:
     * 1. Add localization sign to the list below (it is better to use 2-letter code of country);
     * 2. Fill localization base variable below with new language units according to examples there;
     * 3. Try it!
     *
     * Do not forget to check that all language units are filled. In case of nonexistent language
     * unit you will receive warning text instead of expected phrase.
     */
    this.AVAILABLE_LOCALIZATIONS = {
        "en": "en",
        "ru": "ru"
    };

    /**
     * Indicates the current localization.
     *
     * @type {string}
     * @private
     */
    this._currentLocalization = this.AVAILABLE_LOCALIZATIONS["en"];

    /**
     * This constant includes all terminal localizations. Properties of this object is an ID's by
     * which it is possible to get required localized string with this.get(ID) method.
     *
     * Symbol combinations "%s" or "%n" will be replaced by string or number if arguments to "get"
     * function given.
     *
     * @private
     * @see this.get
     */
    this._LOCALIZATION_BASE = {
        1: {
            en: "Caché WEB Terminal v" + terminal.VERSION + "\r\n\r\n" +
                "\x1B[4mAvailable commands:\x1B[0m\r\n" +
                "\x1B[33m/help\x1B[0m\x1B[32GShow the help information you are reading now.\r\n" +
                "\x1B[33m/autocomplete\x1B[0m [gen]\x1B[32GPerforms autocomplete data loading. The autocomplete" +
                " files will be generated only the first time command execute. If you did some " +
                "changes in your code and want to rebuild autocomplete database, use " +
                "\x1B[1mgen\x1B[0m parameter.\r\n" +
                "\x1B[33m/echo\x1B[0m [param1] [param2] ...\x1B[32GEcho each argument of this command." +
                "\r\n\x1B[33m/trace\x1B[0m [global/filePath]\x1B[32GStart tracing global or file. To stop " +
                "tracing, enter command without arguments. To stop tracing particular file or " +
                "global, enter trace command again.\r\n" +
                "\x1B[33m/sql\x1B[0m\x1B[32GEnter or exit SQL mode.\r\n" +
                "\x1B[33m/reset\x1B[0m\x1B[32GReset terminal application to defaults.\r\n" +
                "{command} \x1B[33m/favorite\x1B[0m {phrase}\x1B[32GSave command for future use.\r\n" +
                "\x1B[33m/favorite\x1B[0m {phrase}\x1B[32GLoad previously saved command.\r\n" +
                "{definition} \x1B[33m/define\x1B[0m {phrase}\x1B[32GReplace each next {phrase} with {definition}. To " +
                "get more information, call command without parameters.\r\n" +
                "\x1B[33m/version\x1B[0m\x1B[32GOutput terminal application version.\r\n" +
                "\x1B[33m/update\x1B[0m\x1B[32GCheck for updates and prompt to update if new version available.\r\n\r\n" +
                "\x1B[4mControl keys:\x1B[0m\r\n" +
                "\x1B[33mTAB\x1B[0m\x1B[32GComplete input if autocomplete variant available.\r\n" +
                "\x1B[33mCTRL\x1B[0m\x1B[32GLeft/right control will switch next/previous available" +
                " autocomplete variant.\r\n",
            ru: "Caché WEB Terminal v" + terminal.VERSION + "\r\n\r\n" +
                "\x1B[4mДоступные комманды:\x1B[0m\r\n" +
                "\x1B[33m/help\x1B[0m\x1B[32GПоказать вспомагательную информацию, которую вы сейчас читаете.\r\n" +
                "\x1B[33m/autocomplete\x1B[0m [gen]\x1B[32GПодгружает данные для автодополнения. Файлы автодополнения" +
                " будут сгенерированы только при первом вызове комманды. Если вы внесли изменения " +
                "в ваш код или хотите перестроить файл автодополнения, используйте параметр " +
                "\x1B[1mgen\x1B[0m.\r\n" +
                "\x1B[33m/echo\x1B[0m [параметр1] [второй] ...\x1B[32GОтображает каждый аргумент комманды." +
                "\r\n\x1B[33m/trace\x1B[0m [глобал/путь]\x1B[32GНаблюдать за изменениями в файле или глобале. Чтобы " +
                "перестать наблюдать за изменениями, введите комманду ещё раз. Комманда без аргументов" +
                "остановит наблюдение за всеми файлами и глобалами.\r\n" +
                "\x1B[33m/sql\x1B[0m\x1B[32GПереключиться или выйти из SQL-режима.\r\n" +
                "\x1B[33m/reset\x1B[0m\x1B[32GВернуть терминал в первоначальное состояние.\r\n" +
                "{комманда} \x1B[33m/favorite\x1B[0m {фраза}\x1B[32GСохранить комманду для дальнейшего использования.\r\n" +
                "\x1B[33m/favorite\x1B[0m {фраза}\x1B[32GВосстановит ранее загруженную комманду.\r\n" +
                "{определение} \x1B[33m/define\x1B[0m {фраза}\x1B[32GЗаменять куждую {фразу} {определением}. Чтобы " +
                "получить больше информации, вызовите комманду без аргументов.\r\n" +
                "\x1B[33m/version\x1B[0m\x1B[32GВывести информацию о версии терминала.\r\n" +
                "\x1B[33m/update\x1B[0m\x1B[32GПроверить наличие обновлений и спросить у пользователя, нужно" +
                "ли выполнить обновление, если доступна новая версия.\r\n\r\n" +
                "\x1B[4mУправляющие клавиши:\x1B[0m\r\n" +
                "\x1B[33mTAB\x1B[0m\x1B[32GЗавершить ввод, если доступен вариант автодополнения.\r\n" +
                "\x1B[33mCTRL\x1B[0m\x1B[32GЛевый/правый CTRL перейдёт к следующему/предыдущему" +
                " доступному варианту автодополнения.\r\n"
        },
        2: {
            en: "Connection to Caché Server established.",
            ru: "Соединение с сервером Caché установлено."
        },
        3: {
            en: "Unable to send data to server.",
            ru: "Невозможно отправить данные на сервер."
        },
        4: {
            en: "WebSocket connection closed. Code %n, reason: %s.",
            ru: "Соединение WebSocket закрыто. Код %n, причина: %s."
        },
        5: {
            en: "Unable to trace %s.",
            ru: "Невозможно наблюдать за %s."
        },
        6: {
            en: "WebSocket connection error (%s). Trying to connect again in %n seconds...",
            ru: "Ошибка подключения WebSocket (%s). Повторная попытка подключения через %n " +
                "секунд..."
        },
        7: {
            en: "Start tracing %s.",
            ru: "Наблюдение за %s начато."
        },
        8: {
            en: "Stop tracing %s.",
            ru: "Наблюдение за %s закончено."
        },
        9: {
            en: "Refresh page to apply reset.",
            ru: "Обновите страницу чтобы применить сброс."
        },
        10: {
            en: "Authorization successful.",
            ru: "Авторизация прошла успешно."
        },
        11: {
            en: "Usage:\r\n{your command} \x1B[1m/favorite\x1B[0m {name}" +
                "\x1B[35GTo save command.\r\n\x1B[1m/favorite\x1B[0m {name} \x1B[35GTo load " +
                "command.\r\nPreviously saved names: %s.",
            ru: "Употребление:\r\n{комманда} \x1B[1m/favorite\x1B[0m {имя}" +
                "\x1B[35GДля сохранения комманды.\r\n\x1B[1m/favorite\x1B[0m {имя} \x1B[35GДля загрузки " +
                "комманды.\r\nРанее сохранены комманды под именами: %s."
        },
        12: {
            en: "No command saved for \"%s\".\r\nPreviously saved: %s.",
            ru: "Комманда с именем \"%s\" не сохранена.\r\nРанее сохранённые: %s."
        },
        13: {
            en: "%s\x1B[1m defined as \x1B[0m%s",
            ru: "%s\x1B[1m определено как \x1B[0m%s"
        },
        14: {
            en: "Definitions removed.",
            ru: "Определения удалены."
        },
        15: {
            en: "\x1B[4mUsage:\x1B[0m\r\n\x1B[1m/define\x1B[0m {everything}" +
                " {phrase}\x1B[35GTo define {phrase} as {everything}.\r\n\x1B[1m/define\x1B[0m " +
                "clear\x1B[35GClears all definitions.\r\n\x1B[4mExample:\x1B[0m "
                + "\x1B[2m##class(%Library.File).Exists( \x1B[0m\x1B[1m/define\x1B[0m \x1B[2m?f(\x1B[0m \r\n" +
                "This will set shorten expression for checking if file exists. Then, " +
                "commands like \x1B[2mw ?f(\"C:\")\x1B[0m will be automatically replaced with " +
                "\x1B[2mw ##class(%Library.File).Exists(\"C:\")\x1B[0m when submitting. " +
                "To clear definitions, give \"clear\" parameter.\r\n\x1B[4mList of definitions:\x1B[0m %s.",
            ru: "\x1B[4mИспользование:\x1B[0m\r\n\x1B[1m/define\x1B[0m {выражение}" +
                " {определение}\x1B[35GКаждое вхождение {определения} в строку ввода будет заменено " +
                "на соответствующее {выражение}.\r\n\x1B[1m/define\x1B[0m " +
                "clear\x1B[35GУдалит все ранее добавленные определения.\r\n\x1B[4mПример:\x1B[0m "
                + "\x1B[2m##class(%Library.File).Exists( \x1B[0m\x1B[1m/define\x1B[0m \x1B[2m?f(\x1B[0m \r\n" +
                "Это установит сокращённое выражение для проверки существования файла. После, " +
                "комманды вида \x1B[2mw ?f(\"C:\")\x1B[0m будут автоматически преобразованы в " +
                "\x1B[2mw ##class(%Library.File).Exists(\"C:\")\x1B[0m при отправке. " +
                "Чтобы удалить определения, передайте параметр \"clear\".\r\n\x1B[4m" +
                "Список определений:\x1B[0m %s."
        },
        16: {
            en: "Caché WEB Terminal v%s\r\nChecking for updates...",
            ru: "Caché WEB Terminal v%s\r\nПроверка обновлений..."
        },
        17: {
            en: "Unknown internal command \"%s\".",
            ru: "Неизвестная внутренняя комманда \"%s\"."
        },
        18: {
            en: "Merging autocomplete database for %s...",
            ru: "Объединение базы данных автодополнения для %s..."
        },
        19: {
            en: "Classes merged: %n",
            ru: "Классов объединено: %n"
        },
        20: {
            en: "Globals merged: %n",
            ru: "Глобалов объединено: %n"
        },
        21: {
            en: "No autocomplete file found on server. Requesting...",
            ru: "Файл автодополнения на сервере не найден. Запрос файла..."
        },
        22: {
            en: "Authorization failed.",
            ru: "Авторизация не удалась."
        },
        23: {
            en: "A new version of Caché WEB Terminal available. Would you" +
                "like to install it? (Make sure that user has write permission to CACHELIB " +
                "database) (Y/N)",
            ru: "Новая версия Caché WEB Terminal доступна. Хотите ли вы" +
                "установить её? (Убедитесь, что пользователь имеет права на запись в базу " +
                "данных CACHELIB) (Y/N)"
        },
        24: {
            en: "Updating...",
            ru: "Обновление..."
        },
        25: {
            en: "Caché WEB Terminal is up-to-date.",
            ru: "На данный момент установлена последняя версия Caché WEB Terminal."
        },
        26: {
            en: "\x1B[4mCurrent settings:\x1B[0m\r\n%s = %s" +
                "\r\nTo change values, enter command with argument \x1B[3m{NAME}={VALUE}\x1B[0m.",
            ru: "\x1B[4mТекущее настройки:\x1B[0m\r\n%s = %s" +
                "\r\nЧтобы изменить значения, введите комманду с аргументом \x1B[3m{ИМЯ}={ЗНАЧЕНИЕ}\x1B[0m."
        },
        27: {
            en: "Terminal locale changed to %s.",
            ru: "Язык терминала изменён на %s."
        },
        28: {
            en: "Unable to change locale to %s.",
            ru: "Невозможно изменить язык на %s."
        }
    };

    this.initialize();

};

TerminalLocalization.prototype.STORAGE_NAME = "localization";

TerminalLocalization.prototype.initialize = function () {

    var lang = this._TERMINAL.storage.get(this.STORAGE_NAME);

    if (!lang || !this.AVAILABLE_LOCALIZATIONS.hasOwnProperty(lang)) {
        lang = navigator.language;
        if (!this.AVAILABLE_LOCALIZATIONS.hasOwnProperty(lang)) {
            lang = "en";
        }
    }

    this.setLocale(lang);

};

/**
 * Parses localized string and replace given arguments there.
 *
 * @param {...*} ID - ID and other parameters.
 * @returns {string}
 */
TerminalLocalization.prototype.get = function (ID) {

    var i = 0,
        keys = arguments;

    return (
        (this._LOCALIZATION_BASE[ID])
            ? this._LOCALIZATION_BASE[ID][this._currentLocalization]
            || "[no available localization of [" + ID + "] for \"" +
            this._currentLocalization + "\"]"
            : "[translation [" + ID + "] not found]"
        ).replace(/%[sn]/g, function (part) {
        return typeof keys[++i] !== "undefined"
            ? ( part.charAt(1) === "s" ? keys[i].toString() : parseFloat(keys[i]) + "" )
            : part;
    });

};

/**
 * Changes the localization.
 *
 * @param {string} localizationCode - Two-letter country code.
 * @returns {boolean} - Success of set operation.
 */
TerminalLocalization.prototype.setLocale = function (localizationCode) {

    if (this.AVAILABLE_LOCALIZATIONS.hasOwnProperty(localizationCode)) {
        this._currentLocalization = localizationCode;
        this._TERMINAL.storage.set(this.STORAGE_NAME, localizationCode);
        return true;
    } else {
        console.error("No available translations for \"" + localizationCode + "\". Please, " +
            "check available languages at CacheDictionary file.");
        return false;
    }

};

/**
 * @returns {string}
 */
TerminalLocalization.prototype.getLocale = function () {

    return this._currentLocalization;

};