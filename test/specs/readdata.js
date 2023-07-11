import excel from 'exceljs'

describe('readdata',()=>{

    it('readdata', async()=>{

        const book = new excel.Workbook()
        await book.xlsx.readFile('C:/Users/Kavya/Desktop/webdriverioSdet48/Testdata.xlsx')
        const value = book.getWorksheet('Sheet1')
        const data = value.getRow(1).getCell(1).toString()
        console.log(data);


    })

    it('writedata', async()=>{

        const book = new excel.Workbook()
           const sheet =book.addWorksheet('Sheet2')
        sheet.addRow(1).getCell(1).value ='Javascript'
        await book.xlsx.writeFile('C:/Users/Kavya/Desktop/webdriverioSdet48/Testdata.xlsx')


    })

})

