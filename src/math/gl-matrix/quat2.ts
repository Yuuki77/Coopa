// /* istanbul ignore file */

// import * as glMatrix from "./common"
// import * as quat from "./quat"
// import * as mat4 from "./mat4"

// /**
//  * Dual Quaternion<br>
//  * Format: [real, dual]<br>
//  * Quaternion format: XYZW<br>
//  * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
//  * @module quat2
//  */

// /**
//  * Creates a new identity dual quat
//  *
//  * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
//  */
// export function create() {
// 	let dq = new glMatrix.ARRAY_TYPE(8)
// 	dq[0] = 0
// 	dq[1] = 0
// 	dq[2] = 0
// 	dq[4] = 0
// 	dq[5] = 0
// 	dq[6] = 0
// 	dq[7] = 0
// 	dq[3] = 1
// 	return dq
// }

// /**
//  * Creates a new quat initialized with values from an existing quaternion
//  *
//  * @param {quat2} a dual quaternion to clone
//  * @returns {quat2} new dual quaternion
//  * @function
//  */
// export function clone(a: number[]) {
// 	let dq = new glMatrix.ARRAY_TYPE(8)
// 	dq[0] = a[0]
// 	dq[1] = a[1]
// 	dq[2] = a[2]
// 	dq[3] = a[3]
// 	dq[4] = a[4]
// 	dq[5] = a[5]
// 	dq[6] = a[6]
// 	dq[7] = a[7]
// 	return dq
// }

// /**
//  * Creates a dual quat from a quaternion and a translation
//  *
//  * @param {quat2} dual quaternion receiving operation result
//  * @param {quat} q a normalized quaternion
//  * @param {vec3} t tranlation vector
//  * @returns {quat2} dual quaternion receiving operation result
//  * @function
//  */
// export function fromRotationTranslation(out: number[], q: number[], t: number[]) {
// 	let ax = t[0] * 0.5,
// 		ay = t[1] * 0.5,
// 		az = t[2] * 0.5,
// 		bx = q[0],
// 		by = q[1],
// 		bz = q[2],
// 		bw = q[3]
// 	out[0] = bx
// 	out[1] = by
// 	out[2] = bz
// 	out[3] = bw
// 	out[4] = ax * bw + ay * bz - az * by
// 	out[5] = ay * bw + az * bx - ax * bz
// 	out[6] = az * bw + ax * by - ay * bx
// 	out[7] = -ax * bx - ay * by - az * bz
// 	return out
// }

// /**
//  * Creates a dual quat from a translation
//  *
//  * @param {quat2} dual quaternion receiving operation result
//  * @param {vec3} t translation vector
//  * @returns {quat2} dual quaternion receiving operation result
//  * @function
//  */
// export function fromTranslation(out: number[], t: number[]) {
// 	out[0] = 0
// 	out[1] = 0
// 	out[2] = 0
// 	out[3] = 1
// 	out[4] = t[0] * 0.5
// 	out[5] = t[1] * 0.5
// 	out[6] = t[2] * 0.5
// 	out[7] = 0
// 	return out
// }

// /**
//  * Creates a dual quat from a quaternion
//  *
//  * @param {quat2} dual quaternion receiving operation result
//  * @param {quat} q the quaternion
//  * @returns {quat2} dual quaternion receiving operation result
//  * @function
//  */
// export function fromRotation(out: number[], q: number[]) {
// 	out[0] = q[0]
// 	out[1] = q[1]
// 	out[2] = q[2]
// 	out[3] = q[3]
// 	out[4] = 0
// 	out[5] = 0
// 	out[6] = 0
// 	out[7] = 0
// 	return out
// }

// /**
//  * Creates a new dual quat from a matrix (4x4)
//  *
//  * @param {quat2} out the dual quaternion
//  * @param {mat4} a the matrix
//  * @returns {quat2} dual quat receiving operation result
//  * @function
//  */
// export function fromMat4(out: number[], a: number[]) {
// 	//TODO Optimize this
// 	let outer = quat.create()
// 	mat4.getRotation(outer, a)
// 	let t = new glMatrix.ARRAY_TYPE(3)
// 	mat4.getTranslation(t, a)
// 	fromRotationTranslation(out, outer, t)
// 	return out
// }

// /**
//  * Copy the values from one dual quat to another
//  *
//  * @param {quat2} out the receiving dual quaternion
//  * @param {quat2} a the source dual quaternion
//  * @returns {quat2} out
//  * @function
//  */
// export function copy(out: number[], a: number[]) {
// 	out[0] = a[0]
// 	out[1] = a[1]
// 	out[2] = a[2]
// 	out[3] = a[3]
// 	out[4] = a[4]
// 	out[5] = a[5]
// 	out[6] = a[6]
// 	out[7] = a[7]
// 	return out
// }

// /**
//  * Set a dual quat to the identity dual quaternion
//  *
//  * @param {quat2} out the receiving quaternion
//  * @returns {quat2} out
//  */
// export function identity(out: number[]) {
// 	out[0] = 0
// 	out[1] = 0
// 	out[2] = 0
// 	out[3] = 1
// 	out[4] = 0
// 	out[5] = 0
// 	out[6] = 0
// 	out[7] = 0
// 	return out
// }

// /**
//  * Set the components of a dual quat to the given values
//  *
//  * @param {quat2} out the receiving quaternion
//  * @param {Number} x1 X component
//  * @param {Number} y1 Y component
//  * @param {Number} z1 Z component
//  * @param {Number} w1 W component
//  * @param {Number} x2 X component
//  * @param {Number} y2 Y component
//  * @param {Number} z2 Z component
//  * @param {Number} w2 W component
//  * @returns {quat2} out
//  * @function
//  */
// export function set(
// 	out: number[],
// 	x1: number,
// 	y1: number,
// 	z1: number,
// 	w1: number,
// 	x2: number,
// 	y2: number,
// 	z2: number,
// 	w2: number
// ) {
// 	out[0] = x1
// 	out[1] = y1
// 	out[2] = z1
// 	out[3] = w1

// 	out[4] = x2
// 	out[5] = y2
// 	out[6] = z2
// 	out[7] = w2
// 	return out
// }

// /**
//  * Gets the real part of a dual quat
//  * @param  {quat} out real part
//  * @param  {quat2} a Dual Quaternion
//  * @return {quat} real part
//  */
// export const getReal = quat.copy

// /**
//  * Gets the dual part of a dual quat
//  * @param  {quat} out dual part
//  * @param  {quat2} a Dual Quaternion
//  * @return {quat} dual part
//  */
// export function getDual(out: number[], a: number[]) {
// 	out[0] = a[4]
// 	out[1] = a[5]
// 	out[2] = a[6]
// 	out[3] = a[7]
// 	return out
// }

// /**
//  * Set the real component of a dual quat to the given quaternion
//  *
//  * @param {quat2} out the receiving quaternion
//  * @param {quat} q a quaternion representing the real part
//  * @returns {quat2} out
//  * @function
//  */
// export const setReal = quat.copy

// /**
//  * Set the dual component of a dual quat to the given quaternion
//  *
//  * @param {quat2} out the receiving quaternion
//  * @param {quat} q a quaternion representing the dual part
//  * @returns {quat2} out
//  * @function
//  */
// export function setDual(out: number[], q: number[]) {
// 	out[4] = q[0]
// 	out[5] = q[1]
// 	out[6] = q[2]
// 	out[7] = q[3]
// 	return out
// }

// /**
//  * Gets the translation of a normalized dual quat
//  * @param  {vec3} out translation
//  * @param  {quat2} a Dual Quaternion to be decomposed
//  * @return {vec3} translation
//  */
// export function getTranslation(out: number[], a: number[]) {
// 	let ax = a[4],
// 		ay = a[5],
// 		az = a[6],
// 		aw = a[7],
// 		bx = -a[0],
// 		by = -a[1],
// 		bz = -a[2],
// 		bw = a[3]
// 	out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2
// 	out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2
// 	out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2
// 	return out
// }

// /**
//  * Translates a dual quat by the given vector
//  *
//  * @param {quat2} out the receiving dual quaternion
//  * @param {quat2} a the dual quaternion to translate
//  * @param {vec3} v vector to translate by
//  * @returns {quat2} out
//  */
// export function translate(out: number[], a: number[], v: number[]) {
// 	let ax1 = a[0],
// 		ay1 = a[1],
// 		az1 = a[2],
// 		aw1 = a[3],
// 		bx1 = v[0] * 0.5,
// 		by1 = v[1] * 0.5,
// 		bz1 = v[2] * 0.5,
// 		ax2 = a[4],
// 		ay2 = a[5],
// 		az2 = a[6],
// 		aw2 = a[7]
// 	out[0] = ax1
// 	out[1] = ay1
// 	out[2] = az1
// 	out[3] = aw1
// 	out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2
// 	out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2
// 	out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2
// 	out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2
// 	return out
// }

// /**
//  * Rotates a dual quat around the X axis
//  *
//  * @param {quat2} out the receiving dual quaternion
//  * @param {quat2} a the dual quaternion to rotate
//  * @param {number} rad how far should the rotation be
//  * @returns {quat2} out
//  */
// export function rotateX(out: number[], a: number[], rad: number) {
// 	let bx = -a[0],
// 		by = -a[1],
// 		bz = -a[2],
// 		bw = a[3],
// 		ax = a[4],
// 		ay = a[5],
// 		az = a[6],
// 		aw = a[7],
// 		ax1 = ax * bw + aw * bx + ay * bz - az * by,
// 		ay1 = ay * bw + aw * by + az * bx - ax * bz,
// 		az1 = az * bw + aw * bz + ax * by - ay * bx,
// 		aw1 = aw * bw - ax * bx - ay * by - az * bz
// 	quat.rotateX(out, a, rad)
// 	bx = out[0]
// 	by = out[1]
// 	bz = out[2]
// 	bw = out[3]
// 	out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by
// 	out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz
// 	out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx
// 	out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz
// 	return out
// }

// /**
//  * Rotates a dual quat around the Y axis
//  *
//  * @param {quat2} out the receiving dual quaternion
//  * @param {quat2} a the dual quaternion to rotate
//  * @param {number} rad how far should the rotation be
//  * @returns {quat2} out
//  */
// export function rotateY(out: number[], a: number[], rad: number) {
// 	let bx = -a[0],
// 		by = -a[1],
// 		bz = -a[2],
// 		bw = a[3],
// 		ax = a[4],
// 		ay = a[5],
// 		az = a[6],
// 		aw = a[7],
// 		ax1 = ax * bw + aw * bx + ay * bz - az * by,
// 		ay1 = ay * bw + aw * by + az * bx - ax * bz,
// 		az1 = az * bw + aw * bz + ax * by - ay * bx,
// 		aw1 = aw * bw - ax * bx - ay * by - az * bz
// 	quat.rotateY(out, a, rad)
// 	bx = out[0]
// 	by = out[1]
// 	bz = out[2]
// 	bw = out[3]
// 	out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by
// 	out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz
// 	out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx
// 	out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz
// 	return out
// }

// /**
//  * Rotates a dual quat around the Z axis
//  *
//  * @param {quat2} out the receiving dual quaternion
//  * @param {quat2} a the dual quaternion to rotate
//  * @param {number} rad how far should the rotation be
//  * @returns {quat2} out
//  */
// export function rotateZ(out: number[], a: number[], rad: number) {
// 	let bx = -a[0],
// 		by = -a[1],
// 		bz = -a[2],
// 		bw = a[3],
// 		ax = a[4],
// 		ay = a[5],
// 		az = a[6],
// 		aw = a[7],
// 		ax1 = ax * bw + aw * bx + ay * bz - az * by,
// 		ay1 = ay * bw + aw * by + az * bx - ax * bz,
// 		az1 = az * bw + aw * bz + ax * by - ay * bx,
// 		aw1 = aw * bw - ax * bx - ay * by - az * bz
// 	quat.rotateZ(out, a, rad)
// 	bx = out[0]
// 	by = out[1]
// 	bz = out[2]
// 	bw = out[3]
// 	out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by
// 	out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz
// 	out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx
// 	out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz
// 	return out
// }

// /**
//  * Rotates a dual quat by a given quaternion (a * q)
//  *
//  * @param {quat2} out the receiving dual quaternion
//  * @param {quat2} a the dual quaternion to rotate
//  * @param {quat} q quaternion to rotate by
//  * @returns {quat2} out
//  */
// export function rotateByQuatAppend(out: number[], a: number[], q: number[]) {
// 	let qx = q[0],
// 		qy = q[1],
// 		qz = q[2],
// 		qw = q[3],
// 		ax = a[0],
// 		ay = a[1],
// 		az = a[2],
// 		aw = a[3]

// 	out[0] = ax * qw + aw * qx + ay * qz - az * qy
// 	out[1] = ay * qw + aw * qy + az * qx - ax * qz
// 	out[2] = az * qw + aw * qz + ax * qy - ay * qx
// 	out[3] = aw * qw - ax * qx - ay * qy - az * qz
// 	ax = a[4]
// 	ay = a[5]
// 	az = a[6]
// 	aw = a[7]
// 	out[4] = ax * qw + aw * qx + ay * qz - az * qy
// 	out[5] = ay * qw + aw * qy + az * qx - ax * qz
// 	out[6] = az * qw + aw * qz + ax * qy - ay * qx
// 	out[7] = aw * qw - ax * qx - ay * qy - az * qz
// 	return out
// }

// /**
//  * Rotates a dual quat by a given quaternion (q * a)
//  *
//  * @param {quat2} out the receiving dual quaternion
//  * @param {quat} q quaternion to rotate by
//  * @param {quat2} a the dual quaternion to rotate
//  * @returns {quat2} out
//  */
// export function rotateByQuatPrepend(out: number[], q: number[], a: number[]) {
// 	let qx = q[0],
// 		qy = q[1],
// 		qz = q[2],
// 		qw = q[3],
// 		bx = a[0],
// 		by = a[1],
// 		bz = a[2],
// 		bw = a[3]

// 	out[0] = qx * bw + qw * bx + qy * bz - qz * by
// 	out[1] = qy * bw + qw * by + qz * bx - qx * bz
// 	out[2] = qz * bw + qw * bz + qx * by - qy * bx
// 	out[3] = qw * bw - qx * bx - qy * by - qz * bz
// 	bx = a[4]
// 	by = a[5]
// 	bz = a[6]
// 	bw = a[7]
// 	out[4] = qx * bw + qw * bx + qy * bz - qz * by
// 	out[5] = qy * bw + qw * by + qz * bx - qx * bz
// 	out[6] = qz * bw + qw * bz + qx * by - qy * bx
// 	out[7] = qw * bw - qx * bx - qy * by - qz * bz
// 	return out
// }

// /**
//  * Rotates a dual quat around a given axis. Does the normalisation automatically
//  *
//  * @param {quat2} out the receiving dual quaternion
//  * @param {quat2} a the dual quaternion to rotate
//  * @param {vec3} axis the axis to rotate around
//  * @param {Number} rad how far the rotation should be
//  * @returns {quat2} out
//  */
// export function rotateAroundAxis(out: number[], a: number[], axis: number[], rad: number) {
// 	//Special case for rad = 0
// 	if (Math.abs(rad) < glMatrix.EPSILON) {
// 		return copy(out, a)
// 	}
// 	let axisLength = Math.hypot(axis[0], axis[1], axis[2])

// 	rad = rad * 0.5
// 	let s = Math.sin(rad)
// 	let bx = (s * axis[0]) / axisLength
// 	let by = (s * axis[1]) / axisLength
// 	let bz = (s * axis[2]) / axisLength
// 	let bw = Math.cos(rad)

// 	let ax1 = a[0],
// 		ay1 = a[1],
// 		az1 = a[2],
// 		aw1 = a[3]
// 	out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by
// 	out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz
// 	out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx
// 	out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz

// 	let ax = a[4],
// 		ay = a[5],
// 		az = a[6],
// 		aw = a[7]
// 	out[4] = ax * bw + aw * bx + ay * bz - az * by
// 	out[5] = ay * bw + aw * by + az * bx - ax * bz
// 	out[6] = az * bw + aw * bz + ax * by - ay * bx
// 	out[7] = aw * bw - ax * bx - ay * by - az * bz

// 	return out
// }

// /**
//  * Adds two dual quat's
//  *
//  * @param {quat2} out the receiving dual quaternion
//  * @param {quat2} a the first operand
//  * @param {quat2} b the second operand
//  * @returns {quat2} out
//  * @function
//  */
// export function add(out: number[], a: number[], b: number[]) {
// 	out[0] = a[0] + b[0]
// 	out[1] = a[1] + b[1]
// 	out[2] = a[2] + b[2]
// 	out[3] = a[3] + b[3]
// 	out[4] = a[4] + b[4]
// 	out[5] = a[5] + b[5]
// 	out[6] = a[6] + b[6]
// 	out[7] = a[7] + b[7]
// 	return out
// }

// /**
//  * Multiplies two dual quat's
//  *
//  * @param {quat2} out the receiving dual quaternion
//  * @param {quat2} a the first operand
//  * @param {quat2} b the second operand
//  * @returns {quat2} out
//  */
// export function multiply(out: number[], a: number[], b: number[]) {
// 	let ax0 = a[0],
// 		ay0 = a[1],
// 		az0 = a[2],
// 		aw0 = a[3],
// 		bx1 = b[4],
// 		by1 = b[5],
// 		bz1 = b[6],
// 		bw1 = b[7],
// 		ax1 = a[4],
// 		ay1 = a[5],
// 		az1 = a[6],
// 		aw1 = a[7],
// 		bx0 = b[0],
// 		by0 = b[1],
// 		bz0 = b[2],
// 		bw0 = b[3]
// 	out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0
// 	out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0
// 	out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0
// 	out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0
// 	out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0
// 	out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0
// 	out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0
// 	out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0
// 	return out
// }

// /**
//  * Alias for {@link quat2.multiply}
//  * @function
//  */
// export const mul = multiply

// /**
//  * Scales a dual quat by a scalar number
//  *
//  * @param {quat2} out the receiving dual quat
//  * @param {quat2} a the dual quat to scale
//  * @param {Number} b amount to scale the dual quat by
//  * @returns {quat2} out
//  * @function
//  */
// export function scale(out: number[], a: number[], b: number) {
// 	out[0] = a[0] * b
// 	out[1] = a[1] * b
// 	out[2] = a[2] * b
// 	out[3] = a[3] * b
// 	out[4] = a[4] * b
// 	out[5] = a[5] * b
// 	out[6] = a[6] * b
// 	out[7] = a[7] * b
// 	return out
// }

// /**
//  * Calculates the dot product of two dual quat's (The dot product of the real parts)
//  *
//  * @param {quat2} a the first operand
//  * @param {quat2} b the second operand
//  * @returns {Number} dot product of a and b
//  * @function
//  */
// export const dot = quat.dot

// /**
//  * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
//  *
//  * @param {quat2} out the receiving dual quaternion
//  * @param {quat2} a dual quat to calculate inverse of
//  * @returns {quat2} out
//  */
// export function invert(out: number[], a: number[]) {
// 	let sqlen = squaredLength(a)
// 	out[0] = -a[0] / sqlen
// 	out[1] = -a[1] / sqlen
// 	out[2] = -a[2] / sqlen
// 	out[3] = a[3] / sqlen
// 	out[4] = -a[4] / sqlen
// 	out[5] = -a[5] / sqlen
// 	out[6] = -a[6] / sqlen
// 	out[7] = a[7] / sqlen
// 	return out
// }

// /**
//  * Calculates the conjugate of a dual quat
//  * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
//  *
//  * @param {quat2} out the receiving quaternion
//  * @param {quat2} a quat to calculate conjugate of
//  * @returns {quat2} out
//  */
// export function conjugate(out: number[], a: number[]) {
// 	out[0] = -a[0]
// 	out[1] = -a[1]
// 	out[2] = -a[2]
// 	out[3] = a[3]
// 	out[4] = -a[4]
// 	out[5] = -a[5]
// 	out[6] = -a[6]
// 	out[7] = a[7]
// 	return out
// }

// /**
//  * Calculates the length of a dual quat
//  *
//  * @param {quat2} a dual quat to calculate length of
//  * @returns {Number} length of a
//  * @function
//  */
// export const length = quat.length

// /**
//  * Alias for {@link quat2.length}
//  * @function
//  */
// export const len = length

// /**
//  * Calculates the squared length of a dual quat
//  *
//  * @param {quat2} a dual quat to calculate squared length of
//  * @returns {Number} squared length of a
//  * @function
//  */
// export const squaredLength = quat.squaredLength

// /**
//  * Alias for {@link quat2.squaredLength}
//  * @function
//  */
// export const sqrLen = squaredLength

// /**
//  * Normalize a dual quat
//  *
//  * @param {quat2} out the receiving dual quaternion
//  * @param {quat2} a dual quaternion to normalize
//  * @returns {quat2} out
//  * @function
//  */
// export function normalize(out: number[], a: number[]) {
// 	let magnitude = squaredLength(a)
// 	if (magnitude > 0) {
// 		magnitude = Math.sqrt(magnitude)

// 		let a0 = a[0] / magnitude
// 		let a1 = a[1] / magnitude
// 		let a2 = a[2] / magnitude
// 		let a3 = a[3] / magnitude

// 		let b0 = a[4]
// 		let b1 = a[5]
// 		let b2 = a[6]
// 		let b3 = a[7]

// 		let a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3

// 		out[0] = a0
// 		out[1] = a1
// 		out[2] = a2
// 		out[3] = a3

// 		out[4] = (b0 - a0 * a_dot_b) / magnitude
// 		out[5] = (b1 - a1 * a_dot_b) / magnitude
// 		out[6] = (b2 - a2 * a_dot_b) / magnitude
// 		out[7] = (b3 - a3 * a_dot_b) / magnitude
// 	}
// 	return out
// }

// /**
//  * Returns a string representation of a dual quatenion
//  *
//  * @param {quat2} a dual quaternion to represent as a string
//  * @returns {String} string representation of the dual quat
//  */
// export function str(a: number[]) {
// 	return (
// 		"quat2(" +
// 		a[0] +
// 		", " +
// 		a[1] +
// 		", " +
// 		a[2] +
// 		", " +
// 		a[3] +
// 		", " +
// 		a[4] +
// 		", " +
// 		a[5] +
// 		", " +
// 		a[6] +
// 		", " +
// 		a[7] +
// 		")"
// 	)
// }

// /**
//  * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
//  *
//  * @param {quat2} a the first dual quaternion.
//  * @param {quat2} b the second dual quaternion.
//  * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
//  */
// export function exactEquals(a: number[], b: number[]) {
// 	return (
// 		a[0] === b[0] &&
// 		a[1] === b[1] &&
// 		a[2] === b[2] &&
// 		a[3] === b[3] &&
// 		a[4] === b[4] &&
// 		a[5] === b[5] &&
// 		a[6] === b[6] &&
// 		a[7] === b[7]
// 	)
// }

// /**
//  * Returns whether or not the dual quaternions have approximately the same elements in the same position.
//  *
//  * @param {quat2} a the first dual quat.
//  * @param {quat2} b the second dual quat.
//  * @returns {Boolean} true if the dual quats are equal, false otherwise.
//  */
// export function equals(a: number[], b: number[]) {
// 	let a0 = a[0],
// 		a1 = a[1],
// 		a2 = a[2],
// 		a3 = a[3],
// 		a4 = a[4],
// 		a5 = a[5],
// 		a6 = a[6],
// 		a7 = a[7]
// 	let b0 = b[0],
// 		b1 = b[1],
// 		b2 = b[2],
// 		b3 = b[3],
// 		b4 = b[4],
// 		b5 = b[5],
// 		b6 = b[6],
// 		b7 = b[7]
// 	return (
// 		Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
// 		Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
// 		Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
// 		Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
// 		Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
// 		Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
// 		Math.abs(a6 - b6) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
// 		Math.abs(a7 - b7) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7))
// 	)
// }
