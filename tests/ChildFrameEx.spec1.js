
// const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';



test.describe('Example to demonstrate frame', ()=>{


  test('frame example ----- single frame', async ({page})=>{

    await page.goto('https://the-internet.herokuapp.com/iframe');

    const textArea = await page.frameLocator('#mce_0_ifr').locator('#tinymce')

    await textArea.fill('hello Sanjeev, welcome you in today session!!')

    await page.waitForTimeout(5000)
    
    await expect(textArea).toHaveText('hello Sanjeev, welcome you in today session!!')

    
  })


  test.only('frame example ----- nested frame', async ({page})=>{

    await page.goto('https://the-internet.herokuapp.com/nested_frames');


    //total frames
    const allFrames = await page.frames()
    console.log("Number of frames: ", allFrames.length);
    

    // const topFrame = await page.frameLocator('[name="frame-top"]')
    const topFrame = await page.frame({url:'https://the-internet.herokuapp.com/frame_top'})

    //nested frame ------ frame ----- inner frame

    const childFrames = await topFrame.childFrames();

    const leftFrameUsingChild = await childFrames[0].locator('body')
    await expect(leftFrameUsingChild).toHaveText('LEFT')


    const rightFrameUsingChild = await childFrames[2].locator('body')
    await expect(rightFrameUsingChild).toHaveText('RIGHT')


    
    const middleFrameUsingChild = await childFrames[1].locator('body')
    await expect(middleFrameUsingChild).toHaveText('MIDDLE')




    // const childFrames = await topFrame.childFrames();
    // console.log(childFrames);


    // //left frame
    // const leftFrameBody = await topFrame.frameLocator('[name="frame-left"]').locator('body')
    // await expect(leftFrameBody).toHaveText('LEFT')


    // //middle frame
    // const middleFrameBody = await topFrame.frameLocator('[name="frame-middle"]').locator('body')
    // await expect(middleFrameBody).toHaveText('MIDDLE')


    // //right frame
    // const rightFrameBody = await topFrame.frameLocator('[name="frame-right"]').locator('body')
    // await expect(rightFrameBody).toHaveText('RIGHT')


    // //bottom frame
    // const bottomFrame = await page.frameLocator('[name="frame-bottom"]').locator('body')
    // await expect(bottomFrame).toHaveText('BOTTOM')

  })

  


})

