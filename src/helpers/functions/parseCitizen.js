export const parseCitizen = (id) => {
        console.log(JSON.parse(JSON.stringify(`${id[0]}-${id[1]}${id[2]}${id[3]}${id[4]}-${id[5]}-${id[6]}${id[7]}${id[8]}${id[9]}-${id[10]}${id[11]}-${id[12]}`)))

        return id
}