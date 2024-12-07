import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from "three";
import {GLTFLoader, GLTF} from "three/examples/jsm/loaders/GLTFLoader.js"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"
import {CSS2DRenderer} from "three/examples/jsm/renderers/CSS2DRenderer.js"
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

@Component({
  selector: 'app-three-d',
  templateUrl: './three-d.component.html',
  styleUrls: ['./three-d.component.scss'],
})
export class ThreeDComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  //3



  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private controls!: OrbitControls;
  private mixer!: THREE.AnimationMixer;
  private clock = new THREE.Clock();

  private animationId!: number;

  ngAfterViewInit(): void {
    this.initScene();
    this.animate();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
    this.renderer.dispose();
  }

  private initScene(): void {
    // Set up the scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color("#c7efff");

    // Set up the camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.canvasRef.nativeElement.clientWidth /
        this.canvasRef.nativeElement.clientHeight,
      0.1,
      10
    );
    this.camera.position.set(0, 0.5, 1.2);

    // Set up the renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvasRef.nativeElement,
      antialias: true,
    });
    this.renderer.setSize(
      this.canvasRef.nativeElement.clientWidth,
      this.canvasRef.nativeElement.clientHeight
    );

    // Add OrbitControls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true; // Smooth rotations
    this.controls.dampingFactor = 0.05;
    this.controls.minDistance = 1; // Minimum zoom distance
    this.controls.maxDistance = 3; // Maximum zoom distance
    this.controls.enableZoom=false;

    // Add Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // Soft light
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Strong directional light
    directionalLight.position.set(5, 10, 5);
    this.scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1); // Strong directional light
    directionalLight2.position.set(-5, -10, -5);
    this.scene.add(directionalLight2);

    // Load the model
    const loader = new GLTFLoader();
    loader.load(
      'assets/SofaTest2.glb', // Update to your model's path
      (gltf) => {
        const model = gltf.scene;

        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        model.position.set(0, -0.5, 0);
        model.scale.set(1, 1, 1); // Adjust as needed
        this.scene.add(model);


        // Handle animations if available
        if (gltf.animations.length > 0) {
          this.mixer = new THREE.AnimationMixer(model);
          gltf.animations.forEach((clip) => {
            this.mixer.clipAction(clip).play();
          });
        }

         // Set the camera to look at the model's position
        // this.camera.position.set(0, 2, 5);  // Adjust as needed
        this.camera.lookAt(model.position);  // Focus the camera on the model
      },
      undefined,
      (error) => {
        console.error('An error occurred while loading the model:', error);
      }
    );
  }

  private animate(): void {
    this.animationId = requestAnimationFrame(() => this.animate());

    if (this.mixer) {
      const delta = this.clock.getDelta();
      this.mixer.update(delta);
    }

    this.controls.update(); // Update controls
    this.renderer.render(this.scene, this.camera);
  }
}
