
import sqlite from 'sqlite'


async function setup() {
    const db =  sqlite.open({filename: './../mydb.sqlite', driver: sqlite});
    await (await db).migrate({force: true});
}

setup();