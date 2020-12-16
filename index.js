const responses = require('./files/responses');

module.exports = {
    loveCount: (name1, name2, love, err) => {
        if (!name1 || !name2) {
            return err("Give both name");
        }
        if (name1.toLowerCase() === name2.toLowerCase()) {
            return err("The both name are same.");
        }

        Fname = name1
        FnameLength = Fname.length;

        Sname = name2
        SnameLength = Sname.length;

        var lovecount = 0;
        for (var i = 0; i < FnameLength; i++) {
            var L1 = Fname.substring(i, i + 1);
            if (L1 == 'A') lovecount += 3;
            if (L1 == 'E') lovecount += 3;
            if (L1 == 'I') lovecount += 3;
            if (L1 == 'O') lovecount += 3;
            if (L1 == 'U') lovecount += 4;
            if (L1 == 'L') lovecount += 1;
            if (L1 == 'V') lovecount += 4;
        }

        for (var count = 0; count < SnameLength; count++) {
            var L2 = Sname.substring(count, count + 1);
            if (L2 == 'A') lovecount += 3;
            if (L2 == 'E') lovecount += 3;
            if (L2 == 'I') lovecount += 3;
            if (L2 == 'L') lovecount += 3;
            if (L2 == 'O') lovecount += 4;
            if (L2 == 'V') lovecount += 1;
            if (L2 == 'E') lovecount += 4;
        }
        var Total = 0;
        if (lovecount > 0) Total = 5 - ((FnameLength + SnameLength) / 2)
        if (lovecount > 2) Total = 10 - ((FnameLength + SnameLength) / 2)
        if (lovecount > 4) Total = 20 - ((FnameLength + SnameLength) / 2)
        if (lovecount > 6) Total = 30 - ((FnameLength + SnameLength) / 2)
        if (lovecount > 8) Total = 40 - ((FnameLength + SnameLength) / 2)

        if (lovecount > 10) Total = 50 - ((FnameLength + SnameLength) / 2)

        if (lovecount > 12) Total = 60 - ((FnameLength + SnameLength) / 2)
        if (lovecount > 14) Total = 70 - ((FnameLength + SnameLength) / 2)
        if (lovecount > 16) Total = 80 - ((FnameLength + SnameLength) / 2)
        if (lovecount > 18) Total = 90 - ((FnameLength + SnameLength) / 2)
        if (lovecount > 20) Total = 100 - ((FnameLength + SnameLength) / 2)
        if (lovecount > 22) Total = 110 - ((FnameLength + SnameLength) / 2)
        if (FnameLength == 0 || SnameLength == 0)
            Total = "Error";
        if (Total < 0) Total = 0;
        if (Total > 99) Total = 99;

        var result = Math.floor(Total).toString();
        love(result);
    },
    flames: (name1, name2, result, err) => {
        if (!name1 || !name2) {
            return err("Give both name");
        }
        if (name1.toLowerCase() === name2.toLowerCase()) {
            return err("The both name are same.");
        }
        var fname = name1;
        var sname = name2;
        var r = /\s+/g;
        var orfirst = fname.toUpperCase();
        var nam = orfirst;
        orfirst = orfirst.replace(r, "");
        if (orfirst != "") {
            var count = 0;
            var first = orfirst;
            second = sname.toUpperCase();
            var names = second;
            second = second.replace(r, "");
            if (second != "") {
                for (var xx = 0; xx < first.length; xx++) {
                    for (var yy = 0; yy < second.length; yy++) {
                        if (first[xx] == second[yy]) {
                            var a1 = first.substring(0, xx);
                            var a2 = first.substring(xx + 1, first.length);
                            first = a1 + a2;
                            xx = -1;
                            var b1 = second.substring(0, yy);
                            var b2 = second.substring(yy + 1, second.length);
                            second = b1 + b2;
                            yy = -1;
                            break;
                        }
                    }
                }

                var ss = (first + second);
                var l = ss.length;
                var ar = new Array("F", "L", "A", "M", "E", "S");
                var stp = 1;

                for (var x = 6; x > 1; x--) {
                    var g = ((l % x) + stp) - 1;
                    if (g > x) {
                        g = g % x;
                    }
                    if (g == 0) {
                        g = ar.length;
                    }
                    ar.splice(g - 1, 1);
                    stp = g;
                    //alert(ar);
                }

                if (ar == "F") {
                    //res="FRIENDS";
                    result('friends');
                }
                else if (ar == "L") {
                    //res="LOVER";
                    result('lover');
                }
                else if (ar == "A") {
                    //res="AFFECTION";
                    result('affection');
                }
                else if (ar == "M") {
                    //res="MARRIAGE";
                    result('marriage');
                }
                else if (ar == "E") {
                    //res="ENEMY";
                    result('enemy');
                }
                else if (ar == "S") {
                    //res="SISTER";ww
                    result('sister');
                }
            }
        }
        else {
            return false;
        }
    },
    eightBall: (response) => {
        const answersArray = responses.eightBall;
        const answer = answersArray[Math.floor(Math.random() * answersArray.length)];
        response(answer);
    },
    truth: (response) => {
        const truthsArray = responses.truth;
        const truth = truthsArray[Math.floor(Math.random() * truthsArray.length)];
        response(truth);
    },
    dare: (response) => {
        const daresArray = responses.dare;
        const dare = daresArray[Math.floor(Math.random() * daresArray.length)];
        response(dare);
    }
}