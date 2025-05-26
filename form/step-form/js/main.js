$(document).ready(function () {
    let currentStep = 1;
    const form = $('#step-form');
    const steps = form.find('.step');
    let totalSteps = steps.length;

    // Initialize progress bar
    updateProgressBar();

    function updateProgressBar() {
        const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;
        $('#progress-bar-inner').css('width', progress + '%');
        $('#current-step').text(currentStep);
        $('#total-steps').text(totalSteps);
    }

    function showStep(step) {
        steps.removeClass('active');
        $('#step' + step).addClass('active');
        updateProgressBar();
    }

    $('.btn-next').click(function () {
        if (currentStep < totalSteps) {
            currentStep++;
            showStep(currentStep);
        }
    });

    $('.btn-prev').click(function () {
        if (currentStep > 1) {
            currentStep--;
            showStep(currentStep);
        }
    });

    form.submit(function (event) {
        event.preventDefault();
        alert('Form submitted successfully!');
    });
    showStep(currentStep);
});
// Range Input
$(document).ready(function () {
    function SliderFun(ele) {
        for (let i = 0; i < ele.length; i++) {
            const element = ele[i];

            const values = element.value;
            const dataValue = element.getAttribute("max");
            const fullValue = Math.round((values * 100) / dataValue);
            element.nextSibling.parentNode.querySelector(".active-line").style.width =
                fullValue + "%";
            if (element.nextSibling.parentNode.querySelector(".active-dot")) {
                element.nextSibling.parentNode.querySelector(".active-dot").style.left =
                    fullValue + "%";
            }
            const vals = values / 2;
            const ulList = element.parentNode.parentElement.querySelectorAll("ul li");
            for (let ids = 0; ids < ulList.length; ids++) {
                if (ids < vals || ids == vals) {
                    ulList[ids].classList.add("active");
                } else {
                    ulList[ids].classList.remove("active");
                }
            }
            // }
        }
    }
    SliderFun($(".range-input input"));

    $(".range-input input").on("input", function () {
        SliderFun($(this));
    });
});
// Condition < 3
$(document).ready(function () {
    // Add change event listener to all elements with name="dataShared"
    $('input[name="dataShared"]').on('change', function () {
        let val = ($(this).val() / 2);
        if (val >= 3) {
            $(".conditional-value").removeClass('d-none');
        } else {
            $(".conditional-value").addClass('d-none');
        }
    });
});
$(document).ready(function () {
    $('input[name="employmentLength"]').on('change', function () {
        let val = ($(this).val() / 2);
        if (val >= 3) {
            $(".conditional-value").removeClass('d-none');
        } else {
            $(".conditional-value").addClass('d-none');
        }
    });
});
$(document).ready(function () {
    $('input[name="incomeType"]').change(function () {
        if ($(this).attr('id') === 'selfEmployed') {
            $('.Income-condition').removeClass('d-none');
        } else {
            $('.Income-condition').addClass('d-none');
        }
    });
    $('input[name="incomeType"]:checked').trigger('change');
});

// payment
$(document).ready(function () {
    $('.currency-input').on('input', function () {
        var input = $(this).val();
        var numericValue = input.replace(/[^0-9.]/g, '');
        var parts = numericValue.split('.');
        var integerPart = parts[0];
        var decimalPart = parts.length > 1 ? parts[1] : '';
        integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        var formattedValue = decimalPart ? integerPart + '.' + decimalPart : integerPart;
        $(this).val('$ ' + formattedValue);
    });
});
