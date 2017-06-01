{
    let data = GES_EVENT.GES_NONE_EVENT;
    let gesture: Grove_Gestrue.PAJ7620 = null;
    
    gesture.init();
    
    while(true)
    {        
        data = gesture.read();
        if(data == GES_EVENT.GES_UP_EVENT)basic.showString("U");
        else if(data == GES_EVENT.GES_DOWN_EVENT)basic.showString("D");
        else if(data == GES_EVENT.GES_RIGHT_EVENT)basic.showString("R");
        else if(data == GES_EVENT.GES_LEFT_EVENT)basic.showString("L");
        else if(data == GES_EVENT.GES_FORWARD_EVENT)basic.showString("F");
        else if(data == GES_EVENT.GES_BACKWARD_EVENT)basic.showString("B");
        else if(data == GES_EVENT.GES_CLOCKWISE_EVENT)basic.showString("C");
        else if(data == GES_EVENT.GES_ANTICCLOCKWISE_EVEN)basic.showString("A");
        else if(data == GES_EVENT.GES_WAVE_EVENT)basic.showString("W");


        // gesture.run();
        // if(gesture.is(GES_EVENT.GES_UP_EVENT))basic.showString("U");
        // else if(gesture.is(GES_EVENT.GES_DOWN_EVENT))basic.showString("D");
        // else if(gesture.is(GES_EVENT.GES_RIGHT_EVENT))basic.showString("R");
        // else if(gesture.is(GES_EVENT.GES_LEFT_EVENT))basic.showString("L");
        // else if(gesture.is(GES_EVENT.GES_FORWARD_EVENT))basic.showString("F");
        // else if(gesture.is(GES_EVENT.GES_BACKWARD_EVENT))basic.showString("B");
        // else if(gesture.is(GES_EVENT.GES_CLOCKWISE_EVENT))basic.showString("C");
        // else if(gesture.is(GES_EVENT.GES_ANTICCLOCKWISE_EVEN))basic.showString("A");
        // else if(gesture.is(GES_EVENT.GES_WAVE_EVENT))basic.showString("W");
    }
}
