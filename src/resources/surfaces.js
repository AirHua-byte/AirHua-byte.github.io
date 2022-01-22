// 创建地面贴图函数

import * as THREE from "three";
import { scene, manager } from "./world";

/**
 * 创建标签板块
 * 说明 : 调用此函数创建一个FontLoader, 例如SKILL, WORKS 等大标题
 * - x - x坐标位置
 * - y - y坐标位置
 * - z - z坐标位置
 * - inputText - 文字内容
 * - fontSize - 字体大小
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {string} inputText
 * @param {number} fontSize
 */
export function simpleText(x, y, z, inputText, fontSize) {
  var text_loader = new THREE.FontLoader();

  text_loader.load("../src/jsm/Poppins_Regular.json", function (font) {
    var xMid, text;

    var color = 0xffffff;

    var matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    });

    var message = inputText;

    var shapes = font.generateShapes(message, fontSize);

    var geometry = new THREE.ShapeBufferGeometry(shapes);

    geometry.computeBoundingBox();

    xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);

    geometry.translate(xMid, 0, 0);

    text = new THREE.Mesh(geometry, matLite);
    text.position.z = z;
    text.position.y = y;
    text.position.x = x;
    text.rotation.x = -Math.PI * 0.5;

    scene.add(text);
  });
}

/**
 * 创建浮动字体
 * 说明 : 调用此函数创建一个浮动的字体，参考源码中'BiliBili'
 * - inputMessage - 文字内容
 * @param {string} inputMessage
 */
export function floatingLabel(x, y, z, inputMessage) {
  var text_loader = new THREE.FontLoader();

  text_loader.load("../src/jsm/Poppins_Regular.json", function (font) {
    var xMid, text;

    var color = 0xffffff;

    var matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    });

    var message = inputMessage;

    var shapes = font.generateShapes(message, 1);

    var geometry = new THREE.ShapeBufferGeometry(shapes);

    geometry.computeBoundingBox();

    xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);

    geometry.translate(xMid, 0, 0);

    // make shape ( N.B. edge view not visible )

    text = new THREE.Mesh(geometry, matLite);
    text.position.z = z;
    text.position.y = y;
    text.position.x = x;
    scene.add(text);
  });
}

/**
 * 创建地面展示板块贴图, 相机高度调整
 * - xScale - x缩放
 * - zScale - z缩放
 * - inputText - 文字内容
 * - fontSize - 字体大小
 * @param {number} xScale
 * @param {number} zScale
 * @param {object} boxTexture
 */
export function allSkillsSection(
  x,
  y,
  z,
  xScale,
  zScale,
  boxTexture,
  URLLink = null
) {
  const boxScale = { x: xScale, y: 0.1, z: zScale };
  let quat = { x: 0, y: 0, z: 0, w: 1 };
  let mass = 0; //mass of zero = infinite mass

  var geometry = new THREE.PlaneBufferGeometry(xScale, zScale);

  const loader = new THREE.TextureLoader(manager);
  const texture = loader.load(boxTexture);
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearFilter;
  texture.encoding = THREE.sRGBEncoding;
  const loadedTexture = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
  });
  loadedTexture.depthWrite = true;
  loadedTexture.depthTest = true;

  const linkBox = new THREE.Mesh(geometry, loadedTexture);
  linkBox.position.set(x, y, z);
  linkBox.renderOrder = 1;
  linkBox.rotation.x = -Math.PI * 0.5;
  linkBox.receiveShadow = true;
  linkBox.userData = { URL: URLLink };
  scene.add(linkBox);
}

/**
 * 创建地面普通文字贴图, 作为提示使用
 * - inputText - 文字内容
 * - size1 - 宽
 * - size2 - 长
 * @param {string} inputText
 * @param {number} size1
 * @param {number} size2
 */
export function createTextOnPlane(x, y, z, inputText, size1, size2) {
  var activitiesGeometry = new THREE.PlaneBufferGeometry(size1, size2);
  const loader = new THREE.TextureLoader(manager);
  var activitiesTexture = loader.load(inputText);
  activitiesTexture.magFilter = THREE.NearestFilter;
  activitiesTexture.minFilter = THREE.LinearFilter;
  var activitiesMaterial = new THREE.MeshBasicMaterial({
    map: activitiesTexture,
    transparent: true,
  });

  activitiesMaterial.depthWrite = true;
  activitiesMaterial.depthTest = true;
  let activitiesText = new THREE.Mesh(activitiesGeometry, activitiesMaterial);
  activitiesText.position.x = x;
  activitiesText.position.y = y;
  activitiesText.position.z = z;
  activitiesText.rotation.x = -Math.PI * 0.5;

  activitiesText.renderOrder = 1;

  scene.add(activitiesText);
}
