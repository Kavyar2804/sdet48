import excel from 'exceljs'
describe('Readdata from excel', ()=>{

    it('excelbook', async()=>{

        const book = new excel.Workbook()
        await book.xlsx.readFile('C:/Users/Kavya/Desktop/webdriverioSdet48/Testdata.xlsx')
        const value = book.getWorksheet('Sheet2')
        let data = value.getRow(1).getCell(1).toString()
        console.log(data);

    })

    it('excelbookwrite data', async()=>{

        const book = new excel.Workbook()
        const sheet = book.addWorksheet('Sheet2')
        sheet.addRow(1).getCell(1).value='Kavya'
        sheet.addRow(2).getCell(1).value='R'
        await book.xlsx.writeFile('C:/Users/Kavya/Desktop/webdriverioSdet48/Testdata.xlsx')
        

    })
})