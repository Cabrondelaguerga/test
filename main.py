def back2():
    pins.servo_set_pulse(AnalogPin.P8, 1300)
    control.wait_micros(20000)
def back():
    pins.servo_set_pulse(AnalogPin.P8, 1700)
    control.wait_micros(20000)
def sonar1():
    global set_distance
    pins.digital_write_pin(DigitalPin.P1, 0)
    control.wait_micros(2)
    pins.digital_write_pin(DigitalPin.P1, 1)
    control.wait_micros(10)
    pins.digital_write_pin(DigitalPin.P1, 0)
    set_distance = pins.pulse_in(DigitalPin.P2, PulseValue.HIGH) / 58

def on_button_pressed_a():
    forward()
input.on_button_pressed(Button.A, on_button_pressed_a)

def forward6():
    pins.servo_set_pulse(AnalogPin.P13, 1700)
    control.wait_micros(20000)
def forward2():
    pins.servo_set_pulse(AnalogPin.P8, 1300)
    control.wait_micros(20000)
def forward3():
    pins.servo_set_pulse(AnalogPin.P13, 1700)
    control.wait_micros(20000)

def on_button_pressed_b():
    back()
input.on_button_pressed(Button.B, on_button_pressed_b)

def forward5():
    pins.servo_set_pulse(AnalogPin.P13, 1700)
    control.wait_micros(20000)
def forward():
    pins.servo_set_pulse(AnalogPin.P8, 1300)
    control.wait_micros(20000)
def forward4():
    pins.servo_set_pulse(AnalogPin.P13, 1700)
    control.wait_micros(20000)
set_distance = 0
basic.show_icon(IconNames.NO)
set_distance = 0

def on_forever():
    sonar1()
    basic.show_number(set_distance)
basic.forever(on_forever)
