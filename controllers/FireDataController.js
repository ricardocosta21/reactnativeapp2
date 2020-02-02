import FireData from '../models/FireData';
import Message from '../models/Message';

var SQLite = require('react-native-sqlite-storage')
var sqlite = SQLite.openDatabase({name: 'fire-db.sqlite', createFromLocation:'~database/fire-db.sqlite' })

// result: realm object
export const getFireDataById = (id: number) => {
    return new Promise((resolve, reject) => {
        let msg = new Message();
        sqlite.transaction((tx) => {
            tx.executeSql('SELECT * FROM Data WHERE Id=?', [id], (tx, results) => {
                if (results.rows.length > 0) {
                    let item = results.rows.item(0);
                    let fireData = new FireData(item.id, item.age, item.wr, item.incGrowth, item.returns
                    item.investments, item.income, item.spending, item.retSpending);
                    msg.result = fireData;
                    msg.message = `Found 1 fireData with id=${id}`;
                } else {
                    msg.result = null;
                    msg.message = `Not found fireData with id=${id}`;
                }
                resolve({ result: msg.result, message: msg.message });
            }, (error) => {
                msg.result = null;
                msg.message = `${error.message}`;
                resolve({ result: msg.result, message: msg.message });
            });
        })
    });
}

// result: boolean
export const createFireData = (fireData: FireData) => {
    return new Promise((resolve, reject) => {
        let msg = new Message();
        if (!fireData) {
            msg.result = false;
            msg.message = 'Invalid fireData input!';
            resolve({ result: msg.result, message: msg.message });
        }

        sqlite.transaction((tx) => {
            tx.executeSql('INSERT INTO FireData(Id, Age, WR, IncGrowth, Returns, Investments, Income, Spending, RetSpending) 
            VALUES (?,?,?,?,?,?,?,?,?)', [1, 27, 4, 3, 7, 42000, 80000, 40000, 10000], (tx, results) => {
                if (results.rowsAffected > 0) {
                    msg.result = true;
                    msg.message = 'Create new fireData successfully!';
                } else {
                    msg.result = false;
                    msg.message = 'Create new fireData failed!';
                }
                resolve({ result: msg.result, message: msg.message });
            }, (error) => {
                msg.result = false;
                msg.message = `${error.message}`;
                resolve({ result: msg.result, message: msg.message });
            });
        })
    });
}

export const updateFireData = (fireData: FireData) => {
    return new Promise((resolve, reject) => {
        let msg = new Message();
        if (!fireData) {
            msg.result = false;
            msg.message = 'Invalid fireData input!';
            resolve({ result: msg.result, message: msg.message });
        }

        sqlite.transaction((tx) => {
            tx.executeSql('UPDATE Data SET Age=? WR=? IncGrowth=? Returns=? Investments=? Income=? 
            Spending=? RetSpending=? WHERE Id=?', [ fireData.age,fireData.wr, fireData.incGrowth,
            fireData.returns, fireData.investments, fireData.income, fireData.spending, fireData.retSpending, fireData.id], (tx, results) => {

                if (results.rowsAffected > 0) {
                    msg.result = true;
                    msg.message = 'Update fireData successfully!';
                } else {
                    msg.result = false;
                    msg.message = 'Update fireData failed!';
                }
                resolve({ result: msg.result, message: msg.message });
            }, (error) => {
                msg.result = false;
                msg.message = `${error.message}`;
                resolve({ result: msg.result, message: msg.message });
            });
        })
    });
}