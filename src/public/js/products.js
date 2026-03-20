console.log("Products frontend javascript file");

$(function () {
    $(".product-collection").on("change", () => {
        const selected = $(".product-collection").val();
        if (selected === "SMOOTHIE") {
            $("#product-collection").hide();
            $("#product-volume").show();
        } else {
            $("#product-volume").hide();
            $("#product-collection").show();
        }
    });

    $("#process-btn").on("click", () => {
        $(".dish-container").slideToggle(500);
        $(".#process-btn").css("display", "none");
    });

    $("#cancel-btn").on("click", () => {
        $(".dish-container").slideToggle(100);
        $(".#process-btn").css("display", "flex");
    });

    $(".new-product-status").on("change", async function (e) {
        const id = e.target.id;
        const productStatus = $(`#${id}.new-product-status`).val();

        try {
            const response = await axios.post(`/admin/product/${id}`, {
                productStatus: productStatus,
            });
            console.log("response:", response);
            const result = response.data;
            if (result.data) {
                $(".new-product-status").blur();
            } else alert("product update failed!");
        } catch (err) {
            console.log(err);
            alert("product update failed!");
        }
    });

    $(".edit-product-btn").on("click", function () {
        const dataStr = decodeURIComponent($(this).data("product"));
        const product = JSON.parse(dataStr);
        const id = product._id?.$oid || product._id;

        $("#edit-product-id").val(id);
        $("#edit-product-name").val(product.productName);
        $("#edit-product-price").val(product.productPrice);
        $("#edit-product-count").val(product.productLeftCount);
        const col = String(product.productCollection || "").toUpperCase();
        const colMap = { COFFEE: "COFFEE", DISH: "COFFEE", SMOOTHIE: "SMOOTHIE", DRINK: "SMOOTHIE", DESSERTS: "DESSERTS", DESSERT: "DESSERTS", SNACKS: "SNACKS", SALAD: "SNACKS" };
        $("#edit-product-collection").val(colMap[col] || "COFFEE");
        $("#edit-product-size").val(product.productSize || "NORMAL");
        $("#edit-product-volume").val(String(product.productVolume ?? 1));
        $("#edit-product-desc").val(product.productDesc || "");

        if (product.productCollection === "SMOOTHIE" || product.productCollection === "Smoothie") {
            $("#edit-product-size-wrap").hide();
            $("#edit-product-volume-wrap").show();
        } else {
            $("#edit-product-size-wrap").show();
            $("#edit-product-volume-wrap").hide();
        }

        $("#editProductModal").modal("show");
    });

    $("#edit-product-collection").on("change", function () {
        const selected = $(this).val();
        if (selected === "SMOOTHIE") {
            $("#edit-product-size-wrap").hide();
            $("#edit-product-volume-wrap").show();
        } else {
            $("#edit-product-size-wrap").show();
            $("#edit-product-volume-wrap").hide();
        }
    });

    $("#edit-product-submit").on("click", async function () {
        const id = $("#edit-product-id").val();
        const productCollection = $("#edit-product-collection").val();
        const payload = {
            productName: $("#edit-product-name").val(),
            productPrice: Number($("#edit-product-price").val()),
            productLeftCount: Number($("#edit-product-count").val()),
            productCollection: productCollection,
            productDesc: $("#edit-product-desc").val(),
        };
        if (productCollection === "SMOOTHIE") {
            payload.productVolume = Number($("#edit-product-volume").val());
        } else {
            payload.productSize = $("#edit-product-size").val();
        }

        try {
            const response = await axios.post(`/admin/product/${id}`, payload);
            if (response.data?.data) {
                alert("Product updated successfully!");
                window.location.reload();
            } else {
                alert("Product update failed!");
            }
        } catch (err) {
            console.log(err);
            alert("Product update failed: " + (err.response?.data?.message || err.message));
        }
    });

});

function validateForm() {
    const productName = $(".product-name").val();
    const productPrice = $(".product-price").val();
    const productLeftCount = $(".product-left-count").val();
    const productCollection = $(".product-collection").val();
    const productDesc = $(".product-desc").val();
    const productStatus = $(".product-status").val();

    if (
        productName === "" ||
        productPrice === "" ||
        productLeftCount === "" ||
        productCollection === "" ||
        productDesc === "" ||
        productStatus === ""
    ) {
        alert("Please insert all details!");
        return false;
    } else return true;
}

function previewFileHandler(input, order) {
    const imgClassName = input.className;
    console.log("input:", input);

    const file = $(`.${imgClassName}`).get(0).files[0];
    const fileType = file["type"];
    const validImageType = ["image/jpg", "image/jpeg", "image/png"];

    if (!validImageType.includes(fileType)) {
        alert("Please insert only jpeg, jpg and png!");
    } else {
        if (file) {
            const reader = new FileReader();
            reader.onload = function () {
                $(`#image-section-${order}`).attr("src", reader.result);
            };
            reader.readAsDataURL(file);
        }
    }
}