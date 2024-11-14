extends Node

@export var spawn_delay_per_second = .1

var box_scene = preload("res://objects/box.tscn")
var mouse_event = null
var delay_count = spawn_delay_per_second

func spawn_box(position: Vector2) -> void:
	var newBox = box_scene.instantiate()
	newBox.position = position
	get_parent().add_child(newBox)
	
func _input(event: InputEvent) -> void:
	if event is InputEventMouseMotion and mouse_event:
		mouse_event.position = event.position
	if event is not InputEventMouseButton or event.button_index != MOUSE_BUTTON_LEFT:
		return
	mouse_event = event

func _process(delta: float) -> void:
	delay_count += delta
	if delay_count >= spawn_delay_per_second and mouse_event and mouse_event.is_pressed():
		spawn_box(mouse_event.position)
		delay_count = 0
