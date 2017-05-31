
/**
 * 
 */
enum REG_BANK_0 {
    PAJ7620_ADDR_SUSPEND_CMD = 0x3,
    PAJ7620_ADDR_GES_PS_DET_MASK_0 = 0x41,
    PAJ7620_ADDR_GES_PS_DET_MASK_1 = 0x42,
    PAJ7620_ADDR_GES_PS_DET_FLAG_0 = 0x43,
    PAJ7620_ADDR_GES_PS_DET_FLAG_1 = 0x44,
    PAJ7620_ADDR_STATE_INDICATOR = 0x45,
    PAJ7620_ADDR_PS_HIGH_THRESHOLD = 0x69,
    PAJ7620_ADDR_PS_LOW_THRESHOLD = 0x6A,
    PAJ7620_ADDR_PS_APPROACH_STATE = 0x6B,
    PAJ7620_ADDR_PS_RAW_DATA = 0x6C
}

/**
 * 
 */
enum REG_BANK_1 {   
    PAJ7620_ADDR_PS_GAIN = 0x44,
    PAJ7620_ADDR_IDLE_S1_STEP_0 = 0x67,
    PAJ7620_ADDR_IDLE_S1_STEP_1 = 0x68,
    PAJ7620_ADDR_IDLE_S2_STEP_0 = 0x69,
    PAJ7620_ADDR_IDLE_S2_STEP_1 = 0x6A,
    PAJ7620_ADDR_OP_TO_S1_STEP_0 = 0x6B,
    PAJ7620_ADDR_OP_TO_S1_STEP_1 = 0x6C,
    PAJ7620_ADDR_OP_TO_S2_STEP_0 = 0x6D,
    PAJ7620_ADDR_OP_TO_S2_STEP_1 = 0x6E,
    PAJ7620_ADDR_OPERATION_ENABLE = 0x72
}

let initRegisterArray: number [] = [
    0xEF,0x00, 0x32,0x29, 0x33,0x01, 0x34,0x00, 0x35,0x01, 0x36,0x00, 0x37,0x07, 0x38,0x17,
	0x39,0x06, 0x3A,0x12, 0x3F,0x00, 0x40,0x02, 0x41,0xFF, 0x42,0x01, 0x46,0x2D, 0x47,0x0F,
	0x48,0x3C, 0x49,0x00, 0x4A,0x1E, 0x4B,0x00, 0x4C,0x20, 0x4D,0x00, 0x4E,0x1A, 0x4F,0x14,
	0x50,0x00, 0x51,0x10, 0x52,0x00, 0x5C,0x02, 0x5D,0x00, 0x5E,0x10, 0x5F,0x3F, 0x60,0x27,
	0x61,0x28, 0x62,0x00, 0x63,0x03, 0x64,0xF7, 0x65,0x03, 0x66,0xD9, 0x67,0x03, 0x68,0x01,
	0x69,0xC8, 0x6A,0x40, 0x6D,0x04, 0x6E,0x00, 0x6F,0x00, 0x70,0x80, 0x71,0x00, 0x72,0x00,
	0x73,0x00, 0x74,0xF0, 0x75,0x00, 0x80,0x42, 0x81,0x44, 0x82,0x04, 0x83,0x20, 0x84,0x20,
	0x85,0x00, 0x86,0x10, 0x87,0x00, 0x88,0x05, 0x89,0x18, 0x8A,0x10, 0x8B,0x01, 0x8C,0x37,
	0x8D,0x00, 0x8E,0xF0, 0x8F,0x81, 0x90,0x06, 0x91,0x06, 0x92,0x1E, 0x93,0x0D, 0x94,0x0A,
	0x95,0x0A, 0x96,0x0C, 0x97,0x05, 0x98,0x0A, 0x99,0x41, 0x9A,0x14, 0x9B,0x0A, 0x9C,0x3F,
	0x9D,0x33, 0x9E,0xAE, 0x9F,0xF9, 0xA0,0x48, 0xA1,0x13, 0xA2,0x10, 0xA3,0x08, 0xA4,0x30,
	0xA5,0x19, 0xA6,0x10, 0xA7,0x08, 0xA8,0x24, 0xA9,0x04, 0xAA,0x1E, 0xAB,0x1E, 0xCC,0x19,
	0xCD,0x0B, 0xCE,0x13, 0xCF,0x64, 0xD0,0x21, 0xD1,0x0F, 0xD2,0x88, 0xE0,0x01, 0xE1,0x04,
	0xE2,0x41, 0xE3,0xD6, 0xE4,0x00, 0xE5,0x0C, 0xE6,0x0A, 0xE7,0x00, 0xE8,0x00, 0xE9,0x00,
	0xEE,0x07, 0xEF,0x01, 0x00,0x1E, 0x01,0x1E, 0x02,0x0F, 0x03,0x10, 0x04,0x02, 0x05,0x00,
	0x06,0xB0, 0x07,0x04, 0x08,0x0D, 0x09,0x0E, 0x0A,0x9C, 0x0B,0x04, 0x0C,0x05, 0x0D,0x0F,
	0x0E,0x02, 0x0F,0x12, 0x10,0x02, 0x11,0x02, 0x12,0x00, 0x13,0x01, 0x14,0x05, 0x15,0x07,
	0x16,0x05, 0x17,0x07, 0x18,0x01, 0x19,0x04, 0x1A,0x05, 0x1B,0x0C, 0x1C,0x2A, 0x1D,0x01,
	0x1E,0x00, 0x21,0x00, 0x22,0x00, 0x23,0x00, 0x25,0x01, 0x26,0x00, 0x27,0x39, 0x28,0x7F,
	0x29,0x08, 0x30,0x03, 0x31,0x00, 0x32,0x1A, 0x33,0x1A, 0x34,0x07, 0x35,0x07, 0x36,0x01,
	0x37,0xFF, 0x38,0x36, 0x39,0x07, 0x3A,0x00, 0x3E,0xFF, 0x3F,0x00, 0x40,0x77, 0x41,0x40,
	0x42,0x00, 0x43,0x30, 0x44,0xA0, 0x45,0x5C, 0x46,0x00, 0x47,0x00, 0x48,0x58, 0x4A,0x1E,
	0x4B,0x1E, 0x4C,0x00, 0x4D,0x00, 0x4E,0xA0, 0x4F,0x80, 0x50,0x00, 0x51,0x00, 0x52,0x00,
	0x53,0x00, 0x54,0x00, 0x57,0x80, 0x59,0x10, 0x5A,0x08, 0x5B,0x94, 0x5C,0xE8, 0x5D,0x08,
	0x5E,0x3D, 0x5F,0x99, 0x60,0x45, 0x61,0x40, 0x63,0x2D, 0x64,0x02, 0x65,0x96, 0x66,0x00,
	0x67,0x97, 0x68,0x01, 0x69,0xCD, 0x6A,0x01, 0x6B,0xB0, 0x6C,0x04, 0x6D,0x2C, 0x6E,0x01,
	0x6F,0x32, 0x71,0x00, 0x72,0x01, 0x73,0x35, 0x74,0x00, 0x75,0x33, 0x76,0x31, 0x77,0x01,
	0x7C,0x84, 0x7D,0x03, 0x7E,0x01
];

/**
 * 
 */
enum GES_EVENT {
    //% block=None
    GES_NONE_EVENT = 0,
    //% block=Right
    GES_RIGHT_EVENT = 1,
    //% block=Left
    GES_LEFT_EVENT = 2,
    //% block=Up
    GES_UP_EVENT = 3,
    //% block=Down
    GES_DOWN_EVENT = 4,
    //% block=Forward
    GES_FORWARD_EVENT = 5,
    //% block=Backward
    GES_BACKWARD_EVENT = 6,
    //% block=Clockwise
    GES_CLOCKWISE_EVENT = 7,
    //% block=Anticlockwise
    GES_ANTICCLOCKWISE_EVEN = 8,
    //% block=Wave
    GES_WAVE_EVENT = 9
}


/**
 * Functions to operate Grove Gesture module.
 */
//% weight=10 color=#9F79EE icon="\uf108"
namespace Grove_Gestrue
{    
    export class PAJ7620
    {
        gestureData: GES_EVENT;
        
        private paj7620WriteReg(addr: number, cmd: number)
        {
            let buf: Buffer = pins.createBuffer(2);
            
            buf[0] = addr;
            buf[1] = cmd;
            
            pins.i2cWriteBuffer(0x73, buf, false);
        }
        
        private paj7620ReadReg(addr: number): number
        {
            let buf: Buffer = pins.createBuffer(1);
            
            buf[0] = addr;
            
            pins.i2cWriteBuffer(0x73, buf, false);
            
            buf = pins.i2cReadBuffer(0x73, 1, false);
            
            return buf[0];
        }
        
        private paj7620SelectBank(bank: number)
        {
            if(bank == 0)this.paj7620WriteReg(0xEF, 0);
            else if(bank == 1)this.paj7620WriteReg(0xEF, 1);
        }
        
        private paj7620Init()
        {
            let temp = 0;
            
            this.paj7620SelectBank(0);
            this.paj7620SelectBank(0);
            
            temp = this.paj7620ReadReg(0);
            if(temp == 0x20)
            {
                for(let i =0; i < 438; i += 2)
                {
                    this.paj7620WriteReg(initRegisterArray[i], initRegisterArray[i + 1]);
                }
            }
            
            this.paj7620SelectBank(0);
        }
        
        init()
        {
            this.paj7620Init();
        }
        
        /**
         * Read gesture event
         */
        //% blockId=gesture_read block="%strip|event read"
        eventRead(): number
        {
            let data = GES_EVENT.GES_NONE_EVENT;
            
            data = this.paj7620ReadReg(0x43);
            if(data == 0x01) // Right
            {
                data = this.paj7620ReadReg(0x43);
                if(data == 0x10) // Forward
                    data = GES_EVENT.GES_FORWARD_EVENT;
                else if(data == 0x20) // Backward
                    data = GES_EVENT.GES_BACKWARD_EVENT;
                else // Right
                    data = GES_EVENT.GES_RIGHT_EVENT;
            }
            else if(data == 0x02) // Left
            {
                data = this.paj7620ReadReg(0x43);
                if(data == 0x10) // Forward
                    data = GES_EVENT.GES_FORWARD_EVENT;
                else if(data == 0x20) // Backward
                    data = GES_EVENT.GES_BACKWARD_EVENT;
                else // Left
                    data = GES_EVENT.GES_LEFT_EVENT;
            }
            else if(data == 0x04) // Up
            {
                data = this.paj7620ReadReg(0x43);
                if(data == 0x10) // Forward
                    data = GES_EVENT.GES_FORWARD_EVENT;
                else if(data == 0x20) // Backward
                    data = GES_EVENT.GES_BACKWARD_EVENT;
                else // Left
                    data = GES_EVENT.GES_UP_EVENT;
            }
            else if(data == 0x08) // Down
            {
                data = this.paj7620ReadReg(0x43);
                if(data == 0x10) // Forward
                    data = GES_EVENT.GES_FORWARD_EVENT;
                else if(data == 0x20) // Backward
                    data = GES_EVENT.GES_BACKWARD_EVENT;
                else // Left
                    data = GES_EVENT.GES_DOWN_EVENT;
            }
            else if(data == 0x10) // Forward
            {
                data = GES_EVENT.GES_FORWARD_EVENT;
            }
            else if(data == 0x20) // Backward
            {
                data = GES_EVENT.GES_BACKWARD_EVENT;
            }
            else if(data == 0x40) // Clockwise
            {
                data = GES_EVENT.GES_CLOCKWISE_EVENT;
            }
            else if(data == 0x80) // Anticlockwise
            {
                data = GES_EVENT.GES_ANTICCLOCKWISE_EVEN;
            }
            else
            {
                data = this.paj7620ReadReg(0x44);
                if(data == 0x01) // Wave
                    data = GES_EVENT.GES_WAVE_EVENT;
            }
            
            return data;
        }
               
        /**
         * Read gesture event
         */
        //% blockId=is_gesture_event block="%strip|is |gesture %gesture"
        isEvent(gesture: GES_EVENT): boolean
        {
            let data = 0;
            
            data = this.eventRead();
            
            if(data == gesture)return true;
            else return false;
        }
    }
    
    export function create(): PAJ7620
    {
        let gesture = new PAJ7620();
        
        gesture.init();
        
        return gesture;
    }
}